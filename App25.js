let words = document.querySelectorAll(".word");
words.forEach((word)=>{
let letters = word.textContent.split("");
word.textContent="";
letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
});

});

let currentWordIndex = 0;
let maxWordIndex = words.length-1;
words[currentWordIndex].style.opacity = "1";

let changetext = () =>{
    let currentWordIndex = words[currentWordIndex];
    let nextword = currentWordIndex === maxWordIndex ? words [0] : words [currentWordIndex+1];

    Array.from(currentWordIndex.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i=80);
    });
    nextword.style.opacity="1";
    Array.from(nextword.children).forEach((letter,i)=>{
      letter.className =  "letter behind";
      setTimeout(()=>{
       letter.className = "letter in";
      },340+i*80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex+1;
}
changetext();
setTimeout(changetext , 2000);

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 <section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll" ,activeMenu);

const header = document.querySelector("header");
window.addEventListener("scroll" , function(){
header.classList.toggle("sticky" , window.scrollY > 50)
});


let menuIcon = document.querySelector("#menu-icon1");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

