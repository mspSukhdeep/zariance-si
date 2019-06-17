<template>
  <div class="chart-wrapper">
    <bar-chart :height="chartStyle.height" :chart-data="datacollection" :options="chartOptions"></bar-chart>
  </div>
</template>

<script>
  import BarChart from './BarChart.js'

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: {},
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        },
        chartStyle: {
            height: 400,
            position: 'relative'
        }
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
    range(start, end, step = 1) {
        const len = Math.floor((end - start) / step) + 1
        return Array(len).fill().map((_, idx) => start + (idx * step))
    },
      fillData () {
        this.datacollection = {
          labels: this.range(2010, 2019),
          datasets: [
            {
              label: 'Funding Raised in million USD',
              backgroundColor: '#1a73e8',
              data: [
                  1,4,6,7,13,44,94,149,249,283
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="sass">
</style>