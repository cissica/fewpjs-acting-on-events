// Your code here


function moveDodgerLeft() {
    let dodger = document.getElementById("dodger"); 
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

  function moveDodgerRight() {
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    console.log(dodger.style.left);
    dodger.style.left = `${left + 1}px`;
}

  document.addEventListener("keydown", function(e) {
    if (e.key === "Arrowright") {
      moveDodgerRight();
    }
  }); 