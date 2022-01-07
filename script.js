$(function () {
    $("#includedContent").load("https://raw.githubusercontent.com/itsourov/kitbox-web/master/pages/homepage.html",function(){

        document.getElementById('loading').classList.add("hidden");
      });
  
});

function loadPage(target) {
    document.getElementById('loading').classList.remove("hidden");
    $("#includedContent").load(target,function(){

        document.getElementById('loading').classList.add("hidden");
      });
}