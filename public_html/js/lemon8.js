/*************************************************************************************************_-====-_***
 *  :|||#       :||||||||#  :|||#     :|||#    :||||||#    :|||#  :|||#         .08888888        < =- --= } *
 *  :|||#       :||||||||#  :||||#   :||||#  :||||#|||||#  :||||# :|||#        0888   *888        |      |___
 *  :|||#       :|||#       :|||||# :|||||#  :|||#  ||||#  :|||||#:|||#        8888    888       /~~~~~~~~\-.\
 *  :|||#       :|||||||#   :|||||||||||||#  :|||#  ||||#  :||||||||||#          8888888        / @   ~  @ \ }}
 *  :|||#       :|||#       :|||#:|||#||||#  :|||#  ||||#  :|||#:|||||#        888     888      | ~  @ ~  ~|//
 *  :||||||||#  :||||||||#  :|||# :|# ||||#  :||||#|||||#  :|||# :||||#        888,    888      |~   ~  @ ~|/
 *  :||||||||#  :||||||||#  :|||#     ||||#    :||||||#    :|||#  :|||#         888888888       \  @  ~  ~/ *
 *  ``````````  ``````````  `````     `````     ``````     `````  ````           ```````         \_______/= *
 *///                                                                                              ``````\\\*
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
		console.log("Lemon8 initialized");
    }

	// SVG Injector

   /*
    *	SVGs can be declared in HTML in the same way as an image,
    *	and zestVG will reformat it into a valid SVG element
	  *
    */

	async zestVG() {
		try {
			const svgList = document.querySelectorAll('svg');
			for (let i = 0; i < svgList.length; i++) {
				let svg = svgList[i];
				// svg.style.display = "none";
				if (svg.getAttribute('src')) {
					const response = await fetch(svg.getAttribute('src'));
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					svg.outerHTML = await response.text();
				}
			}
		} catch (error) {
			console.error('Error injecting SVGs:', error);
		}
	}

  //  Lemicon Favicon fetcher

  lemicon() {
    console.log("Called lemicon");
  }
}

export default Lemon8;

