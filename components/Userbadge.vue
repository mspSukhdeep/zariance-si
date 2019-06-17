<template>
  <a target="_blank" :href="person.link" class="user">
    <div class="user__img-wrapper">
      <img
        class="user__img"
        :src="person.image"
      >
    </div>
    <div class="user__info">
      <div class="user__name">
          {{person.name}}
      </div>
      <div class="user__position">
          {{person.position}}
      </div>
    </div>
    <span class="user__link icon is-small is-right">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" />
    </span>
  </a>
</template>

<script>
export default {
  name: "UserBadge",
  props: ["person"]
};
</script>

<style lang="sass">
$box-shadow: 0 1px 6px 1px rgba(92,78,62,.28)

.user
    display: flex
    padding: 15px 15px
    align-items: center
    position: relative  
    &__img
        max-width: 100%
        max-height: 100%
        &-wrapper
            width: 60px
            height: 60px
            border-radius: 50%
            overflow: hidden
            box-shadow: $box-shadow
            text-align: center
            background: #fff
    &__info
        margin-left: 15px
    &__name
        font-size: 18px
        font-weight: 300
    &__position
        font-weight: 500
    &__link
        position: absolute
        right: 10px
    &:hover
        cursor: pointer
        background: rgba(0, 78, 182, .05)
        color: #111
        .user
            &__link
                color: #1973e7
</style>