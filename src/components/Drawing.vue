<template>
  <div class="container mt-1">
    {{}}
    <div id="canvas" class="row justify-content-center"></div>
  </div>
</template>

<script>
import P5 from "p5";
import linear from "../javascripts/linear.js";
import * as tf from "@tensorflow/tfjs";

export default {
  props: {},
  data() {
    return {
      curveBy4: [],
      ys: [],
      xs: [0, 4.2, 9.7, 14.6, 22, 33.3, 50, 100],
      mbs: [],
    };
  },
  methods: {},
  created() {
    //manejo del Local Storage
    localStorage.setItem("xs", JSON.stringify(this.xs));
    this.curveBy4 = JSON.parse(localStorage.getItem("curveBy4"));

    this.ys = this.curveBy4.map((el) => {
      return el[1];
    });
    localStorage.setItem("ys", JSON.stringify(this.ys));

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

    localStorage.setItem("xs", JSON.stringify(this.xs));
    localStorage.setItem("ys", JSON.stringify(this.ys));

    //llamada a la optimizacion

    this.mbs = linear.linear(xs, ys);
    console.log(tf.memory().numTensors);
  },
  beforeMount() {
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
        s.frameRate(1);
        s.background(220);
        grid();
        displayMousePosition();
        s.push();
        s.stroke("red");
        s.strokeWeight(10);

        //data management
        let xsd = JSON.parse(localStorage.getItem("xs"));
        let ysd = JSON.parse(localStorage.getItem("ys"));

        xsd = xsd.map((el) => {
          Number(el);
          return el / 100;
        });
        ysd = ysd.map((el) => {
          Number(el);
          return el / 100000;
        });

        //dot drawing
        for (let i = 0; i < xsd.length; i++) {
          let px = s.map(xsd[i], 0, 1, 0, w);
          let py = s.map(ysd[i], 0, 1, 0, h);
          s.point(px, py);
        }
        s.pop();
      };
    };
    new P5(sketch, "canvas");
  },
};
</script>
