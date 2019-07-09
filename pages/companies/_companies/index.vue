<template>
  <div class="overview">
    <div class="segment columns">
      <div class="metric column is-3" v-for="(metric, index) in metrics" :key="index">
        <span class="metric__icon icon is-left" :style="'color:'+metric.color" v-html="metric.icon"></span>
        <span class="metric__data">
          <span class="metric__value">{{metric.value}}</span>
          <span class="metric__key">{{metric.key}}</span>
        </span>
      </div>
    </div>

    <div class="segment columns">
      <div class="column is-9">
        <div class="segment">
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
              <div class="metric__indicator-wrapper" :class="{'metric__indicator-wrapper--red': index==2}">
                <Icon :icon="metric.icon"></Icon>
                <div class="metric__indicator-value">
                  {{ metric.change }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="segment">
          <div class="segment-title">Microsoft Funding History</div>
          <div
            class="segment-text"
          >Since Microsoft was founded in 1990, it has participated in 7 rounds of funding. In total Microsoft has raised $283.0M. Microsoft's last funding round was on Jan 2019 for a total of $34.0M</div>
          <FundingChart/>
          <div class="columns overview-graph-table">
            <div class="column is-5">
              <InvestmentChart/>
            </div>
            <div class="column is-7 overview-table-wrapper">
              <InvestmentTable/>
            </div>
          </div>
        </div>
        <div class="segment overview-competitors">
          <div class="segment-title">Aquisitions by Microsoft Corporation</div>
          <div class="segment-body">
            <AquisitionBox
              v-for="(company, index) in companyOverview.aquisitions"
              :company="company"
              :key="index"
            />
          </div>
        </div>
        <div class="segment overview-competitors">
          <div class="segment-title">Key Competitors</div>
          <div class="segment-body">
            <CompetitorBox :companies="companyOverview.competitors"/>
          </div>
        </div>
      </div>
      <div class="sidebar column is-3">
        <div class="sidebar-item">
          <div class="sidebar-item__key">Year Founded</div>
          <div class="sidebar-item__value">1987</div>
        </div>
        <div class="sidebar-item">
          <div class="sidebar-item__key">Key People</div>
          <UserBadge
            v-for="(person, index) in companyOverview.keyPeople"
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
  created() {
    
  },
  methods: {
    handleScroll(e) {
      console.log(e);
    }
  },
  data: function() {
    return {
      financeMetrics: [
        {
          key: "Revenue",
          value: "$110.84 Bn",
          icon: {
            type: 'material',
            name: 'trending_up',
            class: "metric__indicator",
          },
          change: "3.2%"
        },
        {
          key: "Operating Income",
          value: "$35.05 Bn",
          icon: {
            type: 'material',
            name: 'trending_up',
            class: "metric__indicator"
          },
          change: "1.9%"
        },
        {
          key: "Net Income",
          value: "$16.57 Bn",
          icon: {
            type: 'material',
            name: 'trending_down',
            class: "metric__indicator"
          },
          change: "-1.8%"
        },
        {
          key: "Assets",
          value: "$284.84 Bn",
          icon: {
            type: 'material',
            name: 'trending_up',
            class: "metric__indicator"
          },
          change: "4.4%"
        }
      ],
      metrics: [
        {
          key: "Website Traffic",
          value: "757.64 Mn",
          icon: `<svg style="width:24px;height:24px;transform:scale(1.25)" viewBox="0 0 24 24">
                                <path fill="#1973e7" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                            </svg>`,
          color: "#1973e7"
        },
        {
          key: "Headquarters",
          value: "Redmond, Washington",
          icon: `<i class="material-icons md-30">location_on</i>`,
          color: "#00877a"
        },
        {
          key: "Employee Count",
          value: "130,000+",
          icon: `<i class="material-icons md-30">face</i>`,
          color: "#004eb6"
        },
        {
          key: "Listing Status",
          value: "Public",
          icon: `<i class="material-icons md-30">location_city</i>`,
          color: "#f08f00"
        }
      ],
      companyOverview: {
        aquisitions: [
          {
            image:
              "https://image4.owler.com/logo/natero_owler_20180424_203359_small.png",
            name: "Natero, Inc.",
            date: "May 2019",
            amount: "undisclosed",
            description:
              "Natero develops a customer success software that offers predictive analytics, customer intelligence and workflow management solutions for businesses.",
            link: "http://google.com/aq/"
          },
          {
            image:
              "https://image4.owler.com/logo/zarget_owler_20170419_162402_large.png",
            name: "Zarget Technologies Inc.",
            date: "May 2017",
            amount: "undisclosed",
            description:
              "Zarget is a developer of a website optimization software that offers heatmaps, A/B testing, split URL testing and form analytics for businesses.",
            link: "http://google.com/aq/2"
          },
          {
            image:
              "https://image4.owler.com/logo/airwoot_owler_20160227_004619_small.png",
            name: "Airwoot Technologies Pvt. Ltd.",
            date: "Apr 2016",
            amount: "undisclosed",
            description:
              "Airwoot is a social media helpdesk system that automate the process of identifying conversations on social media that require immediate attention.",
            link: "http://google.com/aq/2"
          }
        ],
        competitors: [
          {
            company: "freshworks",
            leadership: {
              name: "Girish Mathrubootham",
              role: "Co-Founder & CEO"
            },
            ceoRating: "100/100",
            employeeCount: "2,055",
            funding: "$249M",
            revenue: "$125M"
          },
          {
            company: "happyfox",
            leadership: { name: "Shalin Jain", role: "Founder & CEO" },
            ceoRating: "42/100",
            employeeCount: "80",
            funding: "- -",
            revenue: "$5M"
          },
          {
            company: "salesforce",
            leadership: { name: "Marc Benioff", role: "Co-CEO" },
            ceoRating: "82/100",
            employeeCount: "35,000",
            funding: "$941.3M",
            revenue: "$14B"
          },
          {
            company: "kayako",
            leadership: { name: "Andy Tryba", role: "CEO" },
            ceoRating: "60/100",
            employeeCount: "108",
            funding: "- -",
            revenue: "$8M"
          },
          {
            company: "helpshift",
            leadership: { name: "Linda Crawford", role: "CEO" },
            ceoRating: "65/100",
            employeeCount: "155",
            funding: "$38.2M",
            revenue: "$5M"
          },
          {
            company: "zendesk",
            leadership: { name: "Mikkel Svane", role: "Founder & CEO" },
            ceoRating: "56/100",
            employeeCount: "2,740",
            funding: "$185.5M",
            revenue: "$650.4M"
          },
          {
            company: "topdesk",
            leadership: { name: "Wolter Smit", role: "Founder & CEO" },
            ceoRating: "86/100",
            employeeCount: "700",
            funding: "- -",
            revenue: "$46.5M"
          },
          {
            company: "zohocorp",
            leadership: { name: "Sridhar Vembu", role: "Founder & CEO" },
            ceoRating: "63/100",
            employeeCount: "7,843",
            funding: "- -",
            revenue: "$330M"
          },
          {
            company: "sugarcrm",
            leadership: { name: "Craig Charlton", role: "CEO" },
            ceoRating: "51/100",
            employeeCount: "340",
            funding: "$127.5M",
            revenue: "$106.9M"
          },
          {
            company: "teamwork",
            leadership: { name: "Peter Coppinger", role: "Co-Founder & CEO" },
            ceoRating: "89/100",
            employeeCount: "230",
            funding: "- -",
            revenue: "$20.4M"
          }
        ],
        keyPeople: [
          {
            name: "Bill Gates",
            position: "Co-Founder",
            image:
              "https://www.insidermonkey.com/blog/wp-content/uploads/2013/01/01-Bill-Gates.jpg",
            link: "https://www.linkedin.com/in/williamhgates"
          },
          {
            name: "Paul Allen",
            position: "Co-Founder",
            image:
              "https://media.licdn.com/dms/image/C4E03AQF5ktLTiMDuBQ/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=_jHuyLYGp904fS4eleATdI5GDHb2IJ_6abocydJu93c",
            link: "https://www.linkedin.com/in/williamhgates"
          },
          {
            name: "Satya Nadella",
            position: "CEO",
            image:
              "https://media.licdn.com/dms/image/C4E03AQGhU6VJLcn9xA/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=0E9d_pTkpy5S9bKVEFQtwOs8ru-lW3Wv6nA8zPAHfAc",
            link: "https://www.linkedin.com/in/satyanadela"
          },
          {
            name: "Brad Smith",
            position: "Director",
            image:
              "https://pbs.twimg.com/profile_images/675796491571560448/0EoCkMRa_400x400.jpg",
            link: "https://www.linkedin.com/in/williamhgates"
          },
          {
            name: "John W. Thompson",
            position: "Chairman",
            image:
              "data:image/jpeg;base64,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",
            link: "https://www.linkedin.com/in/satyanadela"
          }
        ]
      }
    };
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
    &__value
        display: inline-block
        width: 100%
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