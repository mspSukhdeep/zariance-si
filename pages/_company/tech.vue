<template>
    <div>
        <TechRow v-for="(techRow, index) in techStackCollection" :key="index" :tech="techRow" />
    </div>
</template>

<script>
import TechRow from '~/components/TechRow';

export default {
  name: "TechStackPage",
  components: {
      TechRow
  },
  data: function(){
      return {
          techStackCollection: [
              {
                  color: "#128ff2",
                  name: "Google Publisher Tag",
                  image: "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
                  description: "Google Publisher Tag (GPT) is an ad tagging library with which you can dynamically build ad requests. GPT takes key details from you such as ad unit name, ad size, and custom targeting, builds the request, and displays the ad on web pages or mobile apps.",
                  events: [
                      {
                          key: "First Activated",
                          value: "April 2014",
                          position: "0"
                      },
                      {
                          key: "Current Status",
                          value: "Active",
                          position: "calc(100% - 12px)"
                      }
                  ]
              },
              {
                  color: "#f7941d",
                  name: "OpenX",
                  image: "https://logo.clearbit.com/openx.com",
                  description: `OpenX, legally known as OpenX Software Ltd., is a programmatic advertising technology company. The company has developed an integrated technology platform that combines ad server and a real-time bidding exchange with a standard supply-side platform ensuring the highest real-time value for any trade.`,
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
                          key: "Current Status",
                          value: "Inactive",
                          position: "calc(100% - 12px)"
                      }
                  ]
              },
              {
                  color: "#144b93",
                  name: "Taboola",
                  image: "https://logo.clearbit.com/taboola.com",
                  description: `Taboola is a content marketing platform that provides a web widget to content creators on their website to show "Content You May Like" that includes links to related articles, videos, and slideshows, both from within the site and from other publishers.`,
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
                          key: "Current Status",
                          value: "Active",
                          position: "calc(100% - 12px)"
                      }
                  ]
              }
          ]
      }
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
        padding: 20px 170px 65px 180px
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
                left: -55px
                width: 120px
                font-size: 12px
                text-align: center
            &-title
                font-weight: 500
    & + &
        border-top: 1px solid #dfe1e8
</style>
