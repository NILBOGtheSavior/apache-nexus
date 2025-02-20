 /*
  *                        |                                     
  *    ,---.,---.,---.,---.|---.,---.    ,---.,---..  ,.   .,---.
  *    ,---||   |,---||    |   ||---'    |   ||---' >< |   |`---.
  *    `---^|---'`---^`---'`   '`---'    `   '`---''  ``---'`---'
  *         |                                          modules.js
  * 
#*##############################################################*/

//  Bookmarks

/*  
 *  Bookmarks have 2 properties;
 *      -   Name
 *      -   URL
 *  The bookmarks.js file will open a configuration file with
 *  the saved bookmarks, read the data, process them into HTML
 *  elements, and return the elements.
 * 
 */

/*##############################################################*/



const addBookmark = '<a class="page" href="http://github.com"> <div class="acrylicWidget widget">+</div><p>Add<br>bookmark</p</a>'

window.addEventListener("load", (event) => {
    document.getElementById("addBookmark").addEventListener("click", (e) => {
        console.log("success");
    })
  });