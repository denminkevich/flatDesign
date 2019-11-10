"use strict";
//for sroll down button
let scrollDown = document.querySelector('.first_display-scroll_down');

function scrollFunc() {
    window.addEventListener('scroll', function() {
        let y = window.scrollY;
    
        if (y >= 1 & y <= 800) {
            scrollDown.classList.remove('hideScrollDown');
            scrollDown.classList.add('showScrollDown');
        } else {
            scrollDown.classList.remove('showScrollDown');
            scrollDown.classList.add('hideScrollDown');
        }
    });
}

scrollFunc();


//for slider in projects block

function projectsSlider(i) {
    let sliderRightArr = document.querySelectorAll('.slider_right_arr')[i],
        firstPic = document.querySelectorAll('.image_one')[i],
        secondPic = document.querySelectorAll('.image_two')[i],
        thirdPic = document.querySelectorAll('.image_three')[i],
        picOneOrder = 1,
        picTwoOrder = 2,
        picThreeOrder = 3;
        sliderRightArr.addEventListener('click', function() {

            if (picOneOrder < 3) {
                picOneOrder++;
            } else {
                picOneOrder = 1;
            }
            
            switch(picOneOrder) {
                case 1:
                    firstPic.style.order = "1";
                    break;
                case 2:
                    firstPic.style.order = "2";
                    break;
                case 3: 
                    firstPic.style.order = "3";
                    break;

                default:
                    firstPic.style.order = "1";
                    
            }

            if (picTwoOrder < 3) {
                picTwoOrder++;
            } else {
                picTwoOrder = 1;
            }
            
            switch(picTwoOrder) {
                case 1:
                    secondPic.style.order = "1";
                    break;
                case 2:
                    secondPic.style.order = "2";
                    break;
                case 3: 
                    secondPic.style.order = "3";
                    break;

                default:
                    secondPic.style.order = "1";
                    
            }

            if (picThreeOrder < 3) {
                picThreeOrder++;
            } else {
                picThreeOrder = 1;
            }
            
            switch(picThreeOrder) {
                case 1:
                    thirdPic.style.order = "1";
                    break;
                case 2:
                    thirdPic.style.order = "2";
                    break;
                case 3: 
                    thirdPic.style.order = "3";
                    break;

                default:
                    thirdPic.style.order = "1";
                    
            }
    });
}

projectsSlider(0);
projectsSlider(1);
projectsSlider(2);

// tabs in project block

let navItem = document.querySelectorAll('.project-nav-list'),
    projectsGalleries = document.querySelectorAll('.gallery_slider'),
    projectsAbout = document.querySelectorAll('.project-about-texts'),
    projectDots = document.querySelectorAll('.fa-circle'),
    dotsRightArr = document.querySelector('.fa-long-arrow-alt-right'),
    dotsLeftArr = document.querySelector('.fa-long-arrow-alt-left');

function hideGallery() {
    for (let i = 0; i < projectsGalleries.length; i++) {
        projectsGalleries[i].classList.remove('active');
    }
}

function showGallery(a) {
    projectsGalleries[a].classList.add('active');
}

function makeNonActiveNavList() {
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove('project-nav-active');
    }
}

function makeActiveNavList(a) {
    navItem[a].classList.add('project-nav-active');
}

function hideProjectAbout() {
    for (let i = 0; i < projectsAbout.length; i++) {
        projectsAbout[i].classList.remove('active-about');
    }
}

function showProjectAbout(a) {
    projectsAbout[a].classList.add('active-about');
}

function hideProjectDots() {
    for (let i = 0; i < projectDots.length; i++) {
        projectDots[i].classList.remove('tab_dot_active');
    }
}

function activateProjectDots(a) {
    projectDots[a].classList.add('tab_dot_active');
}

function hideAll() {
    hideGallery();
    makeNonActiveNavList();
    hideProjectAbout();
    hideProjectDots();
}

function showAll(a) {
    showGallery(a);
    makeActiveNavList(a);
    showProjectAbout(a);
    activateProjectDots(a);
}

dotsRightArr.addEventListener('click', function() {
    hideAll();
    showAll(1);
});
