//handle all the data calls to database

var _db;

export function initFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("There is a user");
        } else {
            console.log("No user available.")
            _db = "";
        }
    });
}

export function signIn(callback) { //this is where you'd usually pass in email/password
    firebase
        .auth()
        .signInAnonymously()
        .then(function (result) {
            _db = firebase.firestore();
            callback();
            showAlbums();
        });
}

export function getGenreTitle(genre) {
    $(".content").html('');
    $(".content").append(`<h3>${genre}</h3><br>`)
    _db
        .collection("Albums")
        .where("genre", "==", genre)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let album = doc.data();
                $(".content").append(`<a href="${album.albumCover}"><img class="img" src="${album.albumCover}"></a><p class="albumTitle">${album.albumName}</p><p class="albumTitle">${album.artist}</p><p>${album.genre}</p><br><hr>`)
            })
        })
}

export function showAlbums() {
    $(".content").html('');
    _db
        .collection("Albums")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let album = doc.data();
                $(".content").append(`<div><a href="${album.albumCover}"><img class="img" src="${album.albumCover}"></a><p class="albumTitle">${album.albumName}</p><p class="albumTitle">${album.artist}</p><p>${album.genre}</p><br><hr><div>`)
            })
        })
}