<template>
    <nuxt-link class="nav-item" :class="{'nav-item--active': nav.isActive}" :to="nav.link">
        <div class="nav-item__icon">
            <Icon :icon="nav.icon" />
        </div>
        <span class="nav-item__label">
            {{nav.label}}
        </span>
    </nuxt-link>
</template>

<script>
import Icon from './Icon';

export default {
    name: 'CategoryNavigation',
    props: ['nav'],
    components: {
        Icon
    }
}
</script>

<style lang="sass">
.nav
    &-item
        padding: 10px
        display: block
        svg
            fill: #444
        &:hover
            svg
                fill: #3273dc
        &__label
            display: inline-block
            vertical-align: middle
        &__icon
            display: inline-block
            vertical-align: middle
            margin-right: 3px
        
        &--active
            background-color: rgba(50, 115, 220, 0.10)
            border-radius: 0 25px 25px 0
            font-weight: 500
            color: #111
            svg
                fill: #111
        & + &
            margin-top: 5px


</style>
