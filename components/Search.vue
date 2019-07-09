<template>
  <div
    class="field search-field"
    :class="{'search-field--expanded': isExpanded, 'search-field--inprogress':requestInProgress}"
    @keydown.esc="isExpanded=false"
  >
    <div class="search-field__inr">
      <div
        class="search-field__inr control"
        :class="{'has-icons-left': isExpanded, 'has-icons-right': !isExpanded}"
      >
        <input
          class="input"
          type="text"
          placeholder="Search Company here"
          v-model="searchTerm"
          v-on:focus="isExpanded=true"
          v-on:input="makeSearchRequest"
          @click="isExpanded=true"
          v-on:blur="onInputBlur()"
          v-on:keyup.down="changeSelectedSuggestion(true)"
          v-on:keyup.up="changeSelectedSuggestion()"
          v-on:keyup.enter="openSelectedOption"
        />
        <Loader v-if="requestInProgress" />
        <span
          class="icon is-small is-left"
          :class="{'is-left': isExpanded, 'is-right': !isExpanded}"
        >
          <i class="material-icons md-24">search</i>
        </span>
      </div>
      <div class="field__suggestions" v-if="true || showAutocomplete">
        <template v-for="(key, index) in Object.keys(suggestions)">
          <div
            class="field__suggestions-category column is-6"
            v-if="suggestions[key].length>0"
            :key="index"
          >
            <div class="field__head">{{key}}</div>
            <router-link
              tag="li"
              :to="item.link || '/'"
              class="field__suggestions-item"
              :class="{'field__suggestions-item--active': (suggestionActiveIndex==index && suggestionActiveSubIndex===index2)}"
              v-for="(item, index2) in suggestions[key]"
              :key="index2"
            >
              <Icon :icon="locationIcon" v-if="key==='geography'" />
              <img v-else-if="item.image" class="field__suggestions-item__icon" :src="item.image" />
              <FallbackIcon v-else :chars="item.name" />
              <div class="field__suggestions-item__data">
                <div class="field__suggestions-item__name">{{item.name}}</div>
                <div class="field__suggestions-item__sub">{{item.count}} companies</div>
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
    <i class="search-field__icon material-icons md-30" @click="isExpanded=false">close</i>
  </div>
</template>
<script>
import axios from "axios";
import Icon from "./Icon";
import FallbackIcon from "./FallbackIcon";
import Loader from "./Loader";

const _ = require("lodash");

export default {
  name: "Search",
  components: {
    Icon,
    FallbackIcon,
    Loader
  },
  computed: {
    showAutocomplete: function() {
      return this.searchTerm.length >= 2 && this.onFocus;
    },
    suggestionCategories: function() {
      return Object.keys(this.suggestions);
    },
    currentCategory: function() {
      return this.suggestions[
        this.suggestionCategories[this.suggestionActiveIndex]
      ];
    }
  },
  data: function() {
    return {
      suggestions: {},
      isExpanded: false,
      locationIcon: {
        type: "fontawesome",
        name: "map-marked-alt",
        class: "location-icon",
        namespace: "fas"
      },
      searchTerm: "",
      onFocus: false,
      suggestionActiveIndex: 0,
      suggestionActiveSubIndex: -1,
      searchItems: {
        companies: []
      },
      requestInProgress: false
    };
  },
  methods: {
    makeSearchRequest: _.debounce(function(e) {
      this.requestInProgress = true;
      axios
        .get(
          `https://www.zariance.com/api/autosuggest.php?term=${this.searchTerm.toLowerCase()}`
        )
        .then(response => {
          this.requestInProgress = false;
          this.suggestions = response.data;
        });
    }, 500),
    openSelectedOption: function() {
      const selectedItem = this.currentCategory[this.suggestionActiveSubIndex];
      this.$router.push(`/search/${selectedItem.link}`);
    },
    getSuggestions: function() {
      if (this.searchTerm.length > 2) {
        this.showAutocomplete = true;
      }
    },
    changeSelectedSuggestion(asc) {
      if (asc) {
        const currentCategorySize = this.currentCategory.length,
          totalCategories = this.suggestionCategories.length;

        if (this.suggestionActiveSubIndex < currentCategorySize - 1) {
          this.suggestionActiveSubIndex++;
        } else if (this.suggestionActiveIndex < totalCategories - 1) {
          this.suggestionActiveIndex++;
          this.suggestionActiveSubIndex = 0;
        } else {
          this.suggestionActiveIndex = 0;
          this.suggestionActiveSubIndex = 0;
        }
      }
    },
    onInputBlur() {
      setTimeout(() => {
        this.onFocus = false;
      }, 200);
    }
  },
  created() {
    axios.get(`/si/search.json`).then(response => {
      this.searchItems = response.data;
    });
  }
};
</script>
<style lang="sass">
$color-border: #dfe1e8

.field
    position: relative
    &__head
        // background-color: #f2f3f5
        font-weight: 600
        font-size: 18px


        padding: 10px
        text-transform: capitalize
    &__suggestions
        display: none
        box-sizing: border-box
        margin-top: 10px
        background: #fff
        width: 100%
        text-align: left
        color: #111
        transition: .2s ease-in-out
        &-category
          padding: 12px 30px
        &-item
            list-style-type: none
            padding: 10px
            line-height: 24px
            &:hover
                background-color: #eee
                cursor: pointer
            &__data
              display: inline-block
              vertical-align: middle
            &--active
                background-color: #eee
                cursor: pointer
            &__icon
                width: 48px
                height: 48px
                margin-right: 10px
                vertical-align: -5px
                vertical-align: middle
            &__sub
                font-size: 14px
                font-weight: 600
                color: #666
            & + &
                // border-top: 1px solid $color-border
.location
    &-icon
        color: rgb(0, 135, 122)
        vertical-align: middle
        position: relative
        top: -1px
        margin-right: 10px
        font-size: 48px

.search-field
    width: 500px
    &__icon
      display: none
    &__inr
      position: relative
      box-sizing: border-box
    .input
      padding: 9px 42px 9px 12px
      height: 42px
    .control.has-icons-right .icon
      height: 42px
    &--expanded
        position: fixed
        z-index: 2
        width: 100%
        height: 100%
        background-color: #fff
        top: 0
        left: 0
        padding: 30px
        .search-field
          &__icon
            display: block
            position: absolute
            top: 15px
            right: 15px
            font-size: 32px
            cursor: pointer
        .input
            border: 0
            border-bottom: 1px solid #dfe1e8
            font-size: 24px
            box-shadow: none
            &:active
              box-shadow: none
        .icon
          margin: 2px 0
          .material-icons
            font-size: 36px
        .field
          &__suggestions
            display: flex
    &-inprogress
      .input
        border-bottom: 0
</style>
