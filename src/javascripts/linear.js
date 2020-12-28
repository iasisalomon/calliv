import * as tf from "@tensorflow/tfjs";

export default {
  linear: (x_vals, y_vals) => {
    // let dispel = [];
    // dispel.push(x_vals, y_vals, tf.memory().numTensors);
    let m, b;
    m = tf.scalar(Math.random()).variable();
    b = tf.scalar(Math.random()).variable();

    tf.print(m);
    tf.print(b);
    console.log(x_vals);
    console.log(y_vals);

    let pred = tf.tidy(() => {
      (x) => {
        let xs = tf.tensor1d(x);
        tf.print(xs);
        //y = mx+b
        let ys = xs.mul(m).add(b);
        return ys;
      };
    });

    let loss = tf.tidy(() => {
      (pred, label) => {
        pred
          .sub(label)
          .square()
          .mean();
      };
    });

    // Train the model if x_vals is not null
    let learningRate = 0.1;
    let optimizer = tf.train.sgd(learningRate);

    tf.tidy(() => {
      if (x_vals > 0) {
        let ys = tf.tensor1d(y_vals);
        for (let i = 0; i < 1000; i++) {
          console.log(tf.print(m));

          optimizer.minimize(() => loss(pred(x_vals), ys));
        }
      }
    });
    return m.dataSync(), b.dataSync();
  },
};
