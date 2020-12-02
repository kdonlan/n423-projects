console.log("js app file is linked");
///connect to the database
var _db;

//add to collections (use add data button to load the json into firebase)
let breweryCollection =
{
  "breweryName": "Liquid Roots",
  "breweryStreet": "1048 Harper Ave. NW",
  "cityStateZip": "Lenoir, NC 55521",
  "breweryPhone": "828-572-1106",
  "breweryUrl": "https://www.liquidrootsbrewing.com/",
  "breweryLogoFile": "./images/liquid-roots.png"
}

console.log(breweryCollection);
console.log(breweryCollection.breweryName);
console.log(breweryCollection.breweryStreet);
console.log(breweryCollection.cityStateZip);
console.log(breweryCollection.breweryPhone);
console.log(breweryCollection.breweryUrl);
console.log(breweryCollection.breweryLogoFile);

function initFirebase() {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        // var uid = user.uid;
        // console.log("Connected");
        // console.log(uid);
        _db = firebase.firestore();
        $("#signOut").show();
        $("#signIn").hide();
        $("#signUpPopup").hide();
      } else {
        $("#signOut").hide();
        console.log("No User");
        // _db = {};
      }
    });
}


function initListeners() {

  /////////////////////// Sign UP  ////////////////////////
  /////////////////////// Sign IN /////////////////////////
  /////////////////////// Sign OUT ////////////////////////
  /////////////////////// CREATE Brewery /////////////////////
  /////////////////////// READ Brewery /////////////////////
  /////////////////////// UPDATE Brewery //////////////////
  /////////////////////// DELETE Brewery //////////////////


  /////////////////////// Sign UP  ////////////////////////

  $("#signUpPopup").click(function () { //popup modal code here
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

              confirmButtonText: 'Explore',
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

              confirmButtonText: 'RETRY',
              confirmButtonColor: '#fbb03b'
            })
          });
      }
    })
  })


  /////////////////////// Sign IN  ////////////////////////

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

              confirmButtonText: 'Explore',
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


  /////////////////////// Sign OUT  ////////////////////////

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


  ///////////***************************///////////***************************///////////***************************///////////*************************** */
  ///////////***************************///////////***************************///////////***************************///////////*************************** */
  ///////////***************************///////////***************************///////////***************************///////////*************************** */
  ///////////***************************///////////***************************///////////***************************///////////*************************** */
  ///////////***************************///////////***************************///////////***************************///////////*************************** */

  /////////////////////// CREATE (THROUGH THE DATABASE---NOT THE APP)
  // need to get inputs and SUBMIT Button working here! -- for CREATE ////////////////////////
  //hard-coded above works great :)
  $("#add").click(function () {
    _db //finds the collection or creates it in Firestore
      .collection("breweries")
      .add(breweryCollection)
      .then(function (data) {
        console.log(data.id);
        console.log(breweryCollection.breweryName);
        console.log(breweryCollection.breweryStreet);
        console.log(breweryCollection.cityStateZip);
        console.log(breweryCollection.breweryPhone);
        console.log(breweryCollection.breweryUrl);
        console.log(breweryCollection.breweryLogoFile)
      });


    /////////////////////// GET Data Button -- for READ ////////////////////////
    $("#get").click(function () {
      // use to populate info in pages //////////////////////
      _db
        .collection("breweries")
        // .data("EXAMPLEkkd76884kd") //add this here to to get a specific record in the database, 
        .get()

        //query Snapshots are in the Firestore documentation
        .then(function (querySnapshot) {
          //DO I MAKE AN EMPTY ARRAY HERE TO DEFINE A SINGLE BREWERY WITH INDEX?
          //to loop through
          querySnapshot.forEach(function (doc) {
            console.log(data.breweryCollection);
            // console.log(breweryCollection.breweryName);
            // console.log(breweryCollection.breweryStreet);
            // console.log(breweryCollection.cityStateZip);
            // console.log(breweryCollection.breweryPhone);
            // console.log(breweryCollection.breweryUrl);
            // console.log(breweryCollection.breweryLogoFile)

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
  })
}

//loads the views for the Single Page application ///////////////////////////////////////////////////////////////
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
      $(".halfImageLogo a, .breweryEntry a").click((e) => {
        $.get(`views/profile/profile.html`, (profileData) => { ///placeholder - ${breweryID} can go here to find html page to serve from the database
          $("#content").html(profileData);
        })
      })
    });
  });
}

//loads the view for the form to add a brewery //////////////////// /////////////// /////////////// ////////////
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

function goPrev() {
  window.history.go(-1); return false;
}



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






    // let breweryUrl = breweryUrl.val;
    // let profileHTML = `<div class="headerContent-bg">	
    //     <div class="header">	
    //     <h3><img src="./images/liquid-roots.png" alt=""></h3>	
    //     <h3>Liquid Roots Brewing Project</h3>	
    //     <h1>on tap - 11/9/2020</h1>	
    // </div>	
    // </div>	

    // <div class="columnLayout">	
    // <div class="column">	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    // </div>	

    // <div class="column">	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //         <h3>Weiz Guy | ABV 5.4%</h3>	
    //         <p>HEFENWIZEN</p>	
    //         <p>A bright, crisp light hefe, sure to make your day!</p>	
    //         <a class="journal-add" href="journal.html">+ADD TO JOURNAL</a>	
    //     </div>	
    //     <div class="beerItem">	
    //     <img src="./images/liquid-roots-profile-pic.png" alt="">	
    // </div>	
    // <!-- <div class="beerItem">	
    //     <button class="myButton">EDIT BEERS</button>	
    // </div> -->	
    // </div>	
    // </div>	
    // <hr style="width: 90%;margin: 0 auto; margin-bottom: 50px;">	
    // <div class="header">	
    // <h3>About Liquid Roots Brewing Company</h3>	
    // <li>Lenoir, NC Brewery and Tap room.</li>	
    // <li>Dog and Kid Friendly.</li>	
    // <li>Beer, coffee, wine, and great people.</li>	
    // <li>	
    //     <h4>Follow Liquid Roots Brewing Project</h3>	
    // </li>	

    // <div class="side-by-side">	
    //     <li><a href="https://www.instagram.com/liquidrootsbrewing/" target="blank"><img	
    //                 style="width: 70px;margin:0 auto; padding: 10px;" src="./images/instagram-final.png"	
    //                 alt=""></a><a href="https://www.facebook.com/liquidrootsbrewing" target="blank"><img	
    //                 style="width: 70px;margin:0 auto; padding: 10px;" src="./images/facebook-final.png"	
    //                 alt=""></a></li>	
    // </div>	
    // </div>`

    // _db //finds the collection or creates it in Firestore
    //   .collection("breweries")
    //   .add(breweryCollection)
    //   .then(function (doc) {
    //     console.log();
    //   });