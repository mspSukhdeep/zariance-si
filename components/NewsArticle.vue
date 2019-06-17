<template>
    <article class="news columns">
        <a class="news__img-wrpr column is-3" :href="article.link">
            <img class="news__img" :src="article.image" />
        </a>
        <div class="news__info column is-9">
            <a class="news__title" :href="article.link">
                {{article.title}}
            </a>
            <div class="news__attrib">
                <a class="news__attrib-item news__attrib-item--link" :href="article.link">
                    {{article.source}}
                </a>
                <span class="news__attrib-item">
                    Updated: {{article.updated}}
                </span>
            </div>
            <div class="news__description">
                {{article.description}}
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'NewsArticle',
    props: ['article']
}
</script>

<style lang="sass">
.news
    padding: 10px 0
    &__img
        &-wrpr
            display: block
            // height: 180px
            overflow: hidden
    &__title
        font-size: 20px
        font-weight: 600
        margin-top: -5px
        color: #111
        display: inline-block
    &__attrib
        font-size: 14px
        &-item
            display: inline-block
            &--link
                font-weight: 500
                display: inline-block
            & + &
                margin-left: 5px
    &__description
        margin-top: 8px
    & + &
        border-top: 1px solid #dfe1e8

</style>
