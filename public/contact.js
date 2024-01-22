let selctionMenu = document.getElementById("selctionMenu");
let popUpMenu = document.getElementById("popUpMenu");

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

