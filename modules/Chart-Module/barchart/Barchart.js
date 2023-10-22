import BaseChart from "../basechart/BaseChart.js"

/**
 * The BarChart module for drawing a BarChart on a HTML canvas element.
 *
 * @author Zakarias Bergcrona
 */
export default class BarChart extends BaseChart {
  /**
   * Initializes the BarChart object with necessary options.
   *
   * @param {*} options An object containing the configuration of your BarChart.
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
   * Draws the BarChart according to the options object passed as an argument to the constructor.
   *
   */
  draw () {
    try {
      const totalBars = this.data.length
      const maxValue = Math.max(...this.data)
      const paddingSpace = (totalBars + 1) * this.padding
      const availableWidth = this.width - paddingSpace
      const barWidth = availableWidth / totalBars

      for (let i = 0; i < totalBars; i++) {
        const barHeight = (this.data[i] / maxValue) * (this.height - 2 * this.padding)
        const xAxis = this.padding + i * (barWidth + this.padding)
        const yAxis = this.height - barHeight - this.padding

        this.context.fillStyle = this.colors[i] || 'gray'
        this.context.fillRect(xAxis, yAxis, barWidth, barHeight)

        if (this.labels[i]) {
          this.context.fillStyle = '#000'
          this.context.textAlign = 'center'
          this.context.fillText(this.labels[i], xAxis + barWidth / 2, this.height - this.padding / 2)
        }
      }
    } catch (error) {
      console.error(error)
      this.clear()
    }
  }


  
}
