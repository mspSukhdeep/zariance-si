<template>
  <div class="company-head columns">
    <div class="column is-1">
      <img
        class="company-head__img"
        src="https://logo.clearbit.com/taboola.com"
      >
    </div>
    <div class="column is-8">
      <div class="company-head__name">Taboola</div>
      <div class="company-head__domain">Targeted Advertising Service</div>
      <div
        class="company-head__description"
      >
      Taboola is a content marketing platform that provides a web widget to content creators on their website to show related ads.
      </div>
    </div>
    <div class="column is-3">
      <div class="company-head__info-wrapper">
        <a class="company-head__info" target="_blank" href="https://www.microsoft.com/">
          <span class="icon is-small is-left">
            <i class="material-icons md-24">link</i>
          </span>
          <span class="company-head__info-val">www.taboola.com</span>
        </a>
        <div class="company-head__info" target="_blank">
          <span class="icon is-small is-left">
                <Icon :icon="{'type': 'material', 'name': 'get_app'}" />
          </span>
          <span class="company-head__info-val">100,000+ installs</span>
        </div>
        <div class="company-head__info" target="_blank">
          <span class="icon is-small is-left">
                <Icon :icon="{'type': 'material', 'name': 'attach_money'}" />
          </span>
          <span class="company-head__info-val">Subscription based</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from './Icon';

export default {
  name: "TechnologyHeader",
  components: {
    Icon
  }

};
</script>
<style lang="sass">
$color-primary: #2196f3
$color-white: #fff
$color-text-1: #111
$color-text-2: #444
$color-text-3: #666
$box-shadow: 0 1px 6px 1px rgba(92,78,62,.28)

$font-size-2xl: 22px
$font-size-s: 14px

.company
    &-head
        margin: 10px 0
        padding: 10px
        color: $color-text-1
        box-shadow: $box-shadow
        border-radius: 4px
        display: flex
        &__img
            max-height: 72px
            max-width: 72px
        &__name
            font-size: $font-size-2xl
            line-height: 1
            font-weight: 500
        &__domain
            color: $color-text-3
            font-size: $font-size-s
            margin-top: 5px
            font-weight: 300

        &__description
            margin-top: 10px
            color: $color-text-2
        
        &__info
            list-style-type: none
            display: block
            &-wrapper
                color: $color-text-2
                margin-left: 40px
            .icon
                vertical-align: middle
            &-val
                vertical-align: middle
                margin-left: 5px
            & + &
                margin-top: 5px
</style>
