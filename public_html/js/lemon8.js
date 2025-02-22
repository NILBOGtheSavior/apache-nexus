/**************************************************************************** ,,,;;;;;;;;;;;;;,,, ***********
 *  :|||#       :||||||||#  :|||#     :|||#    :||||||#    :|||#  :|||#     ###::::.08888888::::###         *
 *  :|||#       :||||||||#  :||||#   :||||#  :||||#|||||#  :||||# :|||#    ##:::::0888:::*888:::::##        *
 *  :|||#       :|||#       :|||||# :|||||#  :|||#  ||||#  :|||||#:|||#    ##:::::8888::::888:::::##        *
 *  :|||#       :|||||||#   :|||||||||||||#  :|||#  ||||#  :||||||||||#  ###::::::::8888888::::::::###      *
 *  :|||#       :|||#       :|||#:|||#||||#  :|||#  ||||#  :|||#:|||||#    ##:::::888:::::888:::::##        *
 *  :||||||||#  :||||||||#  :|||# :|# ||||#  :||||#|||||#  :|||# :||||#    ##:::::888,::::888:::::##        *
 *  :||||||||#  :||||||||#  :|||#     ||||#    :||||||#    :|||#  :|||#     ###::::888888888::::###         *
 *  ``````````  ``````````  `````     `````     ``````     `````  ````        ```;;;;;;;;;;;;;```           *
 *///                                                                                                    \\\*
   //     A script built for making dynamic websites without the need for a backend.                     \\
   //     It allows developers to inject HTML, CSS, and other assets seamlessly, making it ideal         \\
   //     for static sites that need some dynamic behavior.                                              \\
   //                                                                                                    \\
   //     ````````````````````````````````````````````````````````````````````````````````````   `       \\
   //                                                                                \\       ___        \\
   //   For Developers:                                                               ||     /###\       \\
   //   ---------------                                                             |__\\___|##|##|      \\
   //   If you're looking to tinker with the code, everything is documented         |<> ||  _\_|#/       \\
   //   and modular,so you can modify or extend functionality as needed.            | __ \\/_/\|         \\
   //                                                                               |/\_\||\_\/|         \\
   //   For Users:                                                                  |\/_/ \\ <>|         \\
   //   ----------                                                                  | .   || ; |         \\
   //   If you just want to use this without diving into the code, refer to         |      \\  |         \\
   //   the documentation: [Insert Documentation Link Here]                          \________/          \\
   //                                                                                                    \\
/************************************************************************************************************
 *                                                                        Created by NILBOGtheSavior        *
 *                                                                                                          *
 *                                                                                                          *
 *                                                                                                          *
 *                                                                                                          *
 *                                                                                                          *
 *                                                                                                          *
 *                                                                                                          *
/************************************************************************************************************/ 

export class Lemon8 {

    constructor() {
		  this.modules = [];
    }

  static lemon8(id, content = null, position = null, vars = null) { // Injector
    let elemont = document.getElementById(id);
    let juice = null;
    if (!elemont) {
      console.error("Element not found");
      return;
    }

    juice = Lemon8.juicer(content, vars);

    if (position === 'end') {
      elemont.insertAdjacentHTML('beforeend', juice);
    } else {
      elemont.innerHTML = juice;
    }
  }

  static juicer(content = null, vars = null) {
    if (!content) {
        content = "<h1 style='background-color: yellow; border: solid 5px black; padding: 25px; border-radius: 50px;'>lemon8 is injecting this element</h1>";
    }

    // Ensure content is a string
    if (typeof content !== 'string') {
        console.error("Expected content to be a string, but got:", typeof content);
        return content;
    }

    if (vars && typeof vars === 'object') {  
        console.log("Replacing placeholders with:", vars);

        // Replace all placeholders ${key} with corresponding values from vars
        Object.keys(vars).forEach((key) => {
          if (key === 'favicon') {
              // Call getFavicon using vars['url'] and set it as favicon value
              const placeholder = new RegExp(`\\$\\{${key}\\}`, 'g');
              vars[key] = Lemon8.lemicon(vars["url"]);
              content = content.replace(placeholder, vars[key]);
          } else {
              const placeholder = new RegExp(`\\$\\{${key}\\}`, 'g'); // Match ${key}
              content = content.replace(placeholder, vars[key]); // Replace with actual value
          }
      });
    }

    return content;  // Return processed HTML string
}


  
  drink() {
    console.log("removed Lemon8 object")
  }

  static async lemON(fileName) {
    try {
      const response = await fetch(fileName);
      if (!response.ok) throw new Error(`Failed to load ${fileName}: ${response.statusText}`);
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  }
    

	// SVG Injector

   /*
    *	SVGs can be declared in HTML in the same way as an image,
    *	and zestVG will reformat it into a valid SVG element
	  *
    */

  async fetchFile(url) {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return await response.text();
  }
  
  async zestVG() {
      try {
          const svgList = document.querySelectorAll('svg');
          for (let i = 0; i < svgList.length; i++) {
              let svg = svgList[i];
              if (svg.getAttribute('src')) {
                  const svgContent = await this.fetchFile(svg.getAttribute('src'));
                  svg.outerHTML = svgContent;
              }
          }
      } catch (error) {
          console.error('Error injecting SVGs:', error);
      }
  }

  //  Lemicon Favicon fetcher

  static lemicon(url) {
    return `https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`;
  }

  static lemonator(multilineString) {
    return multilineString
        .replace(/\\/g, '\\\\') // Escape backslashes
        .replace(/"/g, '\\"')   // Escape double quotes
        .replace(/\r?\n/g, '\\n')  // Normalize newlines
        .replace(/\t/g, '\\t')  // Escape tabs
        .trim();  // Trim unnecessary whitespace at the start and end
  }

}

export default Lemon8;

/*
    _-====-_
   < =- --= }
    |      |___
   /~~~~~~~~\-.\
  / @   ~  @ \ }}
  | ~  @ ~  ~|//
  |~   ~  @ ~|/
  \  @  ~   ~/ 
   \________/

 */