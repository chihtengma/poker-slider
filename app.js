// Define a 'poker' object to encapsulate all realted properties and functions.
const poker = {
   poker_eles: {}, // Object to store references to poker elments in the DOM.
   transform_datas: [
      // Array of transformation styles for each poker card.
      "rotate(-10deg)",
      "rotate(-6deg) translate(35%, -12%)",
      "rotate(-2deg) translate(65%, -19%)",
      "rotate(2deg) translate(95%, -26%)",
      "rotate(6deg) translate(125%, -23%)"
   ],
   imgs: [], // Array to store Image objects for preloading.
   img_idx: 0, // Index to keep track of the current image being displayed.

   // init function that initializes the poker object.
   init() {
      // Loop to preload images and add them to the imgs array.
      for (let i = 1; i <= 9; i++) {
         let img = new Image(); // Create a new Image object.
         img.src = `./images/mario${i}.jpg`; // Set the source of the image.
         this.imgs.push(img); // Add the image to the imgs array.
      }

      // Get all elements with class 'poker' and store them in poker_eles.
      this.poker_eles = [...document.getElementsByClassName("poker")];

      // Assign a nums property to each poker element (used for tracking their order).
      this.poker_eles.forEach((ele, idx) => {
         ele.nums = idx;
      });

      // Set img_idx to the length of poker_eles array.
      this.img_idx = this.poker_eles.length;
   },

   // move function handles the animation and image swapping of poker cards.
   move() {
      // Iterate over each poker element to update its state.
      this.poker_eles.map((ele) => {
         let nums = ele.nums; // Retrieve the nums value of the element.

         // Check if the element needs to cycle back to the start.
         if (nums + 1 >= this.poker_eles.length) {
            nums = 0; // Reset nums to 0.
            ele.style.transition = ""; // Reset transition style.
            ele.querySelector("img").src = this.imgs[this.img_idx].src; // Change the image source.
            this.img_idx++; // Increment the image index.

            // Reset img_idx to 0 if it exceeds the length of imgs array.
            if (this.img_idx >= this.imgs.length) {
               this.img_idx = 0;
            }
         } else {
            // Increment nums and update the transition style for movement.
            nums += 1;
            ele.style.transition = "transform 0.3s ease";
         }

         // Update the index, transform properties, and nums value for each element.
         ele.style.zIndex = nums;
         ele.style.transform = this.transform_datas[nums];
         ele.nums = nums;
      });
   }
};

// Call the init function to initialize the poker object.
poker.init();
