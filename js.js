const Vehicles = document.querySelector(".vehicles")
const Body = document.querySelector("body")
const LI1 = document.querySelector(".li1")
const A = document.querySelector(".right_nav .li1 a")
const Tools = document.querySelector(".tools")
const LI2 = document.querySelector(".li2")
const A2 = document.querySelector(".li2 a")

const Menu = document.querySelector(".menu")
const LI4 = document.querySelector(".li4")
const A4 = document.querySelector(".li4 a")

const Specials = document.querySelector(".specials")
const LI3 = document.querySelector(".li3")
const A3 = document.querySelector(".li3 a")



function OpenTools() {
    // console.log("sdasdasdasdasdsa")
    Tools.style.transform = "translateY(0px)"
    LI2.style.background = "black"
    A2.style.color = "white"
    // openToolsClick = true
    CloseMenu()
    CloseSpecials()

}

function CloseTools() {
    Tools.style.transform = "translateY(-900px)"
    LI2.style.background = "white"
    A2.style.color = "black"
}



function OpenSpecials() {
    Specials.style.transform = "translateY(0px)"
    LI3.style.background = "black"
    A3.style.color = "white"
    CloseTools()

    CloseMenu()


}
function CloseSpecials() {
    Specials.style.transform = "translateY(-900px)"
    LI3.style.background = "white"
    A3.style.color = "black"
}









function OpenMenu() {
    Menu.style.transform = "translateY(0px)"
    LI4.style.background = "black"
    A4.style.color = "white"
    CloseTools()
    CloseSpecials()
}
function CloseMenu() {
    Menu.style.transform = "translateY(-900px)"
    LI4.style.background = "white"
    A4.style.color = "black"
}