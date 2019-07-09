<template>
  <div class="container">
    <TechnologyHeader/>
    <!-- <PillNavigation :route="navigation"/> -->
    <div class="columns section">
      <div class="filter column is-one-fifth">
        <div class="filter-group" v-for="(filter, index) in filters" :key="index">
          <div class="filter-title">{{filter.label}}</div>
          <div class="filter-item-wrapper">
            <label
              class="pure-material-checkbox"
              v-for="(option, index2) in filter.options"
              :key="index2"
            >
              <input type="checkbox">
              <span>{{option.label}}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="column is-three-fifth is-paddingless">
        <div class="segment-body is-marginless">
          <div class="company-item columns is-marginless" v-for="(company, index) in companies" :key="index">
            <div class="company-item__image-wrapper column is-2">
              <img :src="company.image" class="company-item__image">
            </div>
            <div class="company-item__info column is-10">
              <div class="company-item__name">{{company.name}}</div>
              <div class="company-item__description">{{company.description}}</div>
              <div class="company-item__kvp">
                <div class="company-item__kvp-key">
                    Employee count:
                    <span class="has-text-weight-medium">{{company.employees}}</span>
                </div>
                <div class="company-item__kvp-key">
                    Funding:
                    <span class="has-text-weight-medium">{{company.funding}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth sdbr">
          <div class="">
              <div>
                  125,282
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import TechnologyHeader from "~/components/TechnologyHeader.vue";
import PillNavigation from "~/components/PillNavigation.vue";
import style from "~/assets/style/index.sass";

export default {
  name: "Technology",
  components: {
    TechnologyHeader,
    PillNavigation
  },
  computed: {
    navigation() {
      return this.subRoutes.map(route => {
        route.link = `/technology/${this.$route.params.technology}/${
          route.component
        }`;
        return route;
      });
    }
  },
  data: function() {
    return {
      companies: [
        {
          image:
            "https://image4.owler.com/logo/natero_owler_20180424_203359_small.png",
          name: "Natero, Inc.",
          funding: "$10M+",
          employees: "10-100",
          description:
            "Natero develops a customer success software that offers predictive analytics, customer intelligence."
        },
        {
          image:
            "https://image4.owler.com/logo/zarget_owler_20170419_162402_large.png",
          name: "Zarget Technologies Inc.",
          funding: "NA",
          employees: "Less than 10",
          description:
            "Zarget is a developer of a website optimization software that offers heatmaps, A/B testing."
        },
        {
          image:
            "https://image4.owler.com/logo/airwoot_owler_20160227_004619_small.png",
          name: "Airwoot Technologies Pvt. Ltd.",
          funding: "$100M+",
          employees: "100-500",
          description:
            "Airwoot is a social media helpdesk system that automate the process of identifying conversations."
        },
        {
          image:
            "https://image4.owler.com/logo/natero_owler_20180424_203359_small.png",
          name: "Natero, Inc.",
          funding: "$10M+",
          employees: "10-100",
          description:
            "Natero develops a customer success software that offers predictive analytics, customer intelligence."
        },
        {
          image:
            "https://image4.owler.com/logo/zarget_owler_20170419_162402_large.png",
          name: "Zarget Technologies Inc.",
          funding: "NA",
          employees: "Less than 10",
          description:
            "Zarget is a developer of a website optimization software that offers heatmaps, A/B testing."
        },
        {
          image:
            "https://image4.owler.com/logo/airwoot_owler_20160227_004619_small.png",
          name: "Airwoot Technologies Pvt. Ltd.",
          funding: "$100M+",
          employees: "100-500",
          description:
            "Airwoot is a social media helpdesk system that automate the process of identifying conversations."
        },
        {
          image:
            "https://image4.owler.com/logo/natero_owler_20180424_203359_small.png",
          name: "Natero, Inc.",
          funding: "$10M+",
          employees: "10-100",
          description:
            "Natero develops a customer success software that offers predictive analytics, customer intelligence."
        },
        {
          image:
            "https://image4.owler.com/logo/zarget_owler_20170419_162402_large.png",
          name: "Zarget Technologies Inc.",
          funding: "NA",
          employees: "Less than 10",
          description:
            "Zarget is a developer of a website optimization software that offers heatmaps, A/B testing."
        },
        {
          image:
            "https://image4.owler.com/logo/airwoot_owler_20160227_004619_small.png",
          name: "Airwoot Technologies Pvt. Ltd.",
          funding: "$100M+",
          employees: "100-500",
          description:
            "Airwoot is a social media helpdesk system that automate the process of identifying conversations."
        },
        {
          image:
            "https://image4.owler.com/logo/natero_owler_20180424_203359_small.png",
          name: "Natero, Inc.",
          funding: "$10M+",
          employees: "10-100",
          description:
            "Natero develops a customer success software that offers predictive analytics, customer intelligence."
        },
        {
          image:
            "https://image4.owler.com/logo/zarget_owler_20170419_162402_large.png",
          name: "Zarget Technologies Inc.",
          funding: "NA",
          employees: "Less than 10",
          description:
            "Zarget is a developer of a website optimization software that offers heatmaps, A/B testing."
        },
        {
          image:
            "https://image4.owler.com/logo/airwoot_owler_20160227_004619_small.png",
          name: "Airwoot Technologies Pvt. Ltd.",
          funding: "$100M+",
          employees: "100-500",
          description:
            "Airwoot is a social media helpdesk system that automate the process of identifying conversations."
        },
        {
          image:
            "https://image4.owler.com/logo/natero_owler_20180424_203359_small.png",
          name: "Natero, Inc.",
          funding: "$10M+",
          employees: "10-100",
          description:
            "Natero develops a customer success software that offers predictive analytics, customer intelligence."
        },
        {
          image:
            "https://image4.owler.com/logo/zarget_owler_20170419_162402_large.png",
          name: "Zarget Technologies Inc.",
          funding: "NA",
          employees: "Less than 10",
          description:
            "Zarget is a developer of a website optimization software that offers heatmaps, A/B testing."
        },
        {
          image:
            "https://image4.owler.com/logo/airwoot_owler_20160227_004619_small.png",
          name: "Airwoot Technologies Pvt. Ltd.",
          funding: "$100M+",
          employees: "100-500",
          description:
            "Airwoot is a social media helpdesk system that automate the process of identifying conversations."
        }
      ],
      filters: [
        {
          name: "employee_count",
          label: "Employee Count",
          type: "checkbox",
          options: [
            {
              label: "Less than 10",
              value: "private"
            },
            {
              label: "10-100",
              value: "public"
            },
            {
              label: "100-1000",
              value: "inactive"
            },
            {
              label: "1000-10,000",
              value: "inactive"
            },
            {
              label: "10,000+",
              value: "inactive"
            }
          ]
        },
        {
          name: "revenue",
          label: "Revenue",
          type: "checkbox",
          options: [
            {
              label: "$100M+",
              value: "10000000"
            },
            {
              label: "$50M - $100M",
              value: "5000000"
            },
            {
              label: "$10M - $50M",
              value: "1000000"
            },
            {
              label: "$5M - $10M",
              value: "5000000"
            },
            {
              label: "$1M - $5M",
              value: "0"
            },
            {
              label: "Less than $1M",
              value: "0"
            }
          ]
        },

        {
          name: "funding",
          label: "Funding",
          type: "checkbox",
          options: [
            {
              label: "$100M+",
              value: "10000000"
            },
            {
              label: "$50M - $100M",
              value: "5000000"
            },
            {
              label: "$10M - $50M",
              value: "1000000"
            },
            {
              label: "$5M - $10M",
              value: "5000000"
            },
            {
              label: "$1M - $5M",
              value: "0"
            },
            {
              label: "Less than $1M",
              value: "0"
            }
          ]
        },
        {
          name: "status",
          label: "Company Status",
          type: "checkbox",
          options: [
            {
              label: "Private Ltd.",
              value: "private"
            },
            {
              label: "Publicly Listed",
              value: "public"
            },
            {
              label: "Inactive",
              value: "inactive"
            }
          ]
        },
        {
          name: "traffic_country",
          label: "Traffic from Country",
          type: "checkbox",
          options: [
            {
              label: "India",
              value: "india"
            },
            {
              label: "United States",
              value: "usa"
            },
            {
              label: "United Kingdom",
              value: "uk"
            },
            {
              label: "Canada",
              value: "canada"
            },
            {
              label: "Australia",
              value: "australia"
            }
          ]
        },
        {
          name: "headquarters",
          label: "Headquarters",
          type: "checkbox",
          options: [
            {
              label: "India",
              value: "india"
            },
            {
              label: "United States",
              value: "usa"
            },
            {
              label: "United Kingdom",
              value: "uk"
            },
            {
              label: "Canada",
              value: "canada"
            },
            {
              label: "Australia",
              value: "australia"
            }
          ]
        },
        {
          name: "monthly_traffic",
          label: "Monthly Traffic",
          type: "checkbox",
          options: [
            {
              label: "10,000,000+",
              value: "10000000"
            },
            {
              label: "5,000,000 - 10,000,000",
              value: "5000000"
            },
            {
              label: "1,000,000 - 5,000,000",
              value: "1000000"
            },
            {
              label: "500,000 - 1,000,000",
              value: "5000000"
            },
            {
              label: "Less than 500,000",
              value: "0"
            }
          ]
        },
        {
          name: "category",
          label: "Category",
          type: "checkbox",
          options: [
            {
              label: "Marketing Technology",
              value: "category_1"
            },
            {
              label: "Sales Intelligence",
              value: "category_2"
            },
            {
              label: "Manfacturing",
              value: "category_3"
            },
            {
              label: "IT Consultancy",
              value: "category_4"
            },
            {
              label: "Investment Firm",
              value: "category_5"
            },
            {
              label: "Government PSU",
              value: "category_6"
            }
          ]
        }
      ].reverse(),
      subRoutes: [
        {
          label: "Companies",
          component: ""
        },
        {
          label: "About Technology",
          component: "about"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.filter
    border-right: 1px solid #dfe1e8
    color: #444
    font-weight: 300
    &-title
        font-size: 16px
        font-weight: 500
        margin-bottom: 10px
        color: #111
    &-item
        border-left: 5px solid transparent
        padding: 5px 10px
        display: block
        & + &
            margin-top: 5px
        &:hover:not(.filter-item--active)
            border-color: rgba(26, 115, 232, .1)
        &--active
            border-color: #1a73e8
            font-weight: 500
            color: #111
    &-group
        & + &
            margin-top: 20px
    
</style>

<style>
.pure-material-checkbox {
  z-index: 0;
  position: relative;
  display: block;
  padding: 3px 0;
  color: rgba(var(--pure-material-onsurface-rgb, 68, 68, 68), 0.87);
  font-family: var(
    --pure-material-font,
    "Roboto",
    "Segoe UI",
    BlinkMacSystemFont,
    system-ui,
    -apple-system
  );
  font-size: 16px;
  line-height: 1.5;
}

/* Input */
.pure-material-checkbox > input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: -1;
  position: absolute;
  left: -10px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;
}

/* Span */
.pure-material-checkbox > span {
  display: inline-block;
  width: 100%;
  cursor: pointer;
  user-select: none;
}

/* Box */
.pure-material-checkbox > span::before {
  content: "";
  display: inline-block;
  box-sizing: border-box;
  margin: 3px 11px 3px 1px;
  border: solid 2px; /* Safari */
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  border-radius: 2px;
  width: 18px;
  height: 18px;
  vertical-align: top;
  transition: border-color 0.2s, background-color 0.2s;
}

/* Checkmark */
.pure-material-checkbox > span::after {
  content: "";
  display: block;
  position: absolute;
  top: 7px;
  left: 2px;
  width: 10px;
  height: 5px;
  border: solid 2px transparent;
  border-right: none;
  border-top: none;
  transform: translate(3px, 4px) rotate(-45deg);
}

/* Checked, Indeterminate */
.pure-material-checkbox > input:checked,
.pure-material-checkbox > input:indeterminate {
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked + span::before,
.pure-material-checkbox > input:indeterminate + span::before {
  border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked + span::after,
.pure-material-checkbox > input:indeterminate + span::after {
  border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
}

.pure-material-checkbox > input:indeterminate + span::after {
  border-left: none;
  transform: translate(4px, 3px);
}

/* Hover, Focus */
.pure-material-checkbox:hover > input {
  opacity: 0.04;
}

.pure-material-checkbox > input:focus {
  opacity: 0.12;
}

.pure-material-checkbox:hover > input:focus {
  opacity: 0.16;
}

/* Active */
.pure-material-checkbox > input:active {
  opacity: 1;
  transform: scale(0);
  transition: transform 0s, opacity 0s;
}

.pure-material-checkbox > input:active + span::before {
  border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked:active + span::before {
  border-color: transparent;
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
}

/* Disabled */
.pure-material-checkbox > input:disabled {
  opacity: 0;
}

.pure-material-checkbox > input:disabled + span {
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  cursor: initial;
}

.pure-material-checkbox > input:disabled + span::before {
  border-color: currentColor;
}

.pure-material-checkbox > input:checked:disabled + span::before,
.pure-material-checkbox > input:indeterminate:disabled + span::before {
  border-color: transparent;
  background-color: currentColor;
}
</style>

<style lang="sass">
$box-shadow: 0 1px 6px 1px rgba(92,78,62,.28)

.company-item
    border-radius: 5px
    margin: 0
    padding: 15px
    position: relative
    &__name
        font-size: 20px
        font-weight: 500
        line-height: 1
    &__date
        color: #666
        font-size: 14px
        margin-top: 8px
        font-weight: 300
    &__kvp
        color: #666
        font-size: 14px
        font-weight: 300
        margin-top: 10px
    &__description
        color: #666 
        font-weight: 300
        font-size: 14px
        margin-top: 10px
    & + &
        border-top: 1px solid #dfe1e8
.sdbr
    border-left: 1px solid #dfe1e8
</style>
