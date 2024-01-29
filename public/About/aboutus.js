let selctionMenu = document.getElementById("selctionMenu");
let popUpMenu = document.getElementById("popUpMenu");

let loadLogo = document.getElementById("loadLogo");
let root3 = document.getElementById("root4");

function hideLoad() {
   loadLogo.classList.add('LoadHide');
}

   function siteLoadFunc() {
      root3.className = "h-auto w-full m-0 bg-orange-100 visible flex flex-col realative";
      loadLogo.classList.add('LoadHide');
      setInterval(() => {
         loadLogo.remove();
      }, 800);
  }
  setTimeout(siteLoadFunc, 1500);

  let slide1 = document.getElementById("slide-1")
  let slide2 = document.getElementById("slide-2")
  let slide3 = document.getElementById("slide-3")

  const elements = [slide1, slide2, slide3];
    let currentIndex = 0;

    function switchElements() {
      elements.forEach((element, index) => {
        if (index === currentIndex) {
          element.classList.remove('hidden');
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
          element.classList.add('hidden');
        }
      });

      currentIndex = (currentIndex + 1) % elements.length;
    }

    setInterval(switchElements, 3500);


selctionMenuCount = 0;

selctionMenu.addEventListener('click' , function() {
   selctionMenuCount++
   popUpMenu.style.display = "flex";
   selctionMenu.style.marginBottom = "0px";
   if (selctionMenuCount === 2) {
      popUpMenu.style.display = "none";
      selctionMenuCount = 0;
      selctionMenu.style.marginBottom = "80px";
   }
}
);

let menuPage = document.getElementById("menuPage");

menuPage.addEventListener('click' , function() {
   selctionMenuCount++
   popUpMenu.style.display = "none";
   selctionMenu.style.marginBottom = "80px";
   selctionMenuCount = 0;
}
);

