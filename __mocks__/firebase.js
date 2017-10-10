/* Test Mock for Firebase.
 * - reference paths are hard coded into mock.
 * - leave a comment pointing to the test its used in.
 *
 */
const firebase = jest.genMockFromModule("firebase");

let data = { auth: {}, chats: {} };

const setMock = mocks => {
  data = mocks;
};

const database = () => {
  return {
    ref: path => {
      return {
        once: (type, cb) => {
          let snapshot = {};
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
          let snapshot = { val: () => data.chats };
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

firebase.setMock = setMock;

firebase.auth = auth;
firebase.database = database;

export default firebase;
