// Get the modal
var modal = document.getElementById("about-modal");

// Button clicked -> modal opened
document.getElementById("btn-about").onclick = function (){
    modal.style.display = "block";
}

//The X clicked 
document.getElementsByClassName("close")[0].onclick = function (){
    modal.style.display = "none";   
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}