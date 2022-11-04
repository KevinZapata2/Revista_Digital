const digitalClock = document.querySelector("#digitalClockGallery");
const mainBanner = document.querySelector("#main_gallery_page");

function changeBackground() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hour <= 5 && minutes <= 20 || hour < 24 && (hour == 18 && minutes >= 30 || hour >= 19)) {
    mainBanner.style.background = "url('./img/0.jpg')";
    mainBanner.style.backgroundPosition = "center";
    mainBanner.style.backgroundSize = "cover";
    mainBanner.style.backgroundAttachment = "fixed";
  } else if (((hour == 5 && minutes >= 21) || hour >= 6) && hour < 7) {
    mainBanner.style.background = "url('./img/1.jpg')";
    mainBanner.style.backgroundPosition = "center";
    mainBanner.style.backgroundSize = "cover";
    mainBanner.style.backgroundAttachment = "fixed";
  }else if(hour >= 7 && hour < 12){
    mainBanner.style.background = "url('./img/2.jpg')";
    mainBanner.style.backgroundPosition = "center";
    mainBanner.style.backgroundSize = "cover";
    mainBanner.style.backgroundAttachment = "fixed";
  }else if(hour >= 12 && hour < 17){
    mainBanner.style.background = "url('./img/3.jpg')";
    mainBanner.style.backgroundPosition = "center";
    mainBanner.style.backgroundSize = "cover";
    mainBanner.style.backgroundAttachment = "fixed";
  }else{
    mainBanner.style.background = "url('./img/4.jpg')";
    mainBanner.style.backgroundPosition = "center";
    mainBanner.style.backgroundSize = "cover";
    mainBanner.style.backgroundAttachment = "fixed";
  }
  digitalClock.innerText = `${addZero(((hour + 11) % 12) + 1)}:${addZero(
    minutes
  )}:${addZero(seconds)}`;
}

const addZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

setInterval(changeBackground, 1);


const panels = document.querySelectorAll(".panel");

const restart = document.querySelector("#restart")

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
        RemoveClass()
        panel.classList.add('active')
    })
})

panels.forEach((panel)=>{
    panel.addEventListener('mouseleave', () => {
        RemoveClass()
    })
})

function RemoveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}