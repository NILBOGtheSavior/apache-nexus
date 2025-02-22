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
import {Modules, Bookmarks} from "./modules.js";

class Nexus {
  /*
  ............................................................
   ..........##..##..######..##..##..##..##...####............
   ..........###.##..##.......####...##..##..##...............
   ..........##.###..####......##....##..##...####............
   ..........##..##..##.......####...##..##......##...........
   ..........##..##..######..##..##...####....####............
   ...........................................................
 */

  constructor(config = "/js/nexus.json") {

      // This section checks localStorage for a login session.

      if (localStorage.getItem("isLoggedIn") === "true") {
        this.isLoggedIn = true;
        console.log("User is logged in as", localStorage.getItem("username"));
      } else {
        console.warn("You are not logged in")
        this.isLoggedIn = false;
      }    
      
      this.config = config;
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
      
      this.lemon8 = new Lemon8();
      this.lemon8.zestVG();
      this.modules = new Modules();
      this.bookmarks = new Bookmarks(this.modules);

  /*
  .######..##..##..######..##..##..######..........##......######...####...######.........
  .##......##..##..##......###.##....##............##........##....##........##...........
  .####....##..##..####....##.###....##............##........##.....####.....##....######.
  .##.......####...##......##..##....##............##........##........##....##...........
  .######....##....######..##..##....##............######..######...####.....##...........
  ........................................................................................
  */

      //  menu

      this.menu.addEventListener("mouseover", () => {
        this.menu.style.width = "350px";
        this.options.classList.remove('invisible');
        // this.clock.classList.add('invisible');
      });
      this.menu.addEventListener("mouseout", () => {
        this.menu.style.width = "200px";
        this.options.classList.add('invisible');
        // this.clock.classList.remove('invisible');
      });

      //  edit

      this.edit.addEventListener("click", () => {
        this.toggleEdit();
      });

      //  light
      
      this.light.addEventListener("click", () => {
        console.log("light clicked");
      });

      //  settings

      this.settings.addEventListener("click", () => {
        console.log("settings clicked");
      });

  }

  /*
  .##...##..######..######..##..##...####...#####....####..
  .###.###..##........##....##..##..##..##..##..##..##.....
  .##.#.##..####......##....######..##..##..##..##...####..
  .##...##..##........##....##..##..##..##..##..##......##.
  .##...##..######....##....##..##...####...#####....####..
  .........................................................
  */

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

  // renderModules() {
  //   let myModules = this.bookmarks.generator();
  //   for (let i = 0; i < myModules.length; i++) {
  //     this.lemon8.lemon8('bookmarks', myModules[i], 'end')
  //   }
  // }

  async loadConfig() {
    try {
        // Check if config is stored in localStorage
        const storedConfig = localStorage.getItem("nexusConfig");
        if (storedConfig) {
            this.config = JSON.parse(storedConfig);
            console.log("Loaded config from localStorage:", this.config);
            return;
        }

        // If not found in localStorage, fetch it from the server
        const response = await fetch(this.config);
        if (!response.ok) throw new Error("Failed to fetch config");

        const data = await response.json();
        this.config = data;

        // Store fetched config in localStorage
        localStorage.setItem("nexusConfig", JSON.stringify(data));
        console.log("Fetched and stored config:", data);
    } catch (error) {
        console.error("Error loading config:", error);
    }
}


  toggleEdit() {
    let dashboard = document.querySelector("html");

    if (this.editMode) {
      console.log("Turning off edit mode");
      // window.removeEventListener("beforeunload", this.warnBeforeUnload);
      dashboard.style.boxShadow = "none";
      this.editMode = false;
      dashboard.style.opacity = "1";

    } else {
      console.log("Turning on edit mode");
      // window.addEventListener("beforeunload", this.warnBeforeUnload);
      dashboard.style.opacity = "0.75";
      this.editMode = true;
      Lemon8.lemon8('bookmarks', null, 'end', null);

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

/*
.######..##..##..######..######.
...##....###.##....##......##...
...##....##.###....##......##...
...##....##..##....##......##...
.######..##..##..######....##...
................................
*/

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
        localStorage.setItem("username", username);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("bookmarks", JSON.stringify([]));
        loader();
        
      });
      
    }

    function loader() {
      document.getElementById("loadStatus").innerHTML = "Welcome!";
      loadingScreen.style.opacity = "0";
      loadingScreen.style.height = "0";
      loadingScreen.style.pointerEvents = "none";
      setTimeout(() => loadingScreen.remove(), 2500);
      nexus.main.style.display = "block";
      nexus.main.style.opacity = 1;
      nexus.body.style.overflowY = "auto";

      nexus.loadConfig();
    }
    
});

