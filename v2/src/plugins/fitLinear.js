import * as tf from '@tensorflow/tfjs'

// Inject $fitLinear(xVals, yVals) in Vue, context and store.
export default ({ app }, inject) => {
  inject('fitLinear', (xVals, yVals) => {
    // initial random values
    const M = tf.variable(tf.scalar(Math.random()))
    const B = tf.variable(tf.scalar(Math.random()))
    // optimizer constants
    const LEARNING_RATE = 0.5
    const OPTIMIZER = tf.train.sgd(LEARNING_RATE)
    return ['m', 'b']
  })
}
