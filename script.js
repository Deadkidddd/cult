//types text
document.getElementById("cult_1_screen").innerHTML = "Practices";
document.getElementById("cult_2_screen").innerHTML = "Information";
document.getElementById("home_btn").innerHTML = "Home";
document.getElementById("conclusion_btn").innerHTML = "Conclusion";

//transition between screens animation
let glitched_cat = document.getElementById("glitched_cat");
let body_glitch = document.getElementById("body");

function glitch(){
  glitched_cat.style.animation = "glitched_cat_animation 1s infinite";
}

//buttons for screen switches
document.getElementById("conclusion_btn").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "conclusion.html"; }, 1000);
}

document.getElementById("home_btn").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "index.html"; }, 1000);
}

document.getElementById("cult_1_screen").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "cult1description.html"; }, 1000);
}

document.getElementById("cult_2_screen").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "cult2description.html"; }, 1000);
}  

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("cat_slideshow");
  if(slides.length === 0) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

let dropdownMenu = document.getElementById("dropdown");
let background = document.getElementById("background");

function showDropdown(){
  dropdownMenu.style.display = "block";
  background.style.display = "block";
}

//Menu
  //Dropdowns
// Add dropdown triggers only if elements exist
if(dropdownMenu && background){
let catSlides = document.getElementsByClassName("cat_slideshow");
for(let i = 0; i < catSlides.length; i++) {
  catSlides[i].onclick = showDropdown;
  document.getElementById("dropdown_title").onclick = showDropdown;
};}

//img functions
function showImgs1() {
  document.getElementById("tools").style.opacity = "1";
  document.getElementById("sacrifice").style.opacity = "1";
}
function hideImgs1() {
  document.getElementById("tools").style.opacity = "0";
  document.getElementById("sacrifice").style.opacity = "0";
}
function showImgs2() {
  document.getElementById("burial").style.opacity = "1";
  document.getElementById("silly_room").style.opacity = "1";
}
function hideImgs2() {
  document.getElementById("burial").style.opacity = "0";
  document.getElementById("silly_room").style.opacity = "0";
}
function showImgs3() {
  document.getElementById("help_me").style.opacity = "1";
  document.getElementById("sacrifice_boy").style.opacity = "1";
  document.getElementById("sarah_prison").style.opacity = "1";
}
function hideImgs3() {
  document.getElementById("help_me").style.opacity = "0";
  document.getElementById("sacrifice_boy").style.opacity = "0";
  document.getElementById("sarah_prison").style.opacity = "0";
}

//more silly functiona
function showSec1() {
  document.getElementById("childhood_btn").style.backgroundColor = "red";
  document.getElementById("childhood1").style.display = "block";
  setTimeout(function() {document.getElementById("childhood2").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("childhood3").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("childhood4").style.display = "block";}, 600);
  setTimeout(function() {document.getElementById("childhood5").style.display = "block";}, 800);
}
function hideSec1() {
  document.getElementById("childhood_btn").style.backgroundColor = "white";
  document.getElementById("childhood1").style.display = "none";
  setTimeout(function() {document.getElementById("childhood2").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("childhood3").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("childhood4").style.display = "none";}, 600);
  setTimeout(function() {document.getElementById("childhood5").style.display = "none";}, 800);
}

function showSec2() {
  document.getElementById("the_cult_btn").style.backgroundColor = "red";
  document.getElementById("the_cult").style.display = "block";
  setTimeout(function() {document.getElementById("the_cult1").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("the_cult2").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("the_cult3").style.display = "block";}, 600);
  setTimeout(function() {document.getElementById("the_cult4").style.display = "block";}, 800);
}
function hideSec2() {
  document.getElementById("the_cult_btn").style.backgroundColor = "white";
  document.getElementById("the_cult").style.display = "none";
  setTimeout(function() {document.getElementById("the_cult1").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("the_cult2").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("the_cult3").style.display = "none";}, 600);
  setTimeout(function() {document.getElementById("the_cult4").style.display = "none";}, 800);
}

function showSec3() {
  document.getElementById("why_cult_btn").style.backgroundColor = "red";
  document.getElementById("why_cult").style.display = "block";
  setTimeout(function() {document.getElementById("why_cult2").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("why_cult3").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("why_cult4").style.display = "block";}, 600);
  setTimeout(function() {document.getElementById("why_cult5").style.display = "block";}, 800);
  setTimeout(function() {document.getElementById("why_cult6").style.display = "block";}, 1000);
}
function hideSec3() {
  document.getElementById("why_cult_btn").style.backgroundColor = "white";
  document.getElementById("why_cult").style.display = "none";
  setTimeout(function() {document.getElementById("why_cult2").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("why_cult3").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("why_cult4").style.display = "none";}, 600);
  setTimeout(function() {document.getElementById("why_cult5").style.display = "none";}, 800);
  setTimeout(function() {document.getElementById("why_cult6").style.display = "none";}, 1000);
}

function showSec4() {
  document.getElementById("practices_btn").style.backgroundColor = "red";
  document.getElementById("practices").style.display = "block";
  setTimeout(function() {document.getElementById("practices2").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("practices3").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("practices4").style.display = "block";}, 600);
}
function hideSec4() {
  document.getElementById("practices_btn").style.backgroundColor = "white";
  document.getElementById("practices").style.display = "none";
  setTimeout(function() {document.getElementById("practices2").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("practices3").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("practices4").style.display = "none";}, 600);
}

function showSec5() {
  document.getElementById("reasons_btn").style.backgroundColor = "red";
  document.getElementById("reasons").style.display = "block";
  setTimeout(function() {document.getElementById("reasons2").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("reasons3").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("reasons4").style.display = "block";}, 600);
}
function hideSec5() {
  document.getElementById("reasons_btn").style.backgroundColor = "white";
  document.getElementById("reasons").style.display = "none";
  setTimeout(function() {document.getElementById("reasons2").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("reasons3").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("reasons4").style.display = "none";}, 600);
}

function showSec6() {
  document.getElementById("ends_1").style.backgroundColor = "white";
  document.getElementById("ends_1_p").style.display = "block";
  setTimeout(function() {document.getElementById("ends_2_p").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("ends_3_p").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("ends_4_p").style.display = "block";}, 600);
}

function hideSec6() {
  document.getElementById("ends_1").style.backgroundColor = "white";
  document.getElementById("ends_1_p").style.display = "none";
  setTimeout(function() {document.getElementById("ends_2_p").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("ends_3_p").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("ends_4_p").style.display = "none";}, 600);
}

function showSec7() {
  document.getElementById("how_btn").style.backgroundColor = "red";
  document.getElementById("how").style.display = "block";
  setTimeout(function() {document.getElementById("how2").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("how3").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("how4").style.display = "block";}, 600);
  setTimeout(function() {document.getElementById("how5").style.display = "block";}, 800);
}
function hideSec7() {
  document.getElementById("how_btn").style.backgroundColor = "white";
  document.getElementById("how").style.display = "none";
  setTimeout(function() {document.getElementById("how2").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("how3").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("how4").style.display = "none";}, 600);
  setTimeout(function() {document.getElementById("how5").style.display = "none";}, 800);
}

function showSec8() {
  document.getElementById("other_cults_btn").style.backgroundColor = "red";
  document.getElementById("other_cults").style.display = "block";
  setTimeout(function() {document.getElementById("other_cults2").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("other_cults3").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("other_cults4").style.display = "block";}, 600);
  setTimeout(function() {document.getElementById("other_cults5").style.display = "block";}, 800);
}

function hideSec8() {
  document.getElementById("other_cults_btn").style.backgroundColor = "white";
  document.getElementById("other_cults").style.display = "none";
  setTimeout(function() {document.getElementById("other_cults2").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("other_cults3").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("other_cults4").style.display = "none";}, 600);
  setTimeout(function() {document.getElementById("other_cults5").style.display = "none";}, 800);
}

function showSec9() {
  document.getElementById("conformityy_btn").style.backgroundColor = "red";
  document.getElementById("conformityy").style.display = "block";
  setTimeout(function() {document.getElementById("conformityy2").style.display = "block";}, 200);
  setTimeout(function() {document.getElementById("conformityy3").style.display = "block";}, 400);
  setTimeout(function() {document.getElementById("conformityy4").style.display = "block";}, 600);
  setTimeout(function() {document.getElementById("conformityy5").style.display = "block";}, 800);
}

function hideSec9() {
  document.getElementById("conformityy_btn").style.backgroundColor = "white";
  document.getElementById("conformityy").style.display = "none";
  setTimeout(function() {document.getElementById("conformityy2").style.display = "none";}, 200);
  setTimeout(function() {document.getElementById("conformityy3").style.display = "none";}, 400);
  setTimeout(function() {document.getElementById("conformityy4").style.display = "none";}, 600);
  setTimeout(function() {document.getElementById("conformityy5").style.display = "none";}, 800);
}

function hideBasic() {
  document.getElementById("basic_info").style.display = "none";
  document.getElementById("basic_info2").style.display = "none";
  document.getElementById("basic_info3").style.display = "none";
  document.getElementById("basic_info4").style.display = "none";
}
function showBasic() {
  document.getElementById("basic_info").style.display = "block";
  document.getElementById("basic_info2").style.display = "block";
  document.getElementById("basic_info3").style.display = "block";
  document.getElementById("basic_info4").style.display = "block";
}
//defines if number is even or odd
var number = 0;
var numberType;
function evenOrOdd() {
  if (number % 2 === 0) {
    numberType = 'even';
  } else {
    numberType = 'odd';
  };
}

//Shows section number 1, page 1 under certain conditions
function show() {
  evenOrOdd();
  if (numberType === 'odd') {
    hideBasic();
    showSec1();
  }
  else{
    hideSec1();
    showBasic();
  }
}
//shows section number 2, page 1 under certain conditions
function show1() {
  evenOrOdd();
  if (numberType === 'odd') {
    hideBasic();
    showSec2();
  }
  else{
    hideSec2();
    showBasic();
  }
}
//shows section number 3, page 1 under certain conditions
function show2() {
  evenOrOdd();
  if (numberType === 'odd') {
    hideBasic();
    showSec3();
    document.getElementById("to_conformity").style.display = "block";
  }
  else{
    hideSec3();
    showBasic();
  }
}
//Shows section number 1, page 2 under certain conditions
function show3() {
  evenOrOdd();
  if (numberType === 'odd') {
    showSec4();
    showImgs1();
  }
  else{
    hideSec4();
    hideImgs1();
  }
}
//shows section number 2, page 2 under certain conditions
function show4() {
  evenOrOdd();
  if (numberType === 'odd') {
    showSec5();
    showImgs2();
  }
  else{
    hideSec5();
    hideImgs2();
  }
}
//shows section number 3, page 2 under certain conditions
function show5() {
  evenOrOdd();
  if (numberType === 'odd') {
    showSec6();
    showImgs3();
  }
  else{
    hideSec6();
    hideImgs3();
  };
}

//Shows section number 1, page 3 under certain conditions
function show6() {
  evenOrOdd();
  if (numberType === 'odd') {
    showSec7();
  }
  else{
    hideSec7();
  }
}
//shows section number 2, page 3 under certain conditions
function show7() {
  evenOrOdd();
  if (numberType === 'odd') {
    showSec8();
  }
  else{
    hideSec8();
  }
}
//shows section number 3, page 3 under certain conditions
function show8() {
  evenOrOdd();
  if (numberType === 'odd') {
    showSec9();
  }
  else{
    hideSec9();
  };
}

//Performs button showing and dissapearing operations
function cultintro() {
  let childhoodBtn = document.getElementById("childhood_btn");
  let cult_btn = document.getElementById("the_cult_btn");
  let why_cult_btn = document.getElementById("why_cult_btn");

  if(childhoodBtn){
    childhoodBtn.onclick = () => {
    number = number + 1;
     show();
  };
}
  if(cult_btn) {cult_btn.onclick = () => {
    hideSec1();
    number = number + 1;
    show1();
  };
}
  if(why_cult_btn) {why_cult_btn.onclick = () => {
    hideSec2();
    number = number + 1;
    show2();
  };
}}

function cult1Page() {
  let practicesbtn = document.getElementById("practices_btn"); 
  let reasonsbtn = document.getElementById("reasons_btn");
  let ends1 = document.getElementById("ends_1");


  if (practicesbtn) {
    practicesbtn.onclick = () => { 
      number = number + 1;
      show3(); 
    };
  }
    if (reasonsbtn) {
    reasonsbtn.onclick = () => { 
      hideImgs1();
      hideSec4();
      number = number + 1;
      show4(); 

    };
  } 
    if (ends1) {
    ends1.onclick = () => { 
      hideImgs2();
      hideSec5();
      number = number + 1;
      show5(); 
    };
  }
}

function cult2Page() {
  let howbtn = document.getElementById("how_btn");
  let leaders2 = document.getElementById("other_cults_btn");
  let ends2 = document.getElementById("conformityy_btn");
  let die = document.getElementById("die");
  if(howbtn) howbtn.onclick = () => {
    number = number + 1;
    show6();
    die.style.width = "20%";
    die.style.height = "30%";
    die.style.left = "4%";
    die.style.top = "22%";
    die.style.opacity = "60%";
    };
  if(leaders2) leaders2.onclick = () => {
    hideSec7();
    number = number + 1;
    show7();
    die.style.width = "20%";
    die.style.height = "30%";
    die.style.right = "4%";
    die.style.top = "80%";
    die.style.opacity = "60%";
  };
  if(ends2) ends2.onclick = () => {
    hideSec8();
    number = number + 1;
    show8();
    die.style.width = "20%";
    die.style.height = "30%";
    die.style.left = "40%";
    die.style.top = "40%";
    die.style.opacity = "50%";
    die.style.animation = "im_dying_lmao 5s 1";
  };
}

function initConclusionPage() {
  let sources = document.getElementById("sources");
  if(sources) {
    sources.onclick = () => document.getElementById("sources_list").style.display = "block";
  }
}

// Initialize based on current page
if(window.location.pathname.includes("index")) {
  cultintro();

  //slideshow
let saneIndex = 0;
idkSlides();

function idkSlides() {
  let slidethenoosearoundme = document.getElementsByClassName("im_dying");
  if(slidethenoosearoundme.length === 0) return;

  for (let i = 0; i < slidethenoosearoundme.length; i++) {
    slidethenoosearoundme[i].style.opacity = "0";
  }
  saneIndex++;
  if (saneIndex > slidethenoosearoundme.length) {saneIndex = 1}
  setTimeout(function() {slidethenoosearoundme[saneIndex-1].style.animation = "fadein 2s 1";}, 500)
  slidethenoosearoundme[saneIndex-1].style.opacity = "60%";
  setTimeout(function() {slidethenoosearoundme[saneIndex-1].style.animation = "fadeout 2s 1";}, 500)
  setTimeout(idkSlides, 2000);}
}
if (window.location.pathname.includes("cult1description")) {
  cult1Page();
}
if(window.location.pathname.includes("cult2description")) {
  cult2Page();
}
if(window.location.pathname.includes("conclusion")) {
  initConclusionPage();
}
//probally wont do
//img popup code to make people go insane(I am not mentally sanios)
//definitions
/*
let img_1 = document.getElementById("first_img");
let img_2 = document.getElementById("second_img");
let img_3 = document.getElementById("third_img");
let img_4 = document.getElementById("fourth_img");
let img_5 = document.getElementById("fifth_img");
let img_6 = document.getElementById("six_image");
let img_7 = document.getElementById("seven_img");
let img_8 = document.getElementById("eight_img");
let img_9 = document.getElementById("nine_img");
let img_10 = document.getElementById("ten_img");
let img_11 = document.getElementById("eleven_img");
let img_12 = document.getElementById("twelve_img");
let img_13 = document.getElementById("thirteen_img");
let img_14 = document.getElementById("fourteen_img");
let img_15 = document.getElementById("fifteen_img");

let sources = document.getElementById("sources");
//functions
//idk i gave up on life
time = 200;

function img_1_popup(){
  setTimeout(function() {img_1.style.display = "block";}, time+1808);
}

function img_2_popup(){
  setTimeout(function() {img_2.style.animation = "glitch_in .1s 2";}, time+1820);
  setTimeout(function() {img_2.style.opacity = "3%";}, time+1820);
  setTimeout(function() {img_2.style.opacity = "5%";}, time+1821);
  setTimeout(function() {img_2.style.animation = "fadein 4s 1";}, time+1822);
  setTimeout(function() {img_2.style.opacity = "100";}, time+1822)
  setTimeout(function() {img_2.style.display = "block";}, time+1822);
}

function img_3_popup(){
  setTimeout(function() {img_3.style.animation = "fadein 2s 1";}, 3500);
  setTimeout(function() {img_3.style.display = "block";}, 4000);
  setTimeout(function() {img_3.style.opacity = "80%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "90%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "99%";}, 4100);
}

function img_4_popup(){
  setTimeout(function() {img_4.style.display = "block";}, time+2000);
}
function img_5_popup(){
  setTimeout(function() {img_5.style.display = "block";}, 2004);
  setTimeout(function() {img_5.style.animation = "glitch_in 2s 2";}, 2004);
  setTimeout(function() {img_5.style.zIndex = "13";}, 2004);
}
function img_6_popup(){
  setTimeout(function() { img_6.style.display = "block";}, time);
  setTimeout(function() { img_6.style.animation = "glitch_in 1s 2";}, time);
  setTimeout(function() {img_6.style.animation = "fadeout 4s 1";}, 2000);
  setTimeout(function() {img_6.style.width = "20%";}, 2002);
  setTimeout(function() {img_6.style.height = "20%";}, 2002);
  setTimeout(function() {img_6.style.animation = "fadein 4s 1";}, 2002);
}
function img_7_popup(){
  setTimeout(function() {img_7.style.display = "block";}, 2004);
  setTimeout(function() {img_7.style.opacity = "10%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "20%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "40%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "50%";}, 2004)
}
function img_8_popup(){
  setTimeout(function() {img_8.style.display = "block";}, 2003);
}
function img_9_popup(){
  setTimeout(function() {img_9.style.display = "block";}, 2004);
}
function img_11_popup(){
  setTimeout(function() {img_11.style.display = "block";}, time+300);
  setTimeout(function() {img_11.style.animation = "fadein 2s 1";}, time+300);
}
function img_13_popup(){
  setTimeout(function() {img_13.style.animation = "jumpscare 2s 1";}, 2004);
  setTimeout(function() {img_13.style.display = "block";}, 2004);
  setTimeout(function() {img_13.style.animation = "fade_out 3s 1";}, 2020);
  setTimeout(function() {img_13.style.opacity = "80%";}, 2022);
}
function img_14_popup(){
  setTimeout(function() {img_14.style.animation = "fadein 2s 1";}, 2021);
  setTimeout(function() {img_14.style.display = "block";}, 2021);
}
function img_15_popup(){
  setTimeout(function() {img_15.style.display = "block";}, 2004);
  setTimeout(function() {img_15.style.opacity = "80%";}, 2004);
}

sources.onclick = 
  function(){
    img_1_popup();
    img_2_popup();
    img_3_popup();
    img_4_popup();
    img_5_popup();
    img_6_popup();
    img_7_popup();
    img_8_popup();
    img_9_popup();
    img_11_popup();
    img_13_popup();
    img_14_popup();
    img_15_popup();
  }
    */
  //Aventy and Ratio popups
  /*setTimeout(function() { img_6.style.display = "block";}, time);
  setTimeout(function() { img_6.style.animation = "glitch_in 1s 2";}, time);
  */
  /*setTimeout(function() {img_11.style.display = "block";}, time+300);
  setTimeout(function() {img_11.style.animation = "fadein 2s 1";}, time+300);
  //setTimeout(function() {img_4.style.display = "block";}, time+2000);
  //setTimeout(function() {img_6.style.animation = "fadeout 4s 1";}, 2000);
  setTimeout(function() {img_11.style.animation = "fadeout 4s 1";}, 2000);
  setTimeout(function() {img_11.style.display = "none";}, 2004);
  /*setTimeout(function() {img_5.style.display = "block";}, 2004);
  setTimeout(function() {img_5.style.animation = "glitch_in 2s 2";}, 2004);
  setTimeout(function() {img_5.style.zIndex = "13";}, 2004);
  */
  //setTimeout(function() {img_9.style.display = "block";}, 2004);
  /*setTimeout(function() {img_7.style.display = "block";}, 2004);
  setTimeout(function() {img_7.style.opacity = "10%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "20%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "40%";}, 2004)
  setTimeout(function() {img_7.style.opacity = "50%";}, 2004)
  /*setTimeout(function() {img_6.style.width = "20%";}, 2002);
  setTimeout(function() {img_6.style.height = "20%";}, 2002);
  setTimeout(function() {img_6.style.animation = "fadein 4s 1";}, 2002);
  */
  //setTimeout(function() {img_8.style.display = "block";}, 2003);
  //setTimeout(function() {img_13.style.animation = "jumpscare 2s 1";}, 2004);
  //setTimeout(function() {img_13.style.display = "block";}, 2004);
  //setTimeout(function() {img_15.style.display = "block";}, 2004);
  //setTimeout(function() {img_15.style.opacity = "80%";}, 2004);
  //setTimeout(function() {img_1.style.display = "block";}, 2008)
  //setTimeout(function() {img_13.style.animation = "fade_out 3s 1";}, 2020);
  //setTimeout(function() {img_2.style.animation = "glitch_in .1s 2";}, 2020);
  //setTimeout(function() {img_2.style.opacity = "3%";}, 2020);
  /*setTimeout(function() {img_14.style.animation = "fadein 2s 1";}, 2021);
  setTimeout(function() {img_14.style.display = "block";}, 2021);
  /*setTimeout(function() {img_2.style.opacity = "5%";}, 2021);
  setTimeout(function() {img_2.style.animation = "fadein 4s 1";}, 2022);
  setTimeout(function() {img_2.style.opacity = "100";}, 2022)
  setTimeout(function() {img_2.style.display = "block";}, 2022);
  */
  //setTimeout(function() {img_13.style.opacity = "80%";}, 2022);
  

/*setTimeout(function() {img_3.style.animation = "fadein 2s 1";}, 3500);
  setTimeout(function() {img_3.style.display = "block";}, 4000);
  setTimeout(function() {img_3.style.opacity = "80%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "90%";}, 4100);
  setTimeout(function() {img_3.style.opacity = "99%";}, 4100);
*/

