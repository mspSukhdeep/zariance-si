<template>
    <div class="container">
        <div class="columns" style="margin-top: 100px">
            
            <div class="column is-9 search-result">
                <div class="search-result__title">
                    Search Results
                </div>
                <div class="search-result-wrapper">
                    <div class="search-result-item columns">
                        <div class="column is-2">
                            
                        </div>
                        <div class="column is-10">
                            <div class="search-result-item__title">
                                Magento
                            </div>
                            <div class="search-result-item__description">
                                Magento
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchPage'
}
</script>

<style lang="sass">
.search
    &-result
        &__title
            font-size: 18px
            font-weight: 500
            color: #111

</style>
