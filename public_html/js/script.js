 /*
  *                        |                                     
  *    ,---.,---.,---.,---.|---.,---.    ,---.,---..  ,.   .,---.
  *    ,---||   |,---||    |   ||---'    |   ||---' >< |   |`---.
  *    `---^|---'`---^`---'`   '`---'    `   '`---''  ``---'`---'
  *         |                                             
  *                                             by NILBOGtheSavior  
  * 
  *    This is the main script that runs the webpage. Modules can
  *    be imported in this file. Apache Nexus uses Lemon8 to
  *    serve the site.
  * 
#*##############################################################*/















/*##############################################################*/

import {Lemon8} from "./lemon8.js";

class Nexus {
  /*
.##..##..######..##..##..##..##...####..
.###.##..##.......####...##..##..##.....
.##.###..####......##....##..##...####..
.##..##..##.......####...##..##......##.
.##..##..######..##..##...####....####..
........................................
 */

  constructor() {

      // Mode init
      if (sessionStorage.getItem("isLoggedIn") === "true") {
        this.isLoggedIn = true;
        console.log("User is logged in as", sessionStorage.getItem("username"));
      } else {
        console.log("You are not logged in")
        this.isLoggedIn = false;
      }    
      
      this.editMode = false;

      this.getElements(/* 
                          
                Elements include this.{
                          body,
                          main,
                          form,
                          login,
                          menu,
                          options,
                          edit,
                          light,
                          settings,
                          lemonthyme,
                        }

      **/);
      

      const lemon8 = new Lemon8();
      lemon8.zestVG();

      this.menu.addEventListener("focus", () => this.toggleMenu());
      this.menu.addEventListener("blur", () => {
        this.options.classList.add('invisible');
        this.clock.classList.remove('invisible');
      });

      this.edit.addEventListener("click", () => {
        this.toggleEdit();
      });
      this.light.addEventListener("click", () => {
        console.log("light clicked");
      });
      this.settings.addEventListener("click", () => {
        console.log("settings clicked");
      });

  }

  getElements() {
    this.body = document.querySelector("body");
    this.main = document.querySelector("main");
    this.form = document.querySelector("form");
    this.login = document.getElementById("login");
    this.menu = document.getElementById("menu");
    this.options = document.getElementById("options");
    this.edit = document.getElementById("edit");
    this.light = document.getElementById("light");
    this.settings = document.getElementById("settings");
    this.clock = document.getElementById("lemonthyme");
  }

  toggleMenu() {
    this.options.classList.remove('invisible');
    this.clock.classList.add('invisible');

  }

  toggleEdit() {
    let dashboard = document.querySelector("html");

    if (this.editMode) {
      console.log("Turning off edit mode");
      window.removeEventListener("beforeunload", this.warnBeforeUnload);
      dashboard.style.boxShadow = "none";
      this.editMode = false;
      dashboard.style.opacity = "1";

    } else {
      console.log("Turning on edit mode");
      window.addEventListener("beforeunload", this.warnBeforeUnload);
      dashboard.style.boxShadow = "inset 0 0 10px 25px white";
      dashboard.style.opacity = "0.75";
      this.editMode = true;


    }
    
  }

  // initializeUser(event) {
  //   const username = document.getElementById("username").value.trim();
  //   const file = document.getElementById("file").files.length > 0;
  
  //   if ((username && file) || (!username && !file)) {
  //       alert("Please enter a name OR upload a file, but not both.");
  //       return false; // Prevents form submission
  //   }
  //   return true; // Allows form submission
  // }

  warnBeforeUnload(event) {
    event.preventDefault();
    event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
  }

}



// Initialization
window.addEventListener("load", () => {
    let nexus = new Nexus();
    const loadingScreen = document.getElementById("loadingScreen");
    const loadStatus = document.getElementById("loadStatus");
    if (nexus.isLoggedIn) {
      loader();
    } else {
      loadStatus.innerHTML = "Welcome!";
      nexus.login.style.display = "block";
      nexus.form.addEventListener("submit", function login(event) {
        let username = document.getElementById("username").value.trim();
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("bookmarks", JSON.stringify([]));
        loader();
      });
    }

    function loader() {
      document.getElementById("loadStatus").innerHTML = "Welcome!";
      loadingScreen.style.opacity = "0";
      loadingScreen.style.height = "0";
      setTimeout(() => loadingScreen.remove(), 2500);
      nexus.main.style.display = "block";
      nexus.main.style.opacity = 1;
      nexus.body.style.overflowY = "auto";
    }

});


