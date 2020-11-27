///connect to the database
var _db;

//add to collections
var fakeBreweries = {
  name: "Liquid Roots",
  city: "Lenoir"
};


function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => { //checks the state of the user in the sign up, sign in and sign out phase
    if (user) {
      // console.log("user is here ", user)
      var displayName = user.displayName;
      var email = user.email;
      var uid = user.uid;
      console.log("user is here ", uid, email);

      console.log("Connected");
      _db = firebase.firestore();
      // ...
    } else {

    }
  });
}


function initListeners() {

  /////////////////////// add Sign UP link  ////////////////////////

  $("#signUp").click(function () {
    let email = "kimdonl@iu.edu";
    let password = "password";
    // let email = document.getElementById("email");
    // let password = document.getElementById("password");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode)
        // ..
      });
    // console.log("sign up");
    console.log("user is here ", email);
  })


  /////////////////////// add Sign IN link  ////////////////////////

  $("#signIn").click(function () {
    let email = "kimdonl@iu.edu";
    let password = "password";
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    console.log("user is here again ", email)
  })


  /////////////////////// add Sign OUT link  ////////////////////////

  $("#signOut").click(function () {
    firebase
      .auth()
      .signOut().then(function () {
        console.log("You've successfully signed out.")
        _db = " ";
      }).catch(function (error) {
        // An error happened.
      });
    alert("Sign out successful");
  })


  /////////////////////// add Data Button -- for CREATE ////////////////////////

  $("#add").click(function () {
    _db //finds the collection or creates it in Firestore
      .collection("breweries")
      .add(fakeBreweries)
      .then(function (doc) {
        console.log("Brewery has been added: ", doc.id);
      });
  });


  /////////////////////// get Data Button -- for READ ////////////////////////

  $("#get").click(function () {
    _db
      .collection("breweries")
      // .doc("EXAMPLEkkd76884kd") //add this here to to get a specific record in the database, 
      .get()

      //query Snapshots are in the Firestore documentation
      .then(function (querySnapshot) {
        //to loop through
        querySnapshot.forEach(function (doc) {
          console.log(doc.data(), " ", doc.id);

          //for a single record as seen on line #40 
          //and change this to console.log(querySnapshot.data());
        })
      })
  })

  /////////////////////// UPDATE Data Button -- for UPDATE ////////////////////////

  $("#update").click(function () {

  })

  /////////////////////// DELETE Data Button -- for DELETE ////////////////////////

  $("#delete").click(function () {

  })
}



//gets the various pages viewing in the Single Page application ///////////////////////////////////////////////////////////////

function initViews() {
  $.get("views/home/home.html", (contentData) => {
    $("#content").html(contentData);
  });

  $("nav a").click((e) => {
    let linkID = e.currentTarget.id;
    $.get(`views/${linkID}/${linkID}.html`, (contentData) => {
      $("#content").html(contentData);
    });
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function () {
  try {
    initListeners();
    let app = firebase.app();
    initFirebase();

  } catch (e) {
    console.error(e);
  }
});

//invoking all functions in the application ///////////////////////////////////////////////////////////////
initViews();


//for rules once app is ready, after testing:

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.auth != null;
//     }
//   }
// }