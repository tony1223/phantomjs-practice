var page = require('webpage').create();
page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.onLoadFinished = function() {
    if(page.title == "Google"){
        google_home(page);
    }
    if(page.title.indexOf("TonyQ") != -1){
        google_searched(page);
    }
};

function google_home(page) {
    page.render('screencast/google.png');

    var size = page.evaluate(function () {
        //write the value in
        document.querySelectorAll("[name=q]")[0].value="TonyQ";
        return document.querySelectorAll("[name=q]").length;
    });
    page.render('screencast/google-filled.png');

    //submit the form
    page.evaluate(function () {
        //write the value in
        document.querySelectorAll("form")[0].submit();
    });    
}

function google_searched(){
    page.render('screencast/google-submited.png');
    phantom.exit();
}

page.open('http://google.com');
