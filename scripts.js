let modal = document.getElementById("mobileModal");
let btn = document.getElementById("burgir");
let span = document.getElementsByClassName("close")[0];
let close1 = document.getElementById("close");
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");

btn.onclick = function() { 
  modal.style.display = "block"; 
}

span.onclick = function() {
  modal.style.display = "none"; 
}

close1.onclick = function() { 
  modal.style.display = "none"; 
}

close2.onclick = function() { 
  modal.style.display = "none"; 
}

close3.onclick = function() { 
  modal.style.display = "none"; 
}

window.onclick = function(event) { 
  if (event.target == modal) { 
    modal.style.display = "none"; 
  }
}
