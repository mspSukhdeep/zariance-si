<template>
  <div class="overview coming-soon">
    <div class="segment columns">
      <div class="metric column is-3" v-for="(metric, index) in topMetrics" :key="index">
        <span class="metric__icon icon is-left" :style="'color:'+metric.color" v-html="metric.icon"></span>
        <span class="metric__data">
          <span class="metric__value">{{metric.value}}</span>
          <span class="metric__key">{{metric.label}}</span>
        </span>
      </div>
    </div>

    <div class="segment columns">
      <div class="column is-9">
        <div class="segment" v-if="company.business.financialMetrics.length">
          <div class="segment-title">Microsoft's Financial Status</div>
          <div class="segment-body columns">
            <div
              class="metric metric--alt column is-3"
              v-for="(metric, index) in financeMetrics"
              :key="index"
            >
              <div class="metric__inr">
                <div class="metric__value">{{metric.value}}</div>
                <div class="metric__key">{{metric.key}}</div>
              </div>
              <div
                class="metric__indicator-wrapper"
                :class="{'metric__indicator-wrapper--red': index==2}"
              >
                <Icon :icon="metric.icon"></Icon>
                <div class="metric__indicator-value">{{ metric.change }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar column is-3">
        <div class="sidebar-item">
          <div class="sidebar-item__key">Year Founded</div>
          <div class="sidebar-item__value">{{company.basic.year_founded}}</div>
        </div>
        <div class="sidebar-item">
          <div class="sidebar-item__key">Key People</div>
          <UserBadge
            v-for="(person, index) in company.basic.keyPeople"
            :key="index"
            :person="person"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserBadge from "~/components/UserBadge";
import FundingChart from "~/components/FundingChart";
import InvestmentChart from "~/components/InvestmentChart";
import InvestmentTable from "~/components/InvestmentTable";
import CompetitorBox from "~/components/CompetitorBox";
import AquisitionBox from "~/components/AquisitionBox";
import Icon from "~/components/Icon";

const PropIcons = {
  iconSet: {
    website_traffic: `<svg style="width:24px;height:24px;transform:scale(1.25)" viewBox="0 0 24 24"><path fill="#1973e7" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`,
    headquarters: '<i class="material-icons md-30">location_on</i>',
    employee_count: '<i class="material-icons md-30">face</i>',
    listing_status: '<i class="material-icons md-30">location_city</i>',
    default: '<i class="material-icons md-30">face</i>'
  },
  get: function(propName) {
    return this.iconSet[propName] || this.iconSet["default"];
  }
};

export default {
  components: {
    UserBadge,
    FundingChart,
    InvestmentChart,
    InvestmentTable,
    CompetitorBox,
    AquisitionBox,
    Icon
  },
  computed: {
    topMetrics() {
      return this.company.business.topMetrics.map(metric => {
        metric.label = metric.key.replace("_", " ");
        metric.icon = PropIcons.get(metric.key);
        return metric;
      });
    }
  },
  created() {},
  props: ["company"],
  data: function() {
    return {};
  }
};
</script>

<style lang="sass">
$box-shadow: 0 1px 6px 1px rgba(92,78,62,.28)

.overview
    margin-top: 30px
    &-graph
        &-table
            margin-top: 40px
    &-table
        &-wrapper
            display: flex
            // align-item: center
    &-competitors
        &.segment
            margin-top: 50px

.metric
    text-align: left
    position: relative
    &__icon
        font-size: 30px
        width: 30px
        height: 30px
        vertical-align: middle
        margin-right: 3px
        .material-icons
            font-size: 30px
    &__data
        vertical-align: middle
        display: inline-block
        width: 85%
    &__key
        font-weight: 500
        display: inline-block
        width: 100%
        text-transform: capitalize
    &__value
        display: inline-block
        width: 100%
        text-transform: capitalize
    &__indicator
      line-height: 1
      &-value
        font-weight: 500
      &-wrapper
        position: absolute
        top: 17px
        right: 17px
        font-size: 10px
        line-height: 1
        color: #00877a
        &--red
          color: #c00
    &--alt
      .metric
        &__inr
          box-shadow: $box-shadow
          border-radius: 8px
          padding: 10px
        &__key
          margin-top: 3px

.sidebar
    &-item
        &__title
            font-size: 18px
            font-weight: 600
        &__key
            font-weight: 500
            padding: 0 15px
        &__value
            padding: 0 15px
        & + &
            margin-top: 20px
</style>