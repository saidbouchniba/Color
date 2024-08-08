var btn=document.querySelector("#change-color-btn")
var div=document.querySelector("#color-box")
function getRandomColor() {
    var str="0123456789ABCDEF"
    var color="#"
    for (let i = 0; i < 6; i++) {
        color=color+ str[Math.floor(Math.random()*16)] 
    }
    return color
}

btn.addEventListener("click",function change() {
    div.style.backgroundColor=getRandomColor()
})