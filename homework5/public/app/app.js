//controller

import * as Model from "../model/model.js";


function initListeners() {
    $("#genres").change(function () {
        console.log(this.value);
        Model.getGenreTitle(this.value);
    })
}

$(document).ready(function () {
    Model.initFirebase();
    Model.signIn(initListeners);
});