let selctionMenu = document.getElementById("selctionMenu");
let popUpMenu = document.getElementById("popUpMenu");

selctionMenuCount = 0;

let loadLogo = document.getElementById("loadLogo");
let root = document.getElementById("root");

function hideLoad() {
   loadLogo.classList.add('LoadHide');
}

   function siteLoadFunc() {
      root.className = "h-auto w-full m-0 bg-orange-100 flex flex-col realative";
      loadLogo.classList.add('LoadHide');
      setInterval(() => {
         loadLogo.remove();
      }, 800);
  }
  setTimeout(siteLoadFunc, 1500);

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

