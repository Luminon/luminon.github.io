function localeJp (toggle = false) {

    if(toggle){
        document.getElementById("jp").style.display = "inline";
        document.getElementById("ko").style.display = "none";
    } else {
        document.getElementById("jp").style.display = "none";
        document.getElementById("ko").style.display = "inline";
    }
} 