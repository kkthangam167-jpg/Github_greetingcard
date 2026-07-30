function randomColor(){

    let colors=[
        "red",
        "blue",
        "green",
        "purple",
        "orange",
        "deeppink",
        "gold",
        "brown",
        "teal",
        "darkcyan"
    ];

    return colors[Math.floor(Math.random()*colors.length)];
}

function changeColor(){

    document.getElementById("main-title").style.color=randomColor();

    document.getElementById("sub-title").style.color=randomColor();

    document.getElementById("text").style.color=randomColor();

    document.getElementById("colorBtn").style.backgroundColor=randomColor();

    document.getElementById("fontBtn").style.backgroundColor=randomColor();
}



function changeFont(){

    let fonts=[

        "Arial",

        "Georgia",

        "Verdana",

        "Courier New",

        "Tahoma",

        "Trebuchet MS",

        "Comic Sans MS",

        "Times New Roman",

        "Impact",

        "Lucida Console"
    ];

    let font=fonts[Math.floor(Math.random()*fonts.length)];

    document.getElementById("main-title").style.fontFamily=font;

    document.getElementById("sub-title").style.fontFamily=font;

    document.getElementById("text").style.fontFamily=font;
}