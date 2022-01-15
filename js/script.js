function showNav() {
    var buttonAtive = document.getElementById("navbar-responsive")
        
       if (buttonAtive.style.display == 'none' || buttonAtive.style.display == '') {
        buttonAtive.style.display = 'block'
            
       } else {
        buttonAtive.style.display = 'none'
    }
}
function transitClick() {
    document.getElementById("header-flex-form").style.opacity = 3
}