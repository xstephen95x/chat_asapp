import firebase from "firebase";

let providers = {};
if (process.env.NODE_ENV === "test") {
  providers.google = () => {};
  providers.github = () => {};
  providers.facebook = () => {};
} else {
  providers.google = new firebase.auth.GoogleAuthProvider();
  providers.github = new firebase.auth.GithubAuthProvider();
  providers.facebook = new firebase.auth.FacebookAuthProvider();
}

//resolves false unless there was an error.
export const handleSocialAuth = (e, provider) => {
  e.preventDefault();
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithRedirect(providers[provider])
      .then(result => {
        importUser(result.user);
        resolve(false);
      })
      .catch(err => {
        let alert = err.message.slice(0, 150);
        resolve(alert);
      });
  });
};

//returns true if new user was made
export const importUser = user => {
  firebase
    .database()
    .ref(`users/${user.uid}`)
    .once("value", snapshot => {
      if (!snapshot.exists()) {
        makeNewUser(user);
        return true;
      } else {
        return false;
      }
    });
};

export const createNewEmailUser = (email, pass) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(user => {
        makeNewUser(user);
        user.sendEmailVerification();
        resolve(false);
      })
      .catch(error => {
        let alert = error.message.slice(0, 150);
        resolve(alert);
      });
  });
};

export const emailLogIn = (email, pass) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        resolve(false);
      })
      .catch(err => {
        resolve(err.message.slice(0, 150));
      });
  });
};

export const setDisplayName = displayName => {
  let user = firebase.auth().currentUser;
  user.updateProfile({ displayName: displayName });
  firebase
    .database()
    .ref(`users/${firebase.auth().currentUser.uid}`)
    .transaction(data => {
      console.log("setting dn", data);
      if (!data) data = {};
      data.display_name = displayName;
      return data;
    });
};
export const makeNewUser = user => {
  let newUser = {
    uid: user.uid,
    email: user.email,
    display_name: user.displayName,
    joined: new Date().getTime()
  };
  firebase
    .database()
    .ref(`users/${user.uid}`)
    .transaction(data => {
      console.log("setting new user", user.uid);
      return newUser;
    });
};
