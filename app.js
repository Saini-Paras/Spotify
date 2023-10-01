// Your Library search bar
const searchIcon = document.querySelector(".sidebar-search-icon");
const searchContainer = document.querySelector(".sidebar-search-box");

let text;
searchIcon.addEventListener("click", () => {
  searchIcon.classList.toggle("show");
  if (searchIcon.classList.contains("show")) {
    searchContainer.style.setProperty("width", "13rem");
    sortText.style.width = "1rem";
    text = sortText.textContent;
    console.log(sortText.textContent[0]);
    sortText.textContent = `${sortText.textContent[0]}..`;
  } else {
    searchContainer.style.setProperty("width", "0rem");
    sortText.style.width = "fit-content";
    sortText.textContent = text;
  }
});

const sortContainer = document.querySelector(".sort-sub");
const sortItems = document.querySelectorAll(".sort-sub li");
const sortText = document.querySelector(".sidebar-sort button span");
const sortBtn = document.querySelector(".sidebar-sort button");

sortBtn.addEventListener("click", () => {
  sortBtn.classList.toggle("show");
});
sortItems.forEach((item) => {
  item.addEventListener("click", () => {
    sortText.textContent = item.textContent;
    for(let item of sortItems){
        item.classList.remove('active')
    }
    item.classList.toggle('active')
  });
});


// Player
const playerRangeInpt=document.querySelector('.progress-bar input[type="range"]')
const playPauseBtn=document.querySelector('.play-pause')

playPauseBtn.addEventListener('click',()=>{
  playPauseBtn.classList.toggle('play')
})

playerRangeInpt.addEventListener('input',()=>{
  document.documentElement.style.setProperty('--progress-width',`${playerRangeInpt.value/2}%`)
})

const volumeInpt=document.querySelector('.volume_bar input[type="range"]');

volumeInpt.addEventListener('input',()=>{
  document.documentElement.style.setProperty('--volume-width',`${volumeInpt.value}%`)
})

const extraIcons=document.querySelectorAll('.extras .box svg')

extraIcons.forEach(icon=>{
  icon.addEventListener('mouseenter',()=>{
    icon.previousElementSibling.style.display='inline-block'
  })
  icon.addEventListener('mouseleave',()=>{
    icon.previousElementSibling.style.display='none'
  })
})


// MAIN COTAINER
const mainHead1=document.querySelector('.main-head-1')
const mainContainer=document.querySelector('.main');

// mainContainer.addEventListener('scroll',(e)=>{
//   console.log(e.scrollY);

//   mainHead1.classList.toggle('active',mainContainer.scrollY > 100)
// })

// BOX BTNS
const boxBtns=document.querySelectorAll('.box-btn');

boxBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.classList.toggle('play')
  })
})

// SONG LIKE FEATURE
const likeBtn=document.querySelector('.like-btn');
likeBtn.addEventListener('click',()=>{
  likeBtn.classList.toggle('liked')
})
