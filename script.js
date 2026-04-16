//--------------------------------------//

var sidenavbar=document.querySelector(".sidenavbar")

function showsidenavbar() {
   sidenavbar.style.display="block"
}
function hidesidenavbar() {
   sidenavbar.style.display="none"
}

//--------------------------------------//

var portfolio=document.getElementById("portfolio")

function scrollportfolio() {
   portfolio.scrollIntoView({
   behavior: "smooth",
   block: "start",
})
}

//--------------------------------------//

