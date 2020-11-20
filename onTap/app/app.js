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


$(document).ready(() => {
  initViews();
});
