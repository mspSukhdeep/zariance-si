<template>
  <div class="columns">
    <div class="column is-3">
      <CategoryNavigation v-for="(navItem, index) in categories" :key="index" :nav="navItem"/>
    </div>
    <div class="column is-9">
      <TechRow
        v-for="(techRow, index) in repeatArray(techStackCollection, 10)"
        :key="index"
        :tech="techRow"
      />
    </div>
  </div>
</template>

<script>
import TechRow from "~/components/TechRow";
import CategoryNavigation from "~/components/CategoryNavigation";

export default {
  name: "TechStackPage",
  components: {
    TechRow,
    CategoryNavigation
  },
  methods: {
    repeatArray: function(arr, n) {
      let result = [];
      for (let i = 0; i < n; i++) {
        result.push(...arr);
      }
      return result;
    }
  },
  data: function() {
    return {
      categories: [
        {
          label: "Analytics & Tracking",
          link: "",
          icon: {
            type: "material",
            name: "home",
            class: "nav-item__icon",
            namespace: ""
          },
          isActive: true
        },
        {
          label: "Advertising",
          link: "",
          icon: {
            type: "fontawesome",
            name: "ad",
            class: "nav-item__icon",
            namespace: "fas"
          }
        },
        {
          label: "Marketing",
          link: "",
          icon: {
            type: "fontawesome",
            name: "bullhorn",
            class: "nav-item__icon",
            namespace: "fas"
          }
        },
        {
          label: "Ecommerce",
          link: "",
          icon: {
            type: "fontawesome",
            name: "shopping-cart",
            class: "nav-item__icon",
            namespace: "fas"
          }
        },
        {
          label: "JavaScript",
          link: "",
          icon: {
            type: "fontawesome",
            name: "js-square",
            class: "nav-item__icon",
            namespace: "fab"
          }
        },
        {
          label: "Social",
          link: "",
          icon: {
            type: "fontawesome",
            name: "icons",
            class: "nav-item__icon",
            namespace: "fas"
          }
        },
        {
          label: "Mobile",
          link: "",
          icon: {
            type: "fontawesome",
            name: "mobile-alt",
            class: "nav-item__icon",
            namespace: "fas"
          }
        },
        {
          label: "Content Delivery Network",
          link: "",
          icon: {
            type: "fontawesome",
            name: "keycdn",
            class: "nav-item__icon",
            namespace: "fab"
          }
        }
      ],
      techStackCollection: [
        {
          color: "#128ff2",
          name: "Google Publisher Tag",
          image:
            "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
          description:
            "Google Publisher Tag (GPT) is an ad tagging library with which you can dynamically build ad requests.",
          events: [
            {
              key: "First Activated",
              value: "April 2014",
              position: "0"
            },
            {
              key: "Active",
              value: "Current Status",
              position: "calc(100% - 12px)"
            }
          ]
        },
        {
          color: "#f7941d",
          name: "OpenX",
          image: "https://logo.clearbit.com/openx.com",
          description: `OpenX is an integrated technology platform that combines ad server and a real-time bidding exchange with a standard supply-side platform.`,
          events: [
            {
              key: "First Activated",
              value: "September 2017",
              position: "0"
            },
            {
              key: "De-activated",
              value: "March 2018",
              position: "45%"
            },
            {
              key: "Inactive",
              value: "Current Status",
              position: "calc(100% - 12px)"
            }
          ]
        },
        {
          color: "#144b93",
          name: "Taboola",
          image: "https://logo.clearbit.com/taboola.com",
          description: `Taboola is a content marketing platform that provides a web widget to content creators on their website to show related ads.`,
          events: [
            {
              key: "First Activated",
              value: "July 2015",
              position: "0"
            },
            {
              key: "De-activated",
              value: "February 2017",
              position: "45%"
            },
            {
              key: "Re-activated",
              value: "Novemeber 2018",
              position: "75%"
            },
            {
              key: "Active",
              value: "Current Status",
              position: "calc(100% - 12px)"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="sass">
$box-shadow: 0 1px 6px 1px rgba(92,78,62,.28)

.tech
    padding: 15px 0
    overflow: hidden
    &__img
        max-height: 80%
        max-width: 80%
        top: 50%
        left: 50%
        position: absolute
        transform: translate(-50%, -50%)
        &-wrpr
            background-color: #128ff2
            position: relative
            height: 135px
            margin: 12px 0
            &-inr
                position: absolute
                width: 80px
                height: 80px
                background: #fff
                display: block
                top: 50%
                left: 50%
                border-radius: 50%
                transform: translate(-50%, -50%)
                overflow: hidden
    &__info
        padding-left: 22px

    &__name
        font-size: 20px
        font-weight: 500
        margin-bottom: 5px
    &__description
        color: #444
        font-weight: 300
        font-size: 14px
    &__timeline
        padding: 20px 70px 65px 70px
        &-inr
            height: 4px
            background: #128ff2
            border-radius: 3px
            position: relative
        &-event
            background: inherit
            height: 12px
            width: 12px
            border-radius: 50%
            top: 50%
            transform: translateY(-50%)
            position: absolute
            z-index: 2
            box-shadow: $box-shadow
            &:after
                content: ''
                position: absolute
                background: #fff
                width: 6px
                height: 6px
                border-radius: 50%
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
            &-info
                position: absolute
                background: #fff
                top: 22px
                left: -45px
                width: 100px
                font-size: 12px
                text-align: center
            &-title
                font-weight: 500
    & + &
        border-top: 1px solid #dfe1e8
.nav
    &-item__icon
        font-size: 24px
        line-height: 1
</style>
