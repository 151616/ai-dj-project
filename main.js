var language = localStorage.getItem("language");
if(localStorage.getItem("language") == 1){
    document.getElementById("hindi-songs").style.display = "initial";
    document.getElementById("bengali-songs").style.display = "none";
    document.getElementById("marathi-songs").style.display = "none";
    document.getElementById("telugu-songs").style.display = "none";
    document.getElementById("tamil-songs").style.display = "none";
}
if(localStorage.getItem("language") == 2){
    document.getElementById("hindi-songs").style.display = "none";
    document.getElementById("bengali-songs").style.display = "initial";
    document.getElementById("marathi-songs").style.display = "none";
    document.getElementById("telugu-songs").style.display = "none";
    document.getElementById("tamil-songs").style.display = "none";
}
if(localStorage.getItem("language") == 3){
    document.getElementById("hindi-songs").style.display = "none";
    document.getElementById("bengali-songs").style.display = "none";
    document.getElementById("marathi-songs").style.display = "initial";
    document.getElementById("telugu-songs").style.display = "none";
    document.getElementById("tamil-songs").style.display = "none";
}
if(localStorage.getItem("language") == 4){
    document.getElementById("hindi-songs").style.display = "none";
    document.getElementById("bengali-songs").style.display = "none";
    document.getElementById("marathi-songs").style.display = "none";
    document.getElementById("telugu-songs").style.display = "initial";
    document.getElementById("tamil-songs").style.display = "none";
}
if(localStorage.getItem("language") == 5){
    document.getElementById("hindi-songs").style.display = "none";
    document.getElementById("bengali-songs").style.display = "none";
    document.getElementById("marathi-songs").style.display = "none";
    document.getElementById("telugu-songs").style.display = "none";
    document.getElementById("tamil-songs").style.display = "initial";
}
function nextslides(){
    if(language == 1){
        localStorage.setItem("language", "2");
        language = localStorage.getItem("language");
        document.getElementById("hindi-songs").style.display = "none";
        document.getElementById("bengali-songs").style.display = "initial";
        document.getElementById("marathi-songs").style.display = "none";
        document.getElementById("telugu-songs").style.display = "none";
        document.getElementById("tamil-songs").style.display = "none";
    }
    if(language == 2){
        localStorage.setItem("language", "3");
        language = localStorage.getItem("language");
        document.getElementById("hindi-songs").style.display = "none";
        document.getElementById("bengali-songs").style.display = "none";
        document.getElementById("marathi-songs").style.display = "initial";
        document.getElementById("telugu-songs").style.display = "none";
        document.getElementById("tamil-songs").style.display = "none";
    }
    if(language == 3){
        localStorage.setItem("language", "4");
        language = localStorage.getItem("language");
        document.getElementById("hindi-songs").style.display = "none";
        document.getElementById("bengali-songs").style.display = "none";
        document.getElementById("marathi-songs").style.display = "none";
        document.getElementById("telugu-songs").style.display = "initial";
        document.getElementById("tamil-songs").style.display = "none";
    }
    if(language == 4){
        localStorage.setItem("language", "5");
        language = localStorage.getItem("language");
        document.getElementById("hindi-songs").style.display = "none";
        document.getElementById("bengali-songs").style.display = "none";
        document.getElementById("marathi-songs").style.display = "none";
        document.getElementById("telugu-songs").style.display = "none";
        document.getElementById("tamil-songs").style.display = "initial";
    }
    if(language == 5){
        localStorage.setItem("language", "1");
        language = localStorage.getItem("language");
        document.getElementById("hindi-songs").style.display = "initial";
        document.getElementById("bengali-songs").style.display = "none";
        document.getElementById("marathi-songs").style.display = "none";
        document.getElementById("telugu-songs").style.display = "none";
        document.getElementById("tamil-songs").style.display = "none";
    }
}
function prevslides(){
    if(language == 1){
        localStorage.setItem("langauge", "5");
            language = localStorage.getItem("language");
            document.getElementById("hindi-songs").style.display = "none";
        document.getElementById("bengali-songs").style.display = "none";
        document.getElementById("marathi-songs").style.display = "none";
        document.getElementById("telugu-songs").style.display = "none";
        document.getElementById("tamil-songs").style.display = "initial";
    }
    if(language == 2){
        localStorage.setItem("langauge", "1");
            language = localStorage.getItem("language");
            document.getElementById("hindi-songs").style.display = "initial";
            document.getElementById("bengali-songs").style.display = "none";
            document.getElementById("marathi-songs").style.display = "none";
            document.getElementById("telugu-songs").style.display = "none";
            document.getElementById("tamil-songs").style.display = "none";
    }
    if(language == 3){
        localStorage.setItem("langauge", "2");
            language = localStorage.getItem("language");
            document.getElementById("hindi-songs").style.display = "none";
            document.getElementById("bengali-songs").style.display = "initial";
            document.getElementById("marathi-songs").style.display = "none";
            document.getElementById("telugu-songs").style.display = "none";
            document.getElementById("tamil-songs").style.display = "none";
    }
    if(language == 4){
        localStorage.setItem("langauge", "3");
            language = localStorage.getItem("language");
            document.getElementById("hindi-songs").style.display = "none";
            document.getElementById("bengali-songs").style.display = "none";
            document.getElementById("marathi-songs").style.display = "initial";
            document.getElementById("telugu-songs").style.display = "none";
            document.getElementById("tamil-songs").style.display = "none";
    }
    if(language == 5){
        localStorage.setItem("langauge", "4");
            language = localStorage.getItem("language");
            document.getElementById("hindi-songs").style.display = "none";
            document.getElementById("bengali-songs").style.display = "none";
            document.getElementById("marathi-songs").style.display = "none";
            document.getElementById("telugu-songs").style.display = "initial";
            document.getElementById("tamil-songs").style.display = "none";
    }
}