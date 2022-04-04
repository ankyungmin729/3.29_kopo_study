console.log("연결확인~!");

const btnHome = document.querySelector('.home');
const btnAbout = document.querySelector('.about');
const btnSkills = document.querySelector('.skills');
const btnWorks = document.querySelector('.works');
const btnContact = document.querySelector('.contact');

const sectionHome = document.querySelector('#home');
const sectionAbout = document.querySelector('#about');
const sectionSkills = document.querySelector('#skills');
const sectionWorks = document.querySelector('#works');
const sectionContact = document.querySelector('#contact');

const arrowUp = document.querySelector('.arrow-up');

//Home버튼 눌렀을 때
btnHome.addEventListener('click',function(){
    sectionHome.scrollIntoView({behavior:"smooth", blcok:"center"});
});
//About버튼 눌렀을 때
btnAbout.addEventListener('click',function(){
    sectionAbout.scrollIntoView({behavior:"smooth", blcok:"center"});
});
//Skills버튼 눌렀을 때
btnSkills.addEventListener('click',function(){
    sectionSkills.scrollIntoView({behavior:"smooth", blcok:"center"});
});
//Works버튼 눌렀을 때
btnWorks.addEventListener('click',function(){
    sectionWorks.scrollIntoView({behavior:"smooth", blcok:"center"});
});
//Contact버튼 눌렀을 때
btnContact.addEventListener('click',function(){
    sectionContact.scrollIntoView({behavior:"smooth", blcok:"center"});
});

//arrow-up버튼 눌렀을 때
arrowUp.addEventListener('click',function(){
    sectionHome.scrollIntoView({behavior:"smooth", blcok:"center"});
});

//arrow-up버튼 나타나기
document.addEventListener('scroll',function(){
    if (window.scrollY > 300){
        arrowUp.classList.add('show');
    } else{
        arrowUp.classList.remove('show');
    }
});