import BaseChart from "../basechart/BaseChart.js"

/**
 * The LineChart module for drawing a LineChart on a HTML canvas element.
 *
 * @author Zakarias Bergcrona
 */
export default class LineChart extends BaseChart {
  /**
   * Initializes the LineChart object with necessary options.
   *
   * @param {*} options An object containing the configuration of your LineChart.
   */
  constructor (options) {
    super(options)

    this.labels = options.labels || []
    this.color = options.color || '#000'
    this.padding = 50
  }

  /**
   * Draws a linechart with the options passed as an argument to the constructor.
   *
   */
  draw () {
    try {

      const maxValue = Math.max(...this.data)
      const minValue = Math.min(...this.data)

      const horizontalStep = (this.canvas.width - 2 * this.padding) / (this.data.length - 1)
      const verticalScale = (this.canvas.height - 2 * this.padding) / (maxValue - minValue)

      this.context.beginPath()

      this.data.forEach((value, index) => {
        const xAxis = this.padding + index * horizontalStep
        const yAxis = this.canvas.height - this.padding - (value - minValue) * verticalScale

        if (index === 0) {
          this.context.moveTo(xAxis, yAxis)
        } else {
          this.context.lineTo(xAxis, yAxis)
        }
      })

      this.context.strokeStyle = this.color
      this.context.stroke()
    } catch (error) {
      console.error(error)
      this.clear()
    }
  }

  
}
