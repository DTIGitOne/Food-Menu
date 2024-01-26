let selctionMenu = document.getElementById("selctionMenu");
let popUpMenu = document.getElementById("popUpMenu");

let loadLogo = document.getElementById("loadLogo");
let root2 = document.getElementById("root2");

function hideLoad() {
   loadLogo.classList.add('LoadHide');
}

   function siteLoadFunc() {
      root2.className = "h-auto w-full m-0 bg-orange-100 flex flex-col realative";
      loadLogo.classList.add('LoadHide');
      setInterval(() => {
         loadLogo.remove();
      }, 800);
  }
  setTimeout(siteLoadFunc, 1500);


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

