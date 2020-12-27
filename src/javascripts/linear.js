import * as tf from "@tensorflow/tfjs";

export default {
  linear: (x_vals, y_vals) => {
    let m, b;

    let learningRate = 0.2;
    let optimizer = tf.train.sgd(learningRate);

    m = tf.variable(tf.scalar(Math.random()));
    b = tf.variable(tf.scalar(Math.random()));

    let pred = (x) => {
      let xs = tf.tensor1d(x);
      //y = mx+b
      let ys = xs.mul(m).add(b);
      return ys;
    };

    let loss = (pred, label) => {
      pred
        .sub(label)
        .square()
        .mean();
    };

    // Train the model if x_vals is not null

    if (x_vals > 0) {
      let ys = tf.tensor1d(y_vals);
      for (let i = 0; i < 10; i++) {
        optimizer.minimize(() => loss(pred(x_vals), ys));
      }
    }

    return m, b;
  },
};
