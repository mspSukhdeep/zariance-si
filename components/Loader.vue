<template>
  <div class="material-progress">
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="sass">
$parent-width: 1220px

.material
    &-progress
        width: $parent-width
        height: 4px
        background-color: rgba(25, 115, 231, .2)
        border-radius: 2px
        position: relative
        overflow: hidden

        &:after
            content: ' '
            position: absolute
            width: 10%
            border-radius: 2px
            height: 4px
            background: rgb(25, 115, 231)
            left: 0
            top: 0
            display: block
            animation: ltr 1s linear infinite

@keyframes ltr
    0%
        transform: translateX(-100%) scaleX(.5)
    50%
        transform: translateX(($parent-width/3)) scaleX(4)
    100%
        transform: translateX($parent-width) scaleX(.5)

</style>
