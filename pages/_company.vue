<template>
    <div>
        <div class="container">
            <CompanyHeader />
            <PillNavigation :route="navigation" />
            <NuxtChild :key="$route.params.company" />
        </div>
    </div>
</template>
<script>
import CompanyHeader from '~/components/CompanyHeader.vue';
import PillNavigation from '~/components/PillNavigation.vue';
import style from '~/assets/style/index.sass'

export default {
    components: {
        CompanyHeader,
        PillNavigation
    },
    name: 'CompanyPage',
    computed: {
        navigation(){
            return this.subRoutes.map(route=>{
                route.link = `/${this.companyName}/${route.component}`;
                let componentPath = this.$route.name.split("-")[0];
                if(route.component){
                    componentPath += `-${route.component}`;
                }
                route.isActive = componentPath===this.$route.name?true:false;
                route.componentPath = componentPath;
                return route;
            })
        }
    },
    data: function(){
        return{
            companyName: this.$route.params.company,
            subRoutes: [
                {
                    label: 'Overview',
                    component: ''
                },
                {
                    label: 'Technical Stack',
                    component: 'tech'
                },
                {
                    label: 'HR Profile',
                    component: 'hr'
                },
                {
                    label: 'News',
                    component: 'news'
                }
            ]
        }
    }
}
</script>

<style lang="sass">
</style>
