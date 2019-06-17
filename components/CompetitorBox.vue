<template>
  <table class="company-tbl table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Company</th>
        <th></th>
        <th>Leadership</th>
        <th>CEO Approval</th>
        <th>Employees</th>
        <th>Funding</th>
        <th>Revenue</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(company, index) in companies" :key="index">
        <td>
            <span class="company-tbl__logo-lbl">
                {{company.company}}
            </span>
        </td>
        <td>
          <img class="company-tbl__logo" :src="'https://logo.clearbit.com/'+company.company+'.com'">
        </td>
        <td>{{company.leadership.name}}</td>
        <td>{{company.ceoRating}}</td>
        <td>{{company.employeeCount}}</td>
        <td>{{company.funding}}</td>
        <td>{{company.revenue}}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  name: "CompetitorsBox",
  props: ["companies"]
};
</script>

<style lang="sass">
.company
    &-tbl
        color: #444
        &__logo
            max-height: 24px
            vertical-align: middle
            &-lbl
                text-transform: capitalize
                vertical-align: middle
                display: inline-block
        td
            vertical-align: middle
            padding: 0.8em 0.8em

</style>
