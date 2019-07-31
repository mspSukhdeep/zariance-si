<template>
  <div>
    <div class="container">
      <CompanyHeader :company="company.basic" />
      <div class="segment columns">
        <template v-for="(metric, index) in topMetrics">
          <div class="metric column is-4" :key="index" v-if="metric.value && metric.label">
            <span
              class="metric__icon icon is-left"
              :style="'color:'+metric.color"
              v-html="metric.icon"
            ></span>
            <span class="metric__data">
              <span class="metric__value">{{metric.value}}</span>
              <span class="metric__key">{{metric.label}}</span>
            </span>
          </div>
        </template>
      </div>
      <PillNavigation :route="navigation" />
      <NuxtChild :company="company" :key="$route.params.companies" />
    </div>
  </div>
</template>
<script>
import CompanyHeader from "~/components/CompanyHeader.vue";
import PillNavigation from "~/components/PillNavigation.vue";
import style from "~/assets/style/index.sass";

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
    CompanyHeader,
    PillNavigation
  },
  name: "CompanyPage",
  created() {
    this.$store.dispatch("company/fetchCompanyInfo", {
      companyName: this.companyName
    });
  },
  computed: {
    navigation() {
      return this.subRoutes.map(route => {
        route.link = `/companies/${this.companyName}/${route.component}`;
        return route;
      });
    },
    company() {
      return this.$store.state.company.data;
    },
    topMetrics() {
      return this.company.business.topMetrics.map(metric => {
        metric.label = metric.key.replace("_", " ");
        metric.icon = PropIcons.get(metric.key);
        return metric;
      });
    }
  },
  data: function() {
    return {
      companyName: this.$route.params.companies,
      subRoutes: [
        {
          label: "Technical Stack",
          component: ""
        },
        {
          label: "HR Profile",
          component: "hr"
        },
        {
          label: "Business Profile",
          component: "business",
          disabled: true
        },
        {
          label: "News",
          component: "news",
          disabled: true
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.coming-soon
    position: relative
    &:before
        display: block
        content: ''
        width: 100%
        height: 100%
        position: absolute
        background: rgba(255,255,255,.8)
        z-index: 2
    &:after
        display: block
        content: ''
        width: 100%
        height: 100%
        position: absolute
        content: 'Coming Soon'
        font-size: 48px
        font-weight: 500
        color: #333
        text-align: center
        top: 150px
        z-index: 2

</style>
