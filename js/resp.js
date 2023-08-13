/*Purav Sidhu 200555445 project
main page*/
lclass = document.querySelector('.lclass')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

//the code enables a responsive behavior for the navigation bar.
// When the "lclass" element is clicked, it toggles the visibility
//  and layout classes for the right-aligned menu, the navigation list,
 //  and the entire navigation bar. 

lclass.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})