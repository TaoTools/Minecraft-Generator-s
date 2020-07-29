
    $( '#list' ).html(
        $( '#list li' )
            .get()
            .sort( function( a, b ){
                return ( a.innerHTML.replace( /^\s*/, '').toLowerCase() >= b.innerHTML.replace( /^\s*/, '').toLowerCase() ) ? 1 : -1; 
            })
     
    );
    

    $( '#list li' ).each( function(){
        

        var letter = $(this).text().match( /^\s*([a-z])/im )[1].toUpperCase();
     

        if ( $( "#_" + letter ).length == 0 ){
            $( '#list' ).append(

            );
        }
     

        $( '#_' + letter ).append( $(this) );
    });

$(document).ready(function(){

    $(".j").append("<span class=\"badge badge-success\" style=\"margin=1%\">@Java</span>");
    $(".bd").append("<span class=\"badge badge-success\" style=\"margin=1%\">@bedrock</span>");


    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    $("#Bedrock").click(function(){
      $("#list li").fadeIn();
      $("#list li:not('.bedrock')").fadeOut();
    });

    $("#Java").click(function(){
      $("#list li").fadeIn();
      $("#list li:not('.java')").fadeOut();
    });

  });

let tagsSearch = document.getElementsByClassName("tagsearch");
for(let i = 0; i < tagsSearch.length; i++){
    tagsSearch[i].onclick = function (){
        $('#search').val(tagsSearch[i].innerText);

      let value = $("#search").val().toLowerCase();
      $("#list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    }
}