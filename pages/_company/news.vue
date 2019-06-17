<template>
    <div class="columns">
        <div class="column is-3">
            <NewsNavigation v-for="(navItem, index) in categories" :key="index" :nav="navItem" />
        </div>
        <div class="column is-9">
            <NewsArticle v-for="(article, index) in articles" :key="index" :article="article" />
        </div>
    </div>
</template>

<script>
import NewsArticle from '~/components/NewsArticle';
import NewsNavigation from '~/components/NewsNavigation';
export default {
    name: 'NewsPage',
    components: {
        NewsArticle,
        NewsNavigation
    },
    data: function(){
        return {
            categories: [
                {
                    label: "Home",
                    link: "",
                    icon: `<i class="nav-item__icon material-icons md-24">home</i>`,
                    isActive: true
                },
                {
                    label: "Funding / Investment / IPO",
                    link: "",
                    icon: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z" />
                            </svg>`
                },
                // {
                //     label: "Legal",
                //     link: "",
                //     icon: ""
                // },
                {
                    label: "HR News",
                    link: "",
                    icon: `<i class="nav-item__icon material-icons md-24">group</i>`
                },
                {
                    label: "Merger / Acquisition",
                    link: "",
                    icon: `<i class="nav-item__icon material-icons md-24">call_merge</i>`
                },
                {
                    label: "Business metrics",
                    link: "",
                    icon: `<i class="nav-item__icon material-icons md-24">pie_chart</i>`
                },
                {
                    label: "New Products",
                    link: "",
                    icon: `<i class="nav-item__icon material-icons md-24">new_releases</i>`
                },
                {
                    label: "Press Release",
                    link: "",
                    icon: `<i class="nav-item__icon material-icons md-24">speaker_notes</i>`
                },
                // {
                //     label: "Patent",
                //     link: "",
                //     icon: ""
                // }
                ],
            articles: [
                {
                    title: "Google Accused of Unlawfully Copying Song Lyrics From Genius.com",
                    image: "https://i.gadgets360cdn.com/large/google_reuters_full_1560753758572.JPG?output-quality=80&output-format=webp",
                    link: "https://gadgets.ndtv.com/internet/news/google-genius-sony-lyrics-copying-accusations-2054443",
                    source: "Indo-Asian News Service",
                    updated: "17 June 2019",
                    description: `Genius used a series of alternating straight and curved apostrophes in its lyrics to form a type of watermark. "The company has shown Google irrefutable evidence again and again that they are displaying lyrics copied from Genius in their Lyrics OneBox. This is a serious issue and Google needs to address it,"`
                },
                {
                    title: "Microsoft Just Dealt A Blow To Google's Ad Blocking Plans",
                    image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F920623534%2F960x0.jpg%3Ffit%3Dscale",
                    link: "https://www.forbes.com/sites/kateoflahertyuk/2019/06/16/microsoft-just-dealt-a-blow-to-googles-ad-blocking-plans/#2950b78516ff",
                    source: "Forbes",
                    updated: "16 June 2019",
                    description: ` Google’s plans to restrict modern ad blocking Chrome extensions to enterprise users only. Despite a backlash to the original announcement, the software giant is not backing down. Microsoft released its first preview builds of the next version of Microsoft Edge, which is now built on the Chromium open source project.`
                },
                {
                    title: "Google Accused of Unlawfully Copying Song Lyrics From Genius.com",
                    image: "https://i.gadgets360cdn.com/large/google_reuters_full_1560753758572.JPG?output-quality=80&output-format=webp",
                    link: "https://gadgets.ndtv.com/internet/news/google-genius-sony-lyrics-copying-accusations-2054443",
                    source: "Indo-Asian News Service",
                    updated: "17 June 2019",
                    description: `Genius used a series of alternating straight and curved apostrophes in its lyrics to form a type of watermark. "The company has shown Google irrefutable evidence again and again that they are displaying lyrics copied from Genius in their Lyrics OneBox. This is a serious issue and Google needs to address it,"`
                },
                {
                    title: "Microsoft Just Dealt A Blow To Google's Ad Blocking Plans",
                    image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F920623534%2F960x0.jpg%3Ffit%3Dscale",
                    link: "https://www.forbes.com/sites/kateoflahertyuk/2019/06/16/microsoft-just-dealt-a-blow-to-googles-ad-blocking-plans/#2950b78516ff",
                    source: "Forbes",
                    updated: "16 June 2019",
                    description: ` Google’s plans to restrict modern ad blocking Chrome extensions to enterprise users only. Despite a backlash to the original announcement, the software giant is not backing down. Microsoft released its first preview builds of the next version of Microsoft Edge, which is now built on the Chromium open source project.`
                }
            ]
        }
    }
}
</script>

<style>

</style>
