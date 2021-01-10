import * as tf from "@tensorflow/tfjs";

export default {
  linear: (x_vals, y_vals) => {
    const m = tf.variable(tf.scalar(Math.random()));
    const b = tf.variable(tf.scalar(Math.random()));

    const learningRate = 0.5;
    const optimizer = tf.train.sgd(learningRate);

    function predict(x) {
      // y = m * x + b
      return m.mul(x).add(b);
    }

    function loss(predictions, labels) {
      // Mean Squared Error
      return predictions
        .sub(labels)
        .square()
        .mean();
    }

    function train(xs, ys) {
      //train function
      optimizer.minimize(() => loss(predict(xs), ys));
    }

    for (let i = 0; i < 1000; i++) {
      //execute train n times
      train(x_vals, y_vals);
    }

    return [m.dataSync(), b.dataSync()];
  },
};
