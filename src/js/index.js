function setCookie(name, value, days){
    let date = new Date();
    days = days || 365;
    date.setTime(+ date + (days*24*60*60*1000));
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    return value
}

function getCookie(name1) {
    let name = name1 + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' '){
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkThemeCookie(){
    let siteTheme = getCookie('siteTheme');
    if(siteTheme === 'sombre'){
        $("body").css("background-color", "#292b2f");
        $(".callout-primary").removeClass("callout-primary").addClass("callout-dark");
        $('button, a').css("background-color", "#2f3136").css("color", "#2e3032").removeClass("btn-primary").addClass("btn-secondary");
        $('.card').css("background-color", "#36393f");
        $('.callout').css("background-color", "#36393f");
        $('h5, label, p, label, div, button, .badge, a').css("color", "#e2e2e2");
        $( "#theme" ).prop( "checked", true );
    }else{
        console.log('Pas de cookie siteTheme');
        setCookie('siteTheme', 'clair', 0.007);
    }
}

function checkCookieConsent() {
    if(checkCookie('cookieConsent')){

    }else{
        $('#staticBackdrop').modal('show');
    }
}

checkCookieConsent();
checkThemeCookie();

$('#list').html(
    $('#list li')
        .get()
        .sort(function (a, b) {
            return (a.innerHTML.replace(/^\s*/, '').toLowerCase() >= b.innerHTML.replace(/^\s*/, '').toLowerCase()) ? 1 : -1;
        })
);


$('#list li').each(function () {


    let letter = $(this).text().match(/^\s*([a-z])/im)[1].toUpperCase();


    if ($("#_" + letter).length === 0) {
        $('#list').append(

        );
    }


    $('#_' + letter).append($(this));
});

function checkCookie(name) {
    let cookie = getCookie(name);
    return (cookie !== "");
}

$(window).on("load", function () {

    $(".j").append("<span class=\"badge badge-success\" style=\"margin=1%\">@Java</span>");
    $(".bd").append("<span class=\"badge badge-success\" style=\"margin=1%\">@bedrock</span>");


    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#list li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#Bedrock").on("click", function () {
        $("#list li").fadeIn();
        $("#list li:not('.bedrock')").fadeOut();
    });

    $("#CookieConsented").on("click", function () {
        setCookie("cookieConsent","true",255);
        $('#staticBackdrop').modal('hide');
    });

    $("#Java").on("click", function () {
        $("#list li").fadeIn();
        $("#list li:not('.java')").fadeOut();
    });

    $("#ResetTriVer").on("click", function () {
        $("#list li").fadeIn();
    });

    $('#theme').on('click', function () {
        if ($('#theme').is(':checked')) {

            $("body").css("background-color", "#292b2f");
            $(".callout-primary").removeClass("callout-primary").addClass("callout-dark");
            $('button, a').css("background-color", "#2f3136").css("color", "#2e3032").removeClass("btn-primary").addClass("btn-secondary");
            $('.card').css("background-color", "#36393f");
            $('.callout').css("background-color", "#36393f");
            $('h5, label, p, label, div, button, .badge, a').css("color", "#e2e2e2");
            setCookie('siteTheme', 'sombre', 0.007);

        }
        else {
            setCookie('siteTheme', 'clair', 0.007);
            document.location.reload(true);
        }
    });

});

let tagsSearch = document.getElementsByClassName("tagsearch");
for (let i = 0; i < tagsSearch.length; i++) {
    tagsSearch[i].onclick = function () {
        $('#search').val(tagsSearch[i].innerText);

        let value = $("#search").val().toLowerCase();
        $("#list li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    }
}