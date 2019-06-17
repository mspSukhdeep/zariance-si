<template>
  <div class="segment">
    <div class="segment-title">Key Employees</div>
    <div class="segment-body">
      <table class="key-people table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div class="field">
              <div class="control">
                <input
                  class="person__search input"
                  type="text"
                  placeholder="Search Employees"
                  v-model="searchTerm"
                >
              </div>
            </div>
          </tr>
          <tr v-for="(person, index) in filteredPeople" :key="index">
            <td>
              <div v-if="person.image" class="person__img-wrpr">
                <img class="person__img" :src="person.image">
              </div>
              <div v-else class="person__gravator">{{person.name[0]}}</div>
              <span class="person__name">{{person.name}}</span>
            </td>
            <td>{{person.position}}</td>
            <td>
              <div>
                <a
                  target="blank"
                  :href="'mailto('+person.contact.email+')'"
                  class="hr__contact-item"
                >
                  <i class="hr__contact-icon material-icons md-24">email</i>
                  <span class="hr__contact-value">{{person.contact.email}}</span>
                </a>
                <a
                  target="_blank"
                  class="hr__contact-item"
                  :href="'https://www.linkedin.com/in/'+person.contact.linkedin"
                >
                  <span class="hr__contact-icon hr__contact-icon--fix icon is-small is-left">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/>
                  </span>
                  <span class="hr__contact-value">{{person.contact.linkedin}}</span>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyPeople",
  props: ["people"],
  computed: {
      filteredPeople: function(){
          return this.people.filter(person=>{
              return this.isMatch([person.name, person.position], this.searchTerm)?true:false
        })
      }
  },
  methods: {
      isMatch: function(values=[], subString=""){
          subString = subString.toLowerCase();
            let isMatch = false;
            
            for(let i=0;i<values.length;i++){
                let value = values[i].toLowerCase();
                if(value.indexOf(subString) > -1){
                    isMatch = true;
                    break;
                }
            }
        return isMatch;
    }
  },
  data: function() {
    return {
      searchTerm: ""
    };
  }
};
</script>

<style lang="sass">
.person
    &__img
        &-wrpr
            width: 29px
            height: 29px
            border-radius: 50%
            overflow: hidden
            display: inline-block
            border: 1px solid #dfe1e8
            vertical-align: middle
            margin-right: 5px
    &__gravator
        background-color: #1a73e8
        border-radius: 50%
        width: 30px
        height: 30px
        line-height: 30px
        font-size: 18px
        margin-right: 5px
        color: #fff
        font-weight: 500
        text-align: center
        display: inline-block
    &__name
        display: inline-block
        vertical-align: middle
    &__search
        border: 0
        border-bottom: 1px solid #dfe1e8
        margin: 8px 0
        box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.1)
        outline: none
        &:hover
            outline: none
        &:focus
            border: 0
            border-bottom: 1px solid #dfe1e8
            box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.1)
.key-people
  color: #444
</style>
