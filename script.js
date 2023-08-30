function changeColor(){
    let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("text1").style.color = "#" + randomColor1;
    document.getElementById("text2").style.color = "#" + randomColor2;
}