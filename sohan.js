function openPage(elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
      tablinks[i].style.boxShadow= "";
  }

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
    elmnt.style.boxShadow="10px 0 15px -5px rgba(0, 0, 0, 0.75)";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("nav-about-tab").click();
function changeFoot(classNames){

  element=document.getElementById("footer");
  element.className='';
  element.classList.add(classNames);
}
