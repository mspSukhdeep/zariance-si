<template>
  <div class="field">
    <div class="control has-icons-right">
      <input class="input" type="text" placeholder="Search Company here" 
        v-model="value" 
        v-on:focus="onFocus=true" 
        v-on:blur="onInputBlur()" 
        v-on:keyup.down="changeSelectedSuggestion(true)" 
        v-on:keyup.up="changeSelectedSuggestion()" 
      />
      <span class="icon is-small is-right">
        <i class="material-icons md-24">search</i>
      </span>
    </div>
    <ul class="field__suggestions" v-if="showAutocomplete">
        <router-link 
            tag="li" 
            :to="company.link" 
            class="field__suggestions-item" 
            :class="{'field__suggestions-item--active': suggestionActiveIndex===index}" 
            v-for="(company, index) in suggestions" 
            :key="index"
            @click="navgateToComanyPage">
            <img class="field__suggestions-item__icon" :src="company.logo">
            {{company.name}}
            <span class="field__suggestions-item__sub">
                {{company.employees}} Employees
            </span>
        </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Search",
  computed: {
      showAutocomplete: function(){
          return (this.value.length>=2 && this.onFocus)
      }
  },
  data: function(){
      return {
          value: '',
          onFocus: false,
          suggestionActiveIndex: -1,
          suggestions: [
            {
                  name: "Microsoft",
                  logo: "https://cdn0.iconfinder.com/data/icons/shift-free/32/Microsoft-512.png",
                  link: "/microsoft",
                  employees: 30000
            },
            {
                  name: "Google",
                  logo: "https://image.flaticon.com/teams/slug/google.jpg",
                  link: "/google-corporation",
                  employees: 45000
            },
            {
                  name: "MySmartPrice",
                  logo: "https://cdn.cybrhome.com/media/website/live/icon/icon_mysmartprice.com_bot_d770aa.png",
                  link: "/mysmartprice",
                  employees: 200
            },
            {
                  name: "Zariance",
                  logo: "https://assets.mspimages.in/zariance/logo/tools.png",
                  link: "/zariance",
                  employees: 40
            }
          ]
      }
  },
  methods: {
      getSuggestions: function(){
          debugger;
          if(this.value.length>2){
              this.showAutocomplete = true
          }
      },
      changeSelectedSuggestion(asc){
          if(asc){
              this.suggestionActiveIndex = this.suggestionActiveIndex<this.suggestions.length-1?this.suggestionActiveIndex+1:0;
          }
          else{
              this.suggestionActiveIndex = this.suggestionActiveIndex>0?this.suggestionActiveIndex-1:this.suggestions.length-1;
          }
      },
      onInputBlur(){
          setTimeout(()=>{
              this.onFocus = false
          },200);
      }
  }
};
</script>
<style lang="sass">
$color-border: #dfe1e8

.field
    position: relative
    &__suggestions
        position: absolute
        background: #fff
        width: 100%
        text-align: left
        border: 1px solid $color-border
        color: #111
        transition: .2s ease-in-out
        &-item
            list-style-type: none
            padding: 10px
            line-height: 24px
            font-size: 18px
            &:hover
                background-color: #eee
                cursor: pointer
            &--active
                background-color: #eee
                cursor: pointer
            &__icon
                width: 24px
                height: 24px
                margin-right: 10px
                vertical-align: -5px
            &__sub
                font-size: 14px
                font-weight: 600
                margin-left: 20px
                float: right
                color: #666
            & + &
                // border-top: 1px solid $color-border
</style>
