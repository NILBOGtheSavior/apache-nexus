/************************************************************************************************************
 *  :|||#       :||||||||#  :|||#     :|||#    :||||||#    :|||#  :|||#    .08888888         _-====-_       *
 *  :|||#       :||||||||#  :||||#   :||||#  :||||#|||||#  :||||# :|||#   0888    888       < =- --= }      *
 *  :|||#       :|||#       :|||||# :|||||#  :|||#  ||||#  :|||||#:|||#   8888    888        |~~~~~~|==,    *
 *  :|||#       :|||||||#   :|||||||||||||#  :|||#  ||||#  :||||||||||#     8888888         /@   ~  @\ ))   *
 *  :|||#       :|||#       :|||#:|||#||||#  :|||#  ||||#  :|||#:|||||#   88      888      | ~  @ ~  ~|?    *
 *  :||||||||#  :||||||||#  :|||# :|# ||||#  :||||#|||||#  :|||# :||||#   88      888      |~   ~  @ ~|     *
 *  :||||||||#  :||||||||#  :|||#     ||||#    :||||||#    :|||#  :|||#    888888888        \ @  ~  ~/      *
 *                                                                                           \______/=      *
 *///                                                                                         ```````    \\\*
   //     A script built for making dynamic websites without the need for a backend.                     \\
   //     It allows developers to inject HTML, CSS, and other assets seamlessly, making it ideal         \\
   //     for static sites that need some dynamic behavior.                                              \\
   //                                                                 Created by NILBOGtheSavior         \\
   //     ````````````````````````````````````````````````````````                                       \\
   //                                                                 Cheers!       |__________|         \\
   //   For Developers:                                                             | <>    <> |         \\
   //   ---------------                                                             |     <>   |         \\
   //   If you're looking to tinker with the code, everything is documented         | <>    <> |         \\
   //   and modular,so you can modify or extend functionality as needed.            |   <>     |         \\
   //                                                                               |          |         \\
   //   For Users:                                                                   \________/          \\
   //   ----------                                                                                       \\
   //   If you just want to use this without diving into the code, refer to the documentation:           \\
   //   [Insert Documentation Link Here]                                                                 \\
   //                                                                                                    \\
   /******************************************************************************************************/

export class Lemon8 {

    constructor() {
		console.log("Lemon8 initialized");
    }

	// SVG Injector

   /*
    *	SVGs can be declared in HTML in the same way as an image,
    *	and zestVG will reformat the SVG.
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
}

export default Lemon8;