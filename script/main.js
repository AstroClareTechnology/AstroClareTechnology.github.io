<<<<<<< Updated upstream
function menu(){
    if (document.getElementById("floatNav").style.display == "none"){
        document.getElementById("floatNav").style.display = "block";
    }else{
=======
function mobMenu(){
    if(document.getElementById("floatNav").style.display == "none"){
        document.getElementById("floatNav").style.display = "block";
        document.getElementById("exit").style.display = "block";
    }
    else{
>>>>>>> Stashed changes
        document.getElementById("floatNav").style.display = "none";
    }
}