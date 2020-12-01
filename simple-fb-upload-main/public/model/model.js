export function initFirebase() {
  console.log("init fb");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      $("#submitBtn").prop("disabled", (_, val) => !val);
    } else {
      console.log("No user");
    }
  })
}

//easy sign in anon
export function signIn() {
  console.log("in the function");
  firebase
    .auth()
    .signInAnonymously
    .then(() => {
      console.log("Signed in.")
    })
    .catch((error) => {
      console.log(error.message);
    })
}

//easy sign out
export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("signed out");
      $("#submitBtn").prop("disabled", (_, val) => !val);
    })
    .catch(function (error) {
      console.log("error ", error.message);
    });
}


export function uploadImage(fileName, file, metadata) {
  const ref = firebase.storage().ref();
  let uploadTask = ref.child(fileName).put(file, metadata);

  //pause, resume and cancel are also available
  // uploadTask.pause();
  // uploadTask.resume();
  // uploadTask.cancel();


  ///one way to do it
  uploadTask
  .then((snapshot) => {
    //get the download url
    snampshot.ref.getDownloadURL().then((url) => {
      console.log(url);
    })
  })  
  //or another way
  .then(() => {
    let image = ref.child(fileName);
    let urlPromise = image.getDownloadURL();
    urlPromise.then((url) => {
      console.log("url");
      $(".photoHolder").html(
        `<img src="${url}>`);
    })
  })
}









// const ref = firebase.storage().ref();
// var _db;

// export function initFirebase() {
//   console.log("init fb");
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log(user);
//       _db = firebase.firestore();
//       $("#submitBtn").prop("disabled", (_, val) => !val);
//     } else {
//       console.log("No User");
//       _db = {};
//     }
//   });
// }

// export function uploadImage(fileName, file, meta) {
//   let uploadTask = ref.child(fileName).put(file, meta);

//   // Pause the upload
//   //uploadTask.pause();

//   // Resume the upload
//   //uploadTask.resume();

//   // Cancel the upload
//   //uploadTask.cancel();

//   uploadTask
//     .then((snapshot) => {
//       snapshot.ref.getDownloadURL().then((url) => {
//         console.log(url);
//       });
//     })
//     .then(() => {
//       let image = ref.child(fileName);
//       let urlPromise = image.getDownloadURL();
//       urlPromise.then((url) => {
//         console.log(url);
//         $(".photoHolder").html(`<img src="${url}">`);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       console.log(error.message);
//       // A full list of error codes is available at
//       // https://firebase.google.com/docs/storage/web/handle-errors
//       switch (error.code) {
//         case "storage/unauthorized":
//           // User doesn't have permission to access the object
//           break;
//         case "storage/canceled":
//           // User canceled the upload
//           break;
//         case "storage/unknown":
//           // Unknown error occurred, inspect error.serverResponse
//           break;
//       }
//     });
//   console.log(fileName);
// }

// export function signIn() {
//   firebase
//     .auth()
//     .signInAnonymously()
//     .then(() => {
//       alert("you are signed in");
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorMessage);
//     });
// }
