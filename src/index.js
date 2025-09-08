console.log("Hi, Mom!");

import "./style.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

function clear() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

document.addEventListener("click", (e) => {
        let target = e.target;
        switch (target.id) {
            case "homeBtn":
                clear();
                homePage();
                break;
            case "menuBtn":
                clear();
                menuPage();
                break;
            case "aboutBtn":
                clear();
                aboutPage();
                break;
        }
    });

clear();
homePage();