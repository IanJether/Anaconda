
function databaseList() {
  document.getElementById("mydropdown").classList.toggle("show");
}

   // Close the dropdown menu if the user clicks outside of it
   window.onmouseover = function(event) {
    if (!event.target.matches('.btn')) {
      var dropdowns = document.getElementsByClassName("thedp");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

  
function solutionList() {
  document.getElementById("mysol-dropdown").classList.toggle("show");
}

function resources() {
  document.getElementById("myr-dropdown").classList.toggle("show");
}

function partners() {
  document.getElementById("pat-dropdown").classList.toggle("show");
}

function company() {
  document.getElementById("com-dropdown").classList.toggle("show");
}