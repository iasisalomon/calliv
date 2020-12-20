<template>
  <div class="container mt-1">
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
    this.curveBy4 = JSON.parse(localStorage.getItem("curveBy4"));
    this.ys = this.curveBy4.map((el) => {
      return el[1];
    });
    localStorage.setItem("ys", JSON.stringify(this.ys));
    const sketch = (s) => {
      let w = 900;
      let h = 600;

      function grid() {
        for (var x = 0; x < w; x += 20) {
          s.strokeWeight(0.1);
          s.line(x, 0, x, h);
          for (var y = 0; y < h; y += 20) {
            s.strokeWeight(0.1);
            s.line(0, y, w, y);
          }
        }
        s.translate(0, h);
        s.scale(1, -1);
      }

      function displayMousePosition() {
        s.push();
        s.rect(0, 580, 60, 20);
        s.scale(1, -1);
        s.text(s.mouseX + "," + (600 - s.mouseY), 5, -585);
        s.pop();
      }

      s.setup = () => {
        s.createCanvas(w, h);
      };

      s.draw = () => {
        let xs = JSON.parse(localStorage.getItem("xs"));
        xs = xs.map((el) => {
          Number(el);
          return el / 100;
        });
        let ys = JSON.parse(localStorage.getItem("ys"));
        ys = ys.map((el) => {
          Number(el);
          return el / 100000;
        });
        s.background(220);
        grid();
        displayMousePosition();
        s.push();
        s.stroke("purple"); // Change the color
        s.strokeWeight(5); // Make the points 10 pixels in size
        for (let i = 0; i < xs.length; i++) {
          let px = s.map(xs[i], 0, 1, 0, w);
          let py = s.map(ys[i], 0, 1, 0, h);
          s.point(px, py);
        }
        s.pop();
      };
    };

    new P5(sketch, "canvas");
  },
};
</script>
