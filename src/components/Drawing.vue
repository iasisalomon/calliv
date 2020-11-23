<template>
  <div class="container mt-1">
    {{ xs }}
    {{ ys }}
    <div id="canvas" class="row justify-content-center"></div>
  </div>
</template>

<script>
// import * as tf from "@tensorflow/tfjs";
import P5 from "p5";

export default {
  props: {},
  data() {
    return {
      curveBy4: [],
      ys: [],
      xs: [0, 4.2, 9.7, 14.6, 22, 33.3, 50, 100],
    };
  },
  methods: {},
  created() {
    localStorage.setItem("xs", JSON.stringify(this.xs));
    const sketch = (s) => {
      let w = 800;
      let h = 500;

      // function grid() {
      //   for (var x = 0; x < w; x += 20) {
      //     s.line(x, 0, x, h);
      //     for (var y = 0; y < h; y += 20) {
      //       s.line(0, y, w, y);
      //     }
      //   }
      //   s.translate(0, h);
      //   s.scale(1, -1);
      // }

      // function displayMousePosition() {
      //   s.push();
      //   s.rect(0, 480, 60, 20);
      //   s.scale(1, -1);
      //   s.text(s.mouseX + "," + s.mouseY, 5, -485);
      //   s.pop();
      // }

      s.setup = () => {
        s.createCanvas(w, h);
      };

      s.draw = () => {
        s.background(220);
        // grid();
        // displayMousePosition();
        s.push();
        s.stroke("purple"); // Change the color
        s.strokeWeight(10); // Make the points 10 pixels in size
        s.pop();
      };
    };

    new P5(sketch, "canvas");
    this.curveBy4 = JSON.parse(localStorage.getItem("curveBy4"));
    this.ys = this.curveBy4.map((el) => {
      return el[1];
    });
  },
};
</script>
