import BaseChart from "../basechart/BaseChart.js"

/**
 * The PieChart module for drawing a PieChart on a HTML canvas element.
 *
 * @author Zakarias Bergcrona
 */
export default class PieChart extends BaseChart {
  /**
   * Initializes the PieChart object with necessary options such as data, color, labels.
   *
   * @param {*} options An object containing the configuration of your PieChart.
   */
  constructor (options) {
    super(options)

    this.labels = options.labels || []
    this.colors = options.colors || []
    this.centerX = this.canvas.width / 2
    this.centerY = this.canvas.height / 2
    this.radius = Math.min(this.centerX, this.centerY) - 10
  }

  /**
   * Draws a PieChart according to the options passed to the constructor.
   *
   */
  draw () {
    try {
      let totalValue = 0
      let currentAngle = -0.5 * Math.PI // Start at the top of the canvas.

      for (let i = 0; i < this.data.length; i++) {
        totalValue += this.data[i]
      }

      for (let i = 0; i < this.data.length; i++) {
        const sliceAngle = 2 * Math.PI * this.data[i] / totalValue

        this.context.beginPath()
        this.context.moveTo(this.centerX, this.centerY)
        this.context.arc(this.centerX, this.centerY, this.radius, currentAngle, currentAngle + sliceAngle)
        this.context.closePath()

        this.context.fillStyle = this.colors[i] || 'gray'
        this.context.fill()

        currentAngle += sliceAngle
      }
    } catch (error) {
      console.error(error)
      this.clear()
    }
  }

  
}
