import BaseChart from "../basechart/BaseChart.js"

/**
 * The HorizontalBarChart module for drawing a HorizontalBarChart on a HTML canvas element.
 *
 * @author Zakarias Bergcrona
 */
export default class HorizontalBarChart extends BaseChart {
  /**
   * Initializes the HorizontalBarChart object with necessary options.
   *
   * @param {*} options An object containing the configuration of your HorizontalBarChart.
   */
  constructor (options) {
    super(options)
    this.labels = options.labels || []
    this.colors = options.colors || []
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.padding = options.padding || 10
  }

  /**
   * Draws a horizontal BarChart according to the options object passed to the constructor as an argument.
   *
   */
  draw () {
    try {

      const totalBars = this.data.length
      const maxValue = Math.max(...this.data)
      const paddingSpace = (totalBars + 1) * this.padding
      const availableHeight = this.height - paddingSpace
      const barHeight = availableHeight / totalBars

      for (let i = 0; i < totalBars; i++) {
        const barWidth = (this.data[i] / maxValue) * (this.width - 2 * this.padding)
        const yAxis = this.padding + i * (barHeight + this.padding)
        const xAxis = this.padding

        this.context.fillStyle = this.colors[i] || 'gray'
        this.context.fillRect(xAxis, yAxis, barWidth, barHeight)

        if (this.labels[i]) {
          this.context.fillStyle = '#000'
          this.context.textAlign = 'left'
          this.context.fillText(this.labels[i], xAxis + barWidth + 5, yAxis + barHeight / 2)
        }
      }
    } catch (error) {
      console.error(error)
      this.clear()
    }
  }

  
}
