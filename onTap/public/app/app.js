console.log("js app file is linked");
///connect to the database
var _db;

//add to collections (use add data button to load the json into firebase)
var fakeBreweries = {
  name: "Liquid Roots",
  city: "Lenoir"
};

function initFirebase() {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log("Connected");
        console.log(uid);
        _db = firebase.firestore();
      } else {
        console.log("No User");
        // _db = {};
      }
    });
}

//WRONG!!!!!
// function initFirebase() {
//   firebase.auth().onAuthStateChanged((user) => { //checks the state of the user in the sign up, sign in and sign out phase
//     if (user) {
//       console.log("user is here ");
//       var uid = user.uid;
//       console.log(uid);
//       console.log("user is here ", uid);


//       _db = firebase.firestore();
//       console.log("Connected");
//       // ...
//     } else {
//       console.log("not connected :(");
//     }
//   });
// }


function initListeners() {

  /////////////////////// add Sign UP link  ////////////////////////

  $("#signUpPopup").click(function () { //popup modal code here
    // $("#signUp").show();
    Swal.mixin({
      confirmButtonText: 'Next &rarr;',
      confirmButtonColor: '#fbb03b',
      showCancelButton: true,
    }).queue([
      {
        title: '<h1 style="font-size:24px">Enter your Email<h1>',
        input: 'email',
        inputPlaceholder: 'Email'
      },
      {
        title: '<h1 style="font-size:24px">Enter your Password<h1>',
        input: 'password',
        inputPlaceholder: 'Password'
      }
    ]).then((result) => {
      if (result.value) {
        const email = result.value[0];
        const password = result.value[1];
        // console.log(email, password);
        // console.log(result.value[0]);
        // console.log(email)
        // console.log(password)
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log("added!");
            Swal.fire({
              title: '<h1 style="font-size:24px;font-family:Radley serif; text-align: center;">All set!<h1>',
              html: `
                <pre><code><p style="font-family: serif; text-align: center;">You are now a member of On Tap: Your username is ${email}.</p></code></pre>
              `,

              confirmButtonText: 'Explore the Site',
              confirmButtonColor: '#fbb03b'
            })
            $("#signOut").show();
            $("#signIn").hide();
            $("#signUpPopup").hide();
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            Swal.fire({
              title: '<h1 style="font-size:24px;font-family:Radley serif">Whoops!<h1>',
              html: `
                <pre><code><p style="font-family: serif">${errorMessage}</p></code></pre>
              `,

              confirmButtonText: 'Please try again.',
              confirmButtonColor: '#fbb03b'
            })
          });
      }
    })
  })


  /////////////////////// Sign IN link  ////////////////////////

  $("#signIn").click(function () {
    Swal.mixin({
      confirmButtonText: 'Next &rarr;',
      confirmButtonColor: '#fbb03b',
      showCancelButton: true,
    }).queue([
      {
        title: '<h1 style="font-size:24px">Enter your Email<h1>',
        input: 'email',
        inputPlaceholder: 'Email'
      },
      {
        title: '<h1 style="font-size:24px">Enter your Password<h1>',
        input: 'password',
        inputPlaceholder: 'Password'
      }
    ]).then((result) => {
      if (result.value) {
        const email = result.value[0];
        const password = result.value[1];
        // console.log(email, password);
        // console.log(result.value[0]);
        // console.log(email)
        // console.log(password)
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log("signed in!");
            Swal.fire({
              title: '<h1 style="font-size:24px;font-family:Radley serif">All set!<h1>',
              html: `
                <pre><code><p style="font-family: serif">You are now signed in. Cheers!</p></code></pre>
              `,

              confirmButtonText: 'Explore the Site',
              confirmButtonColor: '#fbb03b'
            })
            $("#signOut").show();
            $("#signIn").hide();
            $("#signUpPopup").hide();
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            Swal.fire({
              title: '<h1 style="font-size:24px;font-family:Radley serif">Whoops!<h1>',
              html: `
                <pre><code><p style="font-family: serif">${errorMessage}</p></code></pre>
              `,

              confirmButtonText: 'Please try again.',
              confirmButtonColor: '#fbb03b'
            })
          });
      }
    })

  })


  /////////////////////// add Sign OUT link  ////////////////////////

  $("#signOut").click(function () {
    firebase
      .auth()
      .signOut().then(function () {
        $("#signOut").hide();
      }).catch(function (error) {
        console.log(errorMessage);
      });
    Swal.fire({
      confirmButtonText: 'Okay',
      confirmButtonColor: '#fbb03b',
      html: '<h3>You are now signed out. Please come back soon!</h3>'
    })
    _db = " ";
    $("#signOut").hide();
    $("#signIn").show();
    $("#signUpPopup").show();
  });


  /////////////////////// add Brewery Button -- for CREATE ////////////////////////

  $("#submitBreweryBtn").click(function () { //use for submitting for brewery form submit
    // var breweryName = 
    // var breweryProfileHTML = `<html>        <h3>${breweryName}</h3>
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

    //for placeholders below//////////////////////////////////////////
    // let profileID = e.currentTarget.id;
    // let formPage = e.currentTarget.id;

    $.get(`views/${linkID}/${linkID}.html`, (contentData) => {
      $("#content").html(contentData);

      //brewery profile page names to populate in content area
      $(".entry a").click((e) => {
        $.get(`views/profile/profile.html`, (profileData) => { ///placeholder - ${breweryID} can go here to find html page to serve from the database
          $("#content").html(profileData);
        })
      })
    });
  });
}

//loads the view for the form to add a brewery
function initFormView() {
  $(".navWrapper a").click((e) => {
    //add brewery button to get the form to populate in content area
    $("#breweryformBtn").click((e) => {
      $.get(`views/breweryform/breweryform.html`, (formData) => { ///placeholder - ${formPage} can go here to find html page to serve from the database
        $("#content").html(formData);
        console.log("takes to form?!");
      })
    })
  })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function () {
  try {
    initFirebase();
    initListeners();
    initViews();
    initFormView();
  } catch (e) {
    console.error(e);
  }
});

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