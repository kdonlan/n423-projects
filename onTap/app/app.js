function init() {
  $.get("views/home/home.html", (homePageData) => {
    $("#app").html(homePageData);
  });

  $("nav a").click((e) => {
    let linkID = e.currentTarget.id;
    $.get(`views/${linkID}/${linkID}.html`, (pageData) => {
      $("#app").html(pageData);
      console.log("id clicked");
    });
  });
}


$(document).ready(() => {
  init();
});
