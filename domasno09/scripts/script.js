let homework1 = $("#homework1");
let name1 = $("#name1");
let btn1 = $("#btn1");


function validateInput(){
    if(name1.val().length < 3){
        return false;
    } else {
        return true;
    }
}

function printNameInYellow(){
    homework1.children().last().css("background-color" , "green");
}

btn1.click(function (){
    $("#result").remove();
    if(validateInput() ===true){
    homework1.append(`<h1 id="result">Hello there ${name1.val()}!</h1>`);
    printNameInYellow();}
    else{
        homework1.append(`<h1 id="result">Please enter a valid name that is longer than 3 characters</h1>`);
    }
    name1.val("");
});

////////////////////////////////////////////////////////////////////////////////////////////////////


let text = $("#headerText");
let color = $("#color");
let genBtn = $("#generate");
let h3Msg = $("#messageBoard");
let homework2 = $("#homework2")
let colors = ["AliceBlue",
"Antiquewhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"Blanchedalmond",
"Blue",
"Blueviolet",
"Brown",
"Burlywood",
"Cadetblue",
"Chartreuse",
"Chocolate",
"Coral",
"Cornflowerblue",
"Cornsilk",
"Crimson",
"Cyan",
"Darkblue",
"Darkcyan",
"DarkgoldenRod",
"Darkgray",
"Darkgrey",
"Darkgreen",
"Darkkhaki",
"Darkmagenta",
"Darkolivegreen",
"Darkorange",
"Darkorchid",
"Darkred",
"Darksalmon",
"DarkseaGreen",
"DarkslateBlue",
"DarkslateGray",
"DarkslateGrey",
"Darkturquoise",
"Darkviolet",
"Deeppink",
"Deepskyblue",
"Dimgray",
"Dimgrey",
"Dodgerblue",
"Firebrick",
"Floralwhite",
"Forestgreen",
"Fuchsia",
"Gainsboro",
"Ghostwhite",
"Gold",
"Goldenrod",
"Gray",
"Grey",
"Green",
"Greenyellow",
"Honeydew",
"Hotpink",
"IndianRed",
"Indigo",
"Ivory",
"Khaki",
"Lavender",
"Lavenderblush",
"Lawngreen",
"Lemonchiffon",
"Lightblue",
"Lightcoral",
"Lightcyan",
"Lightgoldengodyellow",
"Lightgray",
"Lightgrey",
"Lightgreen",
"Lightsink",
"Lightsalmon",
"Lightseagreen",
"Lightskyblue",
"Lightslategray",
"Lightslategrey",
"Lightsteelblue",
"Lightyellow",
"Lime",
"Limegreen",
"Linen",
"Magenta",
"Maroon",
"Mediumaquamarine",
"Mediumblue",
"Mediumorchid",
"Mediumpurple",
"Mediumseagreen",
"Mediumslateblue",
"Mediumspringgreen",
"Mediumturquoise",
"Mediumvioletred",
"Midnightblue",
"Mintcream",
"Mistyrose",
"Moccasin",
"Navajowhite",
"Navy",
"Oldlace",
"Olive",
"Olivedrab",
"Orange",
"Orangered",
"Orchid",
"PalegoldenRod",
"Palegreen",
"Paleturquoise",
"PaleVioletred",
"Papayawhip",
"Peachpuff",
"Peru",
"Pink",
"Plum",
"Powderblue",
"Purple",
"Rebeccapurple",
"Red",
"Rosybrown",
"Royalblue",
"Saddlebrown",
"Salmon",
"Sandybrown",
"Seagreen",
"Seashell",
"Sienna",
"Silver",
"Skyblue",
"Slateblue",
"Slategray",
"Slategrey",
"Snow",
"Springgreen",
"Steelblue",
"Tan",
"Teal",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"White",
"Whitesmoke",
"Yellow",
"Yellowgreen",];

genBtn.click(function(){
    let realcolor = false;
    $("#result2").remove();
    for(let i = 0 ; i < colors.length ; i++){
        if(colors[i] == color.val()){
            realcolor = true;
            break; } }
       if(realcolor === true && text.val() !== ""){
           if(color.val() === "Black"){
            homework2.append(`<h1 id="result2"> ${text.val()} </h1>`);
            homework2.children().last().css(`background-color` , `${color.val()}`);
            homework2.children().last().css(`color` , `white`)
        } else {
            homework2.append(`<h1 id="result2"> ${text.val()} </h1>`);
            homework2.children().last().css(`background-color` , `${color.val()}`);
        }
    }
        else{
            homework2.append(`<h1 id="result2">Please enter a valid name of a color  and some text</h1>`);
        }
        clearInputs();
        
});
function clearInputs(){
    text.val("")
    color.val("")
}
color.keyup(function() {
    $(this).val($(this).val().substr(0, 1).toUpperCase() + $(this).val().substr(1).toLowerCase());
  });
