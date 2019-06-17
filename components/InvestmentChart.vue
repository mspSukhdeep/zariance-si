<template>
  <div class="donut-wrapper">
    <doughnut-chart :height="chartStyle.height" :chart-data="datacollection" :options="chartOptions"></doughnut-chart>
  </div>
</template>

<script>
  import DoughnutChart from './DoughnutChart.js'

  export default {
    components: {
      DoughnutChart
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
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            legend: {
                position: 'bottom'
            },
            title: `Investor's Share`
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
          labels: ['Accel Partners', 'Sequoia Capital', 'Google Capital', 'Index Ventures', 'GGV Capital'],
          datasets: [
            {
              label: 'Investors Distribution',
              backgroundColor: [
                  "#004eb6",
                  "#00877a",
                  "#f33527",
                  "#9124a3",
                  "#f08f00"
              ],
              data: [
                  90,
                  65,
                  45,
                  25,
                  15
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