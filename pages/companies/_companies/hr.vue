<template>
  <div class="columns">
    <div class="column is-9">
      <TeamSize :teams="company.hr.teams" />
      <KeyPeople :people="company.basic.keypeople"/>
      <!-- <OpenPositions :positions="openPositions"/> -->
    </div>
    <div class="sdbr column is-3">
      <EmployeeLocationWidget :data="company.hr.topEmployeesDistribution"/>
      <!-- <EmployeeLocationWidget :data="locationData"/> -->
    </div>
  </div>
</template>

<script>
import TeamSize from "~/components/TeamSize";
import KeyPeople from "~/components/KeyPeople";
import OpenPositions from "~/components/OpenPositions";
import EmployeeLocationWidget from "~/components/EmployeeLocationWidget";

export default {
  name: "HR",
  components: {
    TeamSize,
    KeyPeople,
    OpenPositions,
    EmployeeLocationWidget
  },
  props: ['company'],
  data: function() {
    return {};
  }
};
</script>
<style lang="sass">
.hr
    &__contact
        &-item
            display: block
            & + &
                margin-top: 6px
        &-value
            display: inline-block
            vertical-align: middle
        &-icon
            display: inline-block
            vertical-align: middle
            &--fix
                position: relative
                top: -4px
                left: 5px
                margin-right: 7px

.sdbr
    border-left: 1px solid #dfe1e8
    &-item
        margin-bottom: 20px
        &__key
            font-weight: 500
            color: #111
        
</style>
