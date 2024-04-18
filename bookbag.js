//Selecting popubbutton(+ popupbox popupoverlay
var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("popup")
addbutton.addEventListener("click" ,function(){
popupoverlay.style.display="block"
popupbox.style.display="block"
})
//selecting cancel button

var cancelbook=document.getElementById("cancelbook")
cancelbook.addEventListener("click",function(event){
    event.preventDefault(event)
    popupoverlay.style.display="none"
popupbox.style.display="none"
})

//selecting  container ,addbook, booktitle,bookauthor,bookdescription
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdescription=document.getElementById("bookdescription")


addbook.addEventListener("click" , function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deleteitem(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deleteitem(event){
    event.target.parentElement.remove()
}