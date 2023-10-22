/**
 * The BaseChart super class that contain common functionalities for the chart module classes.
 * 
 * @author Zakarias Bergcrona
 */
export default class BaseChart {

  /**
   * The superclass constructor for every chart class. Sets common funcionality.
   * @param {*} options the options for the chart class.
   */
  constructor(options) {
    if (!this.isValidCanvasId(options.canvasId)) {
        throw new TypeError('Need a valid reference to a canvas element') 
    }

    if (!this.isValidData(options.data)) {
        throw new TypeError('Data needs to be an array of data and not empty') 
    }

    this.canvas = document.getElementById(options.canvasId)
    this.context = this.canvas.getContext('2d')
    this.data = options.data
   }

   isValidCanvasId(canvasId) {
      return typeof canvasId === 'string' && document.getElementById(canvasId)
   }

   isValidData(data) {
        return Array.isArray(data) && data.length !== 0
   }

   clear() {
    this.context.clearRect(0, 0, this.width, this.height)
   }
}