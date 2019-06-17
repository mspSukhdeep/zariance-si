<template>
  <div class="segment">
    <div class="segment-title">Team Size</div>
    <div class="segment-body">
      <div class="columns">
        <div class="column is-8">
          <HorizontalBar
            :height="chartStyle.height"
            :chart-data="datacollection"
            :options="chartOptions"
          ></HorizontalBar>
        </div>
        <div class="column is-4 table-wrapper">
          <div class="columns team-row table-head">
            <div class="column is-6">Team</div>
            <div class="column is-6 has-text-right">Employees</div>
          </div>
          <div class="columns team-row" 
              :class="{'team-row--important': team.isImportant}"
              v-for="(team, index) in teams" 
              :key="index"
              >
            <div class="column is-8">
              <i class="team-row__icon hr__contact-icon material-icons md-24">{{team.icon}}</i>
              {{team.department}}
              </div>
            <div class="column is-4 has-text-right">{{formatNumber(team.size)}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalBar from "./HorizontalBarChart.js";

export default {
  components: {
    HorizontalBar
  },
  data() {
    return {
      teams: [
        {
          department: 'Engineering',
          size: 21332,
          icon: 'build'
        },
        {
          department: 'Sales',
          size: 8042,
          icon: 'shopping_cart'
        },
        {
          department: 'Support',
          size: 32349,
          icon: 'contact_mail'
        },
        {
          department: 'Operations',
          size: 28043,
          icon: 'directions_run'
        },
        {
          department: 'Product',
          size: 12994,
          icon: 'extension'
        },
        {
          department: 'Marketing/Growth',
          size: 14932,
          icon: 'screen_share'
        },
        {
          department: 'Total',
          size: 117692,
          isImportant: true
        },
      ],
      datacollection: {},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                mirror: true,
                padding: -10,
                fontColor: "#000"
              },
              gridLines: {
                tickMarkLength: 0
              }
            }
          ]
        }
      },
      chartStyle: {
        height: 285,
        position: "relative"
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    formatNumber: function(n) {
      return n.toLocaleString(
        undefined,
        { minimumFractionDigits: 0 }
      );
    },
    range(start, end, step = 1) {
      const len = Math.floor((end - start) / step) + 1;
      return Array(len)
        .fill()
        .map((_, idx) => start + idx * step);
    },
    fillData() {
      this.datacollection = {
        labels: [
          "Engineering",
          "Sales",
          "Support",
          "Operations",
          "Product",
          "Marketing / Growth"
        ],
        datasets: [
          {
            label: "Employee count by teams",
            backgroundColor: "rgba(27, 114, 233, .5)",
            data: [21332, 8042, 32349, 28043, 12994, 14932]
          }
        ]
      };
    }
  }
};
</script>

<style lang="sass">
.table
  &-wrapper
    padding: 24px
  &-head
    color: #111
    font-weight: 500
    background-color: #f5f2f2 !important
    // border-radius: 8px 8px 0 0 

.team
  &-row
    &:nth-child(odd)
      background-color: #fafafa
    .column
      padding: 7px 8px
    &--important
      color: #111
      font-weight: 500
      border-top: 1px dashed #dfe1e8
    &__icon
      margin-right: 3px
</style>