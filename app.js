const poker = {
   poker_eles: {},
   transform_datas: [
      "rotate(-10deg)",
      "rotate(-6deg) translate(35%, -12%)",
      "rotate(-2deg) translate(65%, -19%)",
      "rotate(2deg) translate(95%, -26%)",
      "rotate(6deg) translate(125%, -23%)"
   ],
   imgs: [],
   img_idx: 0,
   init() {
      for (let i = 1; i <= 9; i++) {
         let img = new Image();
         img.src = `./images/mario${i}.jpg`;
         this.imgs.push(img);
      }
      this.poker_eles = [...document.getElementsByClassName("poker")];
      this.poker_eles.forEach((ele, idx) => {
         ele.nums = idx;
      });
      this.img_idx = this.poker_eles.length;
   },
   move() {
      this.poker_eles.map((ele) => {
         let nums = ele.nums;
         if (nums + 1 >= this.poker_eles.length) {
            nums = 0;
            ele.style.transition = "";
            ele.querySelector("img").src = this.imgs[this.img_idx].src;
            this.img_idx++;

            if (this.img_idx >= this.imgs.length) {
               this.img_idx = 0;
            }
         } else {
            nums += 1;
            ele.style.transition = "transform 0.3s ease";
         }
         ele.style.zIndex = nums;
         ele.style.transform = this.transform_datas[nums];
         ele.nums = nums;
      });
   }
};

poker.init();
