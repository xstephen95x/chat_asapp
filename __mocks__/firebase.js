/* Test Mock for Firebase.
 * - reference paths are hard coded into mock.
 * - leave a comment pointing to the test its used in.
 *
 */
const firebase = jest.genMockFromModule("firebase");

let data = { auth: {}, objects: {} };

const setMock = mocks => {
  data = mocks;
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
const database = () => {
  return {
    ref: path => {
      return {
        once: (type, cb) => {
          let snapshot = {};
          if (path === "users/user1/objects") {
            //ListView.test.js
            snapshot.val = () => data.objects;
          } else if (path === "objects/obj1") {
            snapshot.val = () => data.object1;
          } else if (path === "objects/obj2") {
            snapshot.val = () => data.object2;
          }
          if (cb) {
            // synchronous
            return cb(snapshot);
          } else {
            // asynchronous
            return new Promise((resolve, reject) => {
              resolve(snapshot);
            });
          }
        },
        on: (type, cb) => {
          let snapshot = {};
          return cb(snapshot);
        },
        transaction: cb => {
          return cb();
        }
      };
    }
  };
};

const auth = () => {
  return {
    currentUser: data.auth,
    onAuthStateChanged: cb => cb(true)
  };
};

const storage = () => {
  return {
    ref: {
      child: {
        put: () => {
          return {
            on: (change, update, err, done) => {
              snapshot = { bytesTransferred: 0, totalBytes: 100 };
              update(snapshot);
              err();
              done();
            }
          };
        }
      }
    }
  };
};

firebase.setMock = setMock;

firebase.auth = auth;
firebase.database = database;
firebase.storage = storage;

export default firebase;
