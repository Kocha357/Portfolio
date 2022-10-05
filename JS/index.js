/******STICKY NAVIGATION ON SCROLL******/

window.addEventListener("scroll", function(){
    let navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("sticky", window.scrollY > 0)
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
    skillsPage.style.display = "block";
    aboutBtn.style.fontFamily = "'Ubuntu', sans-serif";
    skillsBtn.style.fontFamily = "'Ultra', serif";
    skillsBtn.style.color = "#dd3c0be0";
    aboutBtn.style.color = "rgb(204, 198, 198)";
    skillsBtn.style.borderBottom = "2px solid #dd3c0be0";
    aboutBtn.style.borderBottom = "none";
})
/***********************PROGRESS BAR****** */
let circularProgressHtml = document.querySelector(".progress");
let circularProgressCss = document.querySelector(".progress1");
let circularProgressJs = document.querySelector(".progress2");
let circularProgressTs = document.querySelector(".progress3");
let circularProgressBs = document.querySelector(".progress4");
let circularProgressRjs = document.querySelector(".progress5");

 let  progressValueHtml = document.querySelector(".progress-value-html");
 let  progressValueCss = document.querySelector(".progress-value-css");
 let  progressValueJs = document.querySelector(".progress-value-js");
 let  progressValueTs = document.querySelector(".progress-value-ts");
 let  progressValueBs = document.querySelector(".progress-value-bs");
 let  progressValueRjs = document.querySelector(".progress-value-rjs");


let progressStartValueHtml = 0,
    progressStartValueCss = 0,
    progressStartValueJs = 0,
    progressStartValueTs = 0,
    progressStartValueBs = 0,
    progressStartValueRjs = 0,    
    progressEndValueHtml = 70,
    progressEndValueCss = 80,
    progressEndValueJs = 60,   
    progressEndValueTs = 15,
    progressEndValueBs = 60,
    progressEndValueRjs = 20,
    speed = 100;
    
let progressHtml = setInterval(() => {
    progressStartValueHtml++;

    progressValueHtml.textContent = `${progressStartValueHtml}%`
    circularProgressHtml.style.background = `conic-gradient(#dd3c0be0 ${progressStartValueHtml * 3.6}deg, rgba(255, 255, 255, 0.118) 0deg)`

    if(progressStartValueHtml == progressEndValueHtml){
        clearInterval(progressHtml);
    }    
}, speed);

let progressCss = setInterval(()=>{
    progressStartValueCss++;
    progressValueCss.textContent = `${progressStartValueCss}%`;
    circularProgressCss.style.background = `conic-gradient(rgb(0, 140, 255) ${progressStartValueCss * 3.6}deg, rgba(255, 255, 255, 0.118) 0deg)`

    if(progressStartValueCss == progressEndValueCss){
        clearInterval(progressCss);
    }
},speed);
let progressJs = setInterval(()=>{
    progressStartValueJs++;
    progressValueJs.textContent = `${progressStartValueJs}%`;
    circularProgressJs.style.background = `conic-gradient(rgb(215, 181, 30) ${progressStartValueJs * 3.6}deg, rgba(255, 255, 255, 0.118) 0deg)`

    if(progressStartValueJs == progressEndValueJs){
        clearInterval(progressJs);
    }
},speed);
let progressTs = setInterval(()=>{
    progressStartValueTs++;
    progressValueTs.textContent = `${progressStartValueTs}%`;
    circularProgressTs.style.background = `conic-gradient(rgb(30, 101, 215) ${progressStartValueTs * 3.6}deg, rgba(255, 255, 255, 0.118) 0deg)`

    if(progressStartValueTs == progressEndValueTs){
        clearInterval(progressTs);
    }
},speed);
let progressBs = setInterval(()=>{
    progressStartValueBs++;
    progressValueBs.textContent = `${progressStartValueBs}%`;
    circularProgressBs.style.background = `conic-gradient(rgb(121, 14, 174) ${progressStartValueBs * 3.6}deg, rgba(255, 255, 255, 0.118) 0deg)`

    if(progressStartValueBs == progressEndValueBs){
        clearInterval(progressBs);
    }
},speed);
let progressRjs = setInterval(()=>{
    progressStartValueRjs++;
    progressValueRjs.textContent = `${progressStartValueRjs}%`;
    circularProgressRjs.style.background = `conic-gradient(rgb(131, 195, 229) ${progressStartValueRjs * 3.6}deg, rgba(255, 255, 255, 0.118) 0deg)`

    if(progressStartValueRjs == progressEndValueRjs){
        clearInterval(progressRjs);
    }
},speed);
