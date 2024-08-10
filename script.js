var addbtn=document.getElementById("addbtn")
var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")


addbtn.addEventListener("click",function(){
   overlay.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"

})


var add= document.getElementById("add")
var container=document.getElementById("contain")
var booktitle=document.getElementById("booktitle")
var bookauth=document.getElementById("bookauth")
var bookdes=document.getElementById("bookdes")


add.addEventListener("click",function(event){

    event.preventDefault()
    var box=document.createElement("div");
    box.setAttribute("class","bookhold");
    box.innerHTML=` <h2>${booktitle.value}</h2>
    <h3 ><i>${bookauth.value}</i></h3>
    <p>${bookdes.value}</p>
    <button onclick='del(event)'>Delete</button>`
    container.appendChild(box)
    overlay.style.display="none"
    popupbox.style.display="none"
})
function del(event){
  event.target.parentElement.remove()
}




