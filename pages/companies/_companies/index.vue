<template>
  <div class="columns">
    <div class="column is-3">
      <CategoryNavigation v-for="(navItem, index) in categories" :key="index" :nav="navItem" />
    </div>
    <div class="column is-9">
      <TechRow v-for="(techRow, index) in company.tech.softwares" :key="index" :tech="techRow" />
    </div>
  </div>
</template>

<script>
import TechRow from "~/components/TechRow";
import CategoryNavigation from "~/components/CategoryNavigation";
import _ from "lodash";

let CategoryIcon = {
  iconSet: {
    analytics: {
      type: "material",
      name: "home",
      class: "nav-item__icon",
      namespace: ""
    },
    ads: {
      type: "fontawesome",
      name: "ad",
      class: "nav-item__icon",
      namespace: "fas"
    },
    default: {
      type: "material",
      name: "home",
      class: "nav-item__icon",
      namespace: ""
    },
    javascript: {
      type: "fontawesome",
      name: "js-square",
      class: "nav-item__icon",
      namespace: "fab"
    },
    media: {
      type: "fontawesome",
      name: "shopping-cart",
      class: "nav-item__icon",
      namespace: "fas"
    }
  },
  get: function(prop) {
    return this.iconSet[propName.toLowerCase()] || this.iconSet["default"];
  }
};
export default {
  name: "TechStackPage",
  components: {
    TechRow,
    CategoryNavigation
  },
  computed: {
    rawCategories: function() {
      let obj = this.company.tech.softwares.reduce((acc, software) => {
        software.tags.forEach(tag => {
          acc[tag.label] = tag;
        });
        return acc;
      }, {});

      return _.values(obj);
    },
    parsedCategories: function() {
      this.rawCategories.map(category => {
        category.icon = CategoryIcon.get(label);
        category.isActive = false;
        return category;
      });
    }
  },
  props: ["company"],
  methods: {},
  data: function() {
    return {
      categories: [
        {
          label: "All",
          link: "",
          icon: {
            type: "material",
            name: "home",
            class: "nav-item__icon",
            namespace: ""
          },
          isActive: true
        },
        // {
        //   label: "Advertising",
        //   link: "",
        //   icon: {
        //     type: "fontawesome",
        //     name: "ad",
        //     class: "nav-item__icon",
        //     namespace: "fas"
        //   }
        // },
        // {
        //   label: "Marketing",
        //   link: "",
        //   icon: {
        //     type: "fontawesome",
        //     name: "bullhorn",
        //     class: "nav-item__icon",
        //     namespace: "fas"
        //   }
        // },
        // {
        //   label: "Ecommerce",
        //   link: "",
        //   icon: {
        //     type: "fontawesome",
        //     name: "shopping-cart",
        //     class: "nav-item__icon",
        //     namespace: "fas"
        //   }
        // },
        // {
        //   label: "JavaScript",
        //   link: "",
        //   icon: {
        //     type: "fontawesome",
        //     name: "js-square",
        //     class: "nav-item__icon",
        //     namespace: "fab"
        //   }
        // },
        // {
        //   label: "Social",
        //   link: "",
        //   icon: {
        //     type: "fontawesome",
        //     name: "icons",
        //     class: "nav-item__icon",
        //     namespace: "fas"
        //   }
        // },
        // {
        //   label: "Mobile",
        //   link: "",
        //   icon: {
        //     type: "fontawesome",
        //     name: "mobile-alt",
        //     class: "nav-item__icon",
        //     namespace: "fas"
        //   }
        // },
        // {
        //   label: "Content Delivery Network",
        //   link: "",
        //   icon: {
        //     type: "fontawesome",
        //     name: "keycdn",
        //     class: "nav-item__icon",
        //     namespace: "fab"
        //   }
        // }
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
            background-color: #fafafa
            position: relative
            height: 80px
            margin: 12px 0
            &-inr
                position: absolute
                width: 54px
                height: 54px
                background: #fff
                display: block
                top: 50%
                left: 50%
                border-radius: 50%
                transform: translate(-50%, -50%)
                overflow: hidden
                .fallback-icon
                  transform: scale(1.28)
                  transform-origin: 0 0
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
