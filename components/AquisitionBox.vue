<template>
    <div class="aquisition columns is-paddingless">
        <div class="aquisition__image-wrapper column is-2">
            <img class="aquisition__image" :src="company.image" />
        </div>
        <div class="aquisition__info column is-4">
            <div class="aquisition__name">
                {{company.name}}
            </div>
            <div class="aquisition__date">
                Aquired on: <span class="has-text-weight-medium">{{company.date}}</span>
            </div>
            <div class="aquisition__amount">
                Aquired for <span class="has-text-weight-medium">{{company.amount}}</span> amount
            </div>
        </div>
        <div class="aquisition__description column is-6">
            <div class="aquisition__description-title">
                About {{company.name}}
            </div>
            {{company.description}}
        </div>
        <a target="_blank" class="aquisition__link" :href="company.link">
            <i class="material-icons md-24">link</i>
                Source
        </a>
    </div>
</template>

<script>
export default {
    name: 'AquisitionBox',
    props: ['company']
}
</script>

<style lang="sass">
$box-shadow: 0 1px 6px 1px rgba(92,78,62,.28)

.aquisition
    // box-shadow: $box-shadow
    border-radius: 5px
    margin: 0
    padding: 15px
    position: relative
    &__name
        font-size: 22px
        font-weight: 500
        line-height: 1
    &__date
        color: #666
        font-size: 14px
        margin-top: 8px
        font-weight: 300
    &__amount
        color: #666
        font-size: 14px
        margin-top: 3px
        font-weight: 300
    &__description
        color: #666
        font-weight: 300
        font-size: 14px
        // border-left: 1px solid #dfe1e8
        &-title
            font-weight: 500
            margin-bottom: 8px
            font-size: 16px
    &__link
        color: #3273dc
        position: absolute
        top: 6px
        right: 10px
        font-size: 12px
        font-weight: 500
        line-height: 24px
        i
            vertical-align: middle
                right: -2px
                position: relative
                top: -1px
        &:hover
            text-decoration: underline
    & + &
        border-top: 1px solid #dfe1e8
</style>
