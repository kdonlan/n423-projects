//import the model
import * as MODEL from "../model/model.js";

function initListeners() {
  $("#signIn").click((e) => {
    MODEL.signIn();
  });

  $("#signOut").click((e) => {
    MODEL.signOut();
  });

  $("#submitBtn").click((e) => {
    let file = $("#myImage").get(0).files[0];
    let fileName = +new Date() + "-" + file.name;
    let metadata = { contentType: file.type };
    console.log(file);

    //showed in class - size can be determined so you don't upload something too big
    console.log(fileName);
    console.log(metadata);

    MODEL.uploadImage(filename, file, metadata);
  });
}


$(document).ready(() => {
  console.log("running the page");
  MODEL.initFirebase();
  initListeners();
})










// import * as MODEL from "../model/model.js";
// const ref = firebase.storage().ref();

// function initApp() {
//   $("#submitBtn").click((e) => {
//     let file = $("#myImage").get(0).files[0];
//     let fileName = +new Date() + "-" + file.name; //+new Date() Returns the number of milliseconds since 01 January, 1970
//     let metadata = { contentType: file.type };

//     MODEL.uploadImage(fileName, file, metadata);
//   });

//   $("#signIn").click((e) => {
//     MODEL.signIn();
//   });

//   $("#signOut").click((e) => {
//     MODEL.signOut();
//   });
// }

// $(document).ready(() => {
//   MODEL.initFirebase();
//   initApp();
// });
