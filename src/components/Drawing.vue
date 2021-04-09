<template>
  <div class="container mt-1">
    <div class="container mt-1">
      <div class="container mt-1 mb-1 justify-content-center">
        <form>
          <div class="form-row justify-content-center">
            <div class="col-1">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div class="col-3">
              <input type="text" disabled class="form-control" placeholder="LINEAR" />
            </div>
            <div class="col-3">
              <h5 class="align-middle mt-2">y = {{ mbs[0] }} x + {{ mbs[1] }}</h5>
            </div>
            <div class="col-3">
              <h5 class="align-middle mt-2">R2 = {{ mbs[2] }}</h5>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="canvas" class="row justify-content-center"></div>
  </div>
</template>

<script>
import P5 from 'p5';
import linear from '../javascripts/linear.js';
import * as tf from '@tensorflow/tfjs';

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
    localStorage.setItem('xs', JSON.stringify(this.xs));
    this.curveBy4 = JSON.parse(localStorage.getItem('curveBy4'));

    this.ys = this.curveBy4.map((el) => {
      return el[1];
    });
    localStorage.setItem('ys', JSON.stringify(this.ys));

    let xs = JSON.parse(localStorage.getItem('xs'));
    xs = xs.map((el) => {
      Number(el);
      return el / 100;
    });
    let ys = JSON.parse(localStorage.getItem('ys'));

    ys = ys.map((el) => {
      Number(el);
      return el / 100000;
    });

    localStorage.setItem('xs', JSON.stringify(this.xs));
    localStorage.setItem('ys', JSON.stringify(this.ys));

    //llamada a la optimizacion
    let flan = linear.linear(xs, ys);
    console.log(flan);
    this.mbs = flan.map((el) => {
      console.log(el);
      return el[0];
    });

    this.mbs = this.mbs.map((el) => {
      return Number(el.toFixed(4));
    });

    console.log(tf.memory().numTensors);
  },
  beforeMount() {
    const sketch = (s) => {
      let w = 900;
      let h = 600;
      function grid() {
        s.strokeWeight(0.1);
        for (var x = 0; x < w; x += 20) {
          s.line(x, 0, x, h);
          for (var y = 0; y < h; y += 20) {
            s.line(0, y, w, y);
          }
        }
        s.translate(0, h);
        s.scale(1, -1);
      }
      s.setup = () => {
        s.createCanvas(w, h);
      };

      s.draw = () => {
        s.frameRate(30);
        s.background(220);
        grid();
        //data management
        let xsd = JSON.parse(localStorage.getItem('xs'));
        let ysd = JSON.parse(localStorage.getItem('ys'));

        xsd = xsd.map((el) => {
          Number(el);
          return el / 100;
        });
        ysd = ysd.map((el) => {
          Number(el);
          return el / 100000;
        });

        //dot drawing
        s.push();
        s.stroke('red');
        s.strokeWeight(5);
        for (let i = 0; i < xsd.length; i++) {
          let px = s.map(xsd[i], 0, 1, 0, w);
          let py = s.map(ysd[i], 0, 1, 0, h);
          s.point(px, py);
        }
        s.pop();
        //line drawing
        s.push();
        s.stroke('blue');
        s.strokeWeight(2);
        let x1 = s.map(0, 0, 1, 0, w);
        let y1 = s.map(this.mbs[1], 0, 1, 0, w);
        let x2 = s.map(1, 0, 1, 0, w);
        let y2 = s.map(this.mbs[0] + this.mbs[1], 0, 1, 0, h);
        console.log(this.mbs[0] + this.mbs[1]);
        s.line(x1, y1, x2, y2);
        s.pop();
      };
    };
    new P5(sketch, 'canvas');
  },
};
</script>
