<template>
    <div class="widget">
        <div class="widget-head columns">
            <div class="widget-col column is-6">
                {{data.attributes[0].label}}
            </div>
            <div class="widget-col column is-6 has-text-right">
                {{data.attributes[1].label}}
            </div>
        </div>
        <div class="widget-body">
            <div class="widget__row columns" v-for="(item, index) in data.rows" :key="index">
                <div class="widget-col column is-6">
                    {{item[data.attributes[0].selector]}}
                </div>
                <div class="widget-col column is-6 has-text-right">
                    {{item[data.attributes[1].selector]}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmployeeLocationWidget',
    props: ['data']
}
</script>

<style lang="sass">
.widget
    border: 1px solid #dfe1e8
    border-radius: 5px
    padding: 12px
    font-size: 14px
    &-head
        font-weight: 500
        color: #111
        background-color: #fafafa
        border-radius: 5px 5px 0 0
    .column
            padding: 8px 10px
    & + &
        margin-top: 30px
</style>
