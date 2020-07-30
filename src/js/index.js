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

    $("#Java").on("click", function () {
        $("#list li").fadeIn();
        $("#list li:not('.java')").fadeOut();
    });

    $("#ResetTriVer").on("click", function () {
        $("#list li").fadeIn();
    });

    $('#theme').on('click', function () {
        if ($('#theme').is(':checked')) {

            $("body").css("background-color", "#3c3f41");
            $(".callout-primary").removeClass("callout-primary").addClass("callout-dark");
            $('button, a').css("background-color", "#d6d5d5").css("color", "#2e3032").removeClass("btn-primary").addClass("btn-secondary");
            $('.card').css("background-color", "#838383");
            $('.callout').css("background-color", "#838383");
            $('h5, label, p, label').css("color", "#e2e2e2");
        }
        else {
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