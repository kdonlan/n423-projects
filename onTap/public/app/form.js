// console.log("js file is linked");

// var firebaseConfig = {
//     apiKey: "AIzaSyBvquBTt809YNy592UlK_dC6MjVkwT3S0o",
//     authDomain: "ontap-dd5f2.firebaseapp.com",
//     databaseURL: "https://ontap-dd5f2.firebaseio.com",
//     projectId: "ontap-dd5f2",
//     storageBucket: "ontap-dd5f2.appspot.com",
//     messagingSenderId: "815224760446",
//     appId: "1:815224760446:web:15648f2ad409641ec1502f",
//     measurementId: "G-GZXJLDKDSY"
// };
// firebase.initializeApp(firebaseConfig);


// let auth = firebase.auth();

// function signUp() {
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//     promise.catch(e => alert(e.message));

//     // alert("Signed Up");
// }

// function signIn() {
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//     promise.catch(e => alert(e.message));

//     alert("You are successfully signed in as " + email.value);
// }


// function signOut() {
//     auth.signOut();
//     alert("Sign out successful");
// }