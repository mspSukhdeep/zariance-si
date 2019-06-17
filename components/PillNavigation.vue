<template>
    <div class="pill-wrapper columns">
        <nuxt-link
            :to="item.link" 
            class="pill"
            :class="{'pill--active': item.isActive}"
            v-for="(item, index) in route" 
            :key="index">
            {{item.label}}
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'PillNavigation',
    props: ['route']
}
</script>

<style lang="sass">
.pill
    font-weight: 500
    padding: 6px 20px
    border-radius: 20px
    cursor: pointer
    &-wrapper
        align-items: center
        justify-content: center
        padding: 30px 0
    &:hover(:not(.pill--active))
        background-color: #fafafa
        color: #5f6368
        text-decoration: none
    &--active
        box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.15), 0 1px 2px 0 rgba(60, 64, 67, 0.3)
        color: #1a73e8
        

</style>
