<template>
    <div>
        <div class="container">
            <CompanyHeader />
            <PillNavigation :route="navigation" />
            <NuxtChild :key="$route.params.companies" />
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
    created(){
        this.$store.dispatch('company/fetchCompanyInfo', {
            companyName: this.companyName
        });
    },
    computed: {
        navigation(){
            return this.subRoutes.map(route=>{
                route.link = `/companies/${this.companyName}/${route.component}`;
                return route;
            })
        }
    },
    data: function(){
        return{
            companyName: this.$route.params.companies,
            subRoutes: [
                {
                    label: 'Business Profile',
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
