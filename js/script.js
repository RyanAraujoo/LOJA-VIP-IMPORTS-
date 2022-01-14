function showNav() {
    var buttonAtive = document.getElementById("navbar-responsive")
        
       if (buttonAtive.style.display == 'none' || buttonAtive.style.display == '') {
            buttonAtive.style.display = 'block'
            buttonAtive.className = "add-transit-Click"
       } else {
            buttonAtive.style.display = 'none'
    }
}
function transitClick() {
    var btn =  document.getElementById("header-flex-form")
     btn.className = "add-transit-Click"
}