`var _db;
var fakeNews = {
  fname: "Kim",
  lname: "Donlan",
};

function initFirebase() {
  firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
      console.log("connected");
      _db = firebase.firestore();
    });
}

function initListeners() {
  $("#add").click(function () {
    _db
      .collection("names")
      .add(fakeNews)
      .then(function (doc) {
        console.log("Added Data and here is the reference number: ", doc.id);
        console.log(fakeNews);
      });
  });
}

$("#get").click(function () {
  _db
    .collection("names")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data() + " ", doc.id);
      });
    });
});

$("#signup).click(function () {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("signup");
  // ...
});email-password.html
})

$("#login").click(function () {
  console.log("login");
});


$("#logout").click(function () {
  console.log("logout");
});



$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    initListeners();
  } catch (e) {
    console.error(e);
  }
});

//***************** TRYING TO GET ONE RECORD ********************//

// $("#get").click(function() {
//     _db
//         .collection("names")
//         .get()
//         .then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//                 console.log(doc.data() + ' ', doc.id);
//             })
//         })
// });

//this gets one doc NOT WORKING YET!!!
//     $("#get").click(function() {
//         _db //
//             .collection("names") //
//             .doc("TSA3W6JcQ4wVzje8XK9w") //
//             .get() //
//             .then(function(querySnapshot) {
//                 console.log(querySnapshot.data());
//                 querySnapshot(function(doc) {
//                     console.log(doc.data() + " " + doc.id); // //
//                 }); //
//             });

//     });
// }

// $(document).ready(function() {
//     try {
//         let app = firebase.app();
//         initFirebase();
//         initListeners();
//     } catch (e) {
//         console.error(e);
//     }
// });
`;
