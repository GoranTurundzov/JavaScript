
$("#clicker").click(function(){
    $("#clicker").text(`Click me to toggle a hidden secret`);
    $("#secret").fadeToggle();
})

////////////////////////////////////////////////////////////////

$("#clicker2").click(function(){
    $(".secret").slideToggle(`slow`)
})


////////////////////////////////////////////////////////

$("#clicker3").click(function(){

    $("img").attr("src", "slika.jpg");
})

