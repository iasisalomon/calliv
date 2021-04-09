import * as tf from '@tensorflow/tfjs';

export default {
  linear: (x_vals, y_vals) => {
    const a = tf.scalar(Math.random()).variable();
    const b = tf.scalar(Math.random()).variable();
    const c = tf.scalar(Math.random()).variable();

    const learningRate = 0.5;
    const optimizer = tf.train.sgd(learningRate);

    function predict(x) {
      // y = ax2 + bx + c
      return a
        .mul(x.square())
        .add(b.mul(x))
        .add(c);
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

    let finala = Number(a.dataSync());
    let finalb = Number(b.dataSync());
    let finalc = Number(c.dataSync());

    let predictedys = x_vals.map((el) => {
      return finala * Math.pow(el, 2) + finalb * el + finalc;
    });

    //r2 calculations
    let sum = y_vals.reduce((previous, current) => (current += previous));
    console.log(sum);

    let mean = sum / y_vals.length;
    console.log(mean);

    //SEmean
    let y2mean = y_vals.map((el) => {
      return Math.pow(el - mean, 2);
    });
    let SEmean = y2mean.reduce((previous, current) => (current += previous));
    console.log(y2mean);
    console.log(SEmean);

    //SEline
    let y2diff = [];
    for (let i = 0; i < y_vals.length; i++) {
      y2diff.push(Math.pow(y_vals[i] - predictedys[i], 2));
    }
    let SEline = y2diff.reduce((previous, current) => (current += previous));

    console.log(y2diff);
    console.log(SEline);

    //R2 determination
    let r2 = 1 - SEline / SEmean;
    r2 = Number(r2.toFixed(5));
    console.log(r2);

    return [a.dataSync(), b.dataSync(), c.dataSync(), r2];
  },
};
