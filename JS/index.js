/******STICKY NAVIGATION ON SCROLL******/

window.addEventListener("scroll", function(){
    let navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("sticky", window.scrollY > 0)
})
window.addEventListener("scroll", function(){
    let navBarLg = document.getElementById("lg-navigation");
    navBarLg.classList.toggle("sticky-lg", window.scrollY > 0)
})

/**********************DROPTDOWN MENU**********/
let showHideNav = document.getElementById("show-hide-nav");
let navContent = document.getElementById("nav-content");
showHideNav.addEventListener("click", function(){
    navContent.classList.toggle("nav-show");  
})

let menuOptions = document.getElementsByClassName("options");
for(let i = 0 ; i< menuOptions.length;i++){
menuOptions[i].addEventListener("click", function(){
  navContent.classList.remove("nav-show");

})

}

/**********ABOUT-SECTION-BTN*********** */
let aboutBtn = document.getElementById("about-me");
let skillsBtn = document.getElementById("skills");
let aboutMePage = document.getElementById("about-me-container");
let skillsPage = document.getElementById("skills-wrapper");
aboutBtn.addEventListener("click", function(){
    aboutMePage.style.display = "block";
    skillsPage.style.display = "none";
    aboutBtn.style.fontFamily ="'Ultra',serif";
    skillsBtn.style.fontFamily = "'Ubuntu', sans-serif";
    aboutBtn.style.color = "rgb(83, 174, 83)";
    skillsBtn.style.color = "rgb(204, 198, 198)";
    aboutBtn.style.borderBottom = "2px solid rgb(83, 174, 83)";
    skillsBtn.style.borderBottom = "none";
})
skillsBtn.addEventListener("click", function(){
    aboutMePage.style.display = "none";
    skillsPage.style.display = "flex";
    skillsPage.style.flexFlow = "column wrap";
    aboutBtn.style.fontFamily = "'Ubuntu', sans-serif";
    skillsBtn.style.fontFamily = "'Ultra', serif";
    skillsBtn.style.color = "#dd3c0be0";
    aboutBtn.style.color = "rgb(204, 198, 198)";
    skillsBtn.style.borderBottom = "2px solid #dd3c0be0";
    aboutBtn.style.borderBottom = "none";
})
