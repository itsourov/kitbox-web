$(function () {
    $("#includedContent").load("./pages/homepage.html");
});

function loadPage(target) {
    $("#includedContent").load(target);
}