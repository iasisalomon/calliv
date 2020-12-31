import * as tf from "@tensorflow/tfjs";

export default {
  linear: (x_vals, y_vals) => {
    console.log(x_vals);
    console.log(y_vals);
    // let dispel = [];
    // dispel.push(x_vals, y_vals, tf.memory().numTensors);
    let m, b;
    m = tf.scalar(Math.random()).variable();
    b = tf.scalar(Math.random()).variable();

    let pred = tf.tidy(() => {
      let xs = tf.tensor1d(x_vals);
      tf.print(xs);
      //y = mx+b
      let ys = xs.mul(m).add(b);
      return ys;
    });

    let loss = tf.tidy(() => {
      pred
        .sub(y_vals)
        .square()
        .mean();
    });

    // Train the model rnif x_vals is not null
    let learningRate = 0.05;
    let optimizer = tf.train.sgd(learningRate);

    tf.tidy(() => {
      if (x_vals > 0) {
        let ys = tf.tensor1d(y_vals);
        for (let i = 0; i < Math.pow(10, 7); i++) {
          optimizer.minimize(() => loss(pred(x_vals), ys));
        }
      }
    });
    tf.print(m);
    tf.print(b);
    return [m.dataSync(), b.dataSync()];
  },
};
