/*
 *                        |                                     
 *    ,---.,---.,---.,---.|---.,---.    ,---.,---..  ,.   .,---.
 *    ,---||   |,---||    |   ||---'    |   ||---' >< |   |`---.
 *    `---^|---'`---^`---'`   '`---'    `   '`---''  ``---'`---'
 *         |                                          modules.js
 * 
 *##############################################################*/

import Lemon8 from "./lemon8.js";
export class Modules {
  constructor(lemon8, modules = "/js/modules.json", vars="/js/nexus.json") {
    this.modules = modules;
    this.vars = vars;
    this.moduleSettings = null;
    this.lemon8 = lemon8;
  }

  async loadData() {
      this.modules = await Lemon8.lemON(this.modules);
      this.vars = await Lemon8.lemON(this.vars);
  }

  async generator(id, template, vars) {
    for (let i = 0; i < vars.length; i++){
      Lemon8.lemon8(id, template, 'end', vars[i]);
    }
  }

}

export class Bookmarks {
  constructor(parent = new Modules()) {
    this.bookmark = null; // Initially null, will be set after async loading
    this.editmode = null;
    this.parent = parent;

    // this.retrieveTemplate().then(template => this.renderer(template));
    this.initialize();
  }

  async initialize() {
    try {
      await this.parent.loadData();
      this.bookmark = this.parent.modules.bookmarks[0].innerhtml;
      this.bookmarks = this.parent.vars.moduleSettings.bookmarks;
      await this.parent.generator('bookmarks', this.bookmark, this.bookmarks);
    } catch (error) {
      console.error("Error initializing bookmarks:", error)
    }
  }

  
}

export default Modules;