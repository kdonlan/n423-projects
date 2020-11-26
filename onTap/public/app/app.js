///connect to the database
var _db;

//add to collections
var fakeBreweries = {
  name: "Liquid Roots",
  city: "Lenoir"
};

var users = {};

function initFirebase() {
  firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
      console.log("Connected");
      _db = firebase.firestore();
    });
}

/////////////////////// add Data Button -- for CREATE ////////////////////////

function initListeners() {
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
    .then(function(querySnapshot) {
      //to loop through
      querySnapshot.forEach(function(doc) {
        console.log(doc.data(), " ", doc.id);

      //for a single record as seen on line #40 
      //and change this to console.log(querySnapshot.data());
      })
    })
  })
}

/////////////////////////////////////////////////////////////////////////////






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
    let app = firebase.app();
    initFirebase();
    initListeners();
  } catch (e) {
    console.error(e);
  }
});

//invoking all functions in the application ///////////////////////////////////////////////////////////////
initViews();