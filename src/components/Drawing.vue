<template>
  <div class="container mt-1">
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
    };
  },
  methods: {},
  created() {
    const sketch = (s) => {
      let w = 800;
      let h = 500;

      function grid() {
        for (var x = 0; x < w; x += 20) {
          s.line(x, 0, x, h);
          for (var y = 0; y < h; y += 20) {
            s.line(0, y, w, y);
          }
        }
      }

      function displayMousePosition() {
        s.rect(0, 0, 60, 20);
        s.text(s.mouseX + "," + s.mouseY, 10, 15);
      }

      s.setup = () => {
        s.createCanvas(w, h);
      };

      s.draw = () => {
        s.background(220);
        grid();
        displayMousePosition();
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
