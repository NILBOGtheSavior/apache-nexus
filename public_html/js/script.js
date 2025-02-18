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
  */


// Imports

import {Lemon8} from "./lemoneight.js";

class Nexus {
  constructor() {

      // Mode init

      this.editMode = false;

      this.menu = document.getElementById("menu");
      this.options = document.getElementById("options");

      this.edit = document.getElementById("edit");
      this.light = document.getElementById("light");
      this.settings = document.getElementById("settings");
      
      this.clock = document.getElementById("lemonthyme");

      const lemon8 = new Lemon8();
      lemon8.zestVG();

      this.menu.addEventListener("focus", () => {
        this.options.classList.remove('invisible');
        this.clock.classList.add('invisible');
      });
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

  toggleEdit() {
    let dashboard = document.querySelector("html");

    if (this.editMode) {
      console.log("Turning off edit mode");
      dashboard.style.boxShadow = "none";
      this.editMode = false;
      dashboard.style.opacity = "1";

    } else {
      console.log("Turning on edit mode");
      dashboard.style.boxShadow = "inset 0 0 10px 25px white";
      dashboard.style.opacity = "0.75";
      this.editMode = true;


    }
    
  }

}

// Initialization
window.addEventListener("load", () => {
    let nexus = new Nexus();
});
