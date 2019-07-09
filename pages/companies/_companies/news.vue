<template>
  <div class="columns">
    <div class="column is-3">
      <CategoryNavigation v-for="(navItem, index) in categories" :key="index" :nav="navItem"/>
    </div>
    <div class="column is-9">
      <NewsArticle v-for="(article, index) in articles" :key="index" :article="article"/>
    </div>
  </div>
</template>

<script>
import NewsArticle from "~/components/NewsArticle";
import CategoryNavigation from "~/components/CategoryNavigation";

export default {
  name: "NewsPage",
  components: {
    NewsArticle,
    CategoryNavigation
  },
  data: function() {
    return {
      categories: [
        {
          label: "Recent",
          link: "",
          icon: {
            type: "material",
            name: "home",
            class: "nav-item__icon",
            namespace: ""
          },
          isActive: true
        },
        {
          label: "Funding / Investment / IPO",
          link: "",
          icon: {
            type: "fontawesome",
            name: "hand-holding-usd",
            class: "nav-item__icon",
            namespace: "fas"
          },
        },
        {
          label: "HR News",
          link: "",
          icon: {
            type: "material",
            name: "group",
            class: "nav-item__icon",
            namespace: ""
          }
        },
        {
          label: "Merger / Acquisition",
          link: "",
          icon: {
            type: "material",
            name: "call_merge",
            class: "nav-item__icon",
            namespace: ""
          }
        },
        {
          label: "Business metrics",
          link: "",
          icon: {
            type: "material",
            name: "pie_chart",
            class: "nav-item__icon",
            namespace: ""
          },
        },
        {
          label: "New Products",
          link: "",
          icon: {
            type: "material",
            name: "new_releases",
            class: "nav-item__icon",
            namespace: ""
          },
        },
        {
          label: "Press Release",
          link: "",
          icon: {
            type: "material",
            name: "speaker_notes",
            class: "nav-item__icon",
            namespace: ""
          },
        }
      ],
      articles: [
        {
          title:
            "Google Accused of Unlawfully Copying Song Lyrics From Genius.com",
          image:
            "https://i.gadgets360cdn.com/large/google_reuters_full_1560753758572.JPG?output-quality=80&output-format=webp",
          link:
            "https://gadgets.ndtv.com/internet/news/google-genius-sony-lyrics-copying-accusations-2054443",
          source: "Indo-Asian News Service",
          updated: "17 June 2019",
          description: `Genius used a series of alternating straight and curved apostrophes in its lyrics to form a type of watermark. "The company has shown Google irrefutable evidence again and again that they are displaying lyrics copied from Genius in their Lyrics OneBox. This is a serious issue and Google needs to address it,"`
        },
        {
          title: "Microsoft Just Dealt A Blow To Google's Ad Blocking Plans",
          image:
            "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F920623534%2F960x0.jpg%3Ffit%3Dscale",
          link:
            "https://www.forbes.com/sites/kateoflahertyuk/2019/06/16/microsoft-just-dealt-a-blow-to-googles-ad-blocking-plans/#2950b78516ff",
          source: "Forbes",
          updated: "16 June 2019",
          description: ` Google’s plans to restrict modern ad blocking Chrome extensions to enterprise users only. Despite a backlash to the original announcement, the software giant is not backing down. Microsoft released its first preview builds of the next version of Microsoft Edge, which is now built on the Chromium open source project.`
        },
        {
          title:
            "Google Accused of Unlawfully Copying Song Lyrics From Genius.com",
          image:
            "https://i.gadgets360cdn.com/large/google_reuters_full_1560753758572.JPG?output-quality=80&output-format=webp",
          link:
            "https://gadgets.ndtv.com/internet/news/google-genius-sony-lyrics-copying-accusations-2054443",
          source: "Indo-Asian News Service",
          updated: "17 June 2019",
          description: `Genius used a series of alternating straight and curved apostrophes in its lyrics to form a type of watermark. "The company has shown Google irrefutable evidence again and again that they are displaying lyrics copied from Genius in their Lyrics OneBox. This is a serious issue and Google needs to address it,"`
        },
        {
          title: "Microsoft Just Dealt A Blow To Google's Ad Blocking Plans",
          image:
            "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F920623534%2F960x0.jpg%3Ffit%3Dscale",
          link:
            "https://www.forbes.com/sites/kateoflahertyuk/2019/06/16/microsoft-just-dealt-a-blow-to-googles-ad-blocking-plans/#2950b78516ff",
          source: "Forbes",
          updated: "16 June 2019",
          description: ` Google’s plans to restrict modern ad blocking Chrome extensions to enterprise users only. Despite a backlash to the original announcement, the software giant is not backing down. Microsoft released its first preview builds of the next version of Microsoft Edge, which is now built on the Chromium open source project.`
        }
      ]
    };
  }
};
</script>

<style>
</style>
