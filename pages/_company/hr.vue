<template>
  <div class="columns">
    <div class="column is-9">
      <TeamSize/>
      <KeyPeople :people="keyPeople"/>
      <OpenPositions :positions="openPositions"/>
    </div>
    <div class="sdbr column is-3">
      <EmployeeLocationWidget :data="cxoData"/>
      <EmployeeLocationWidget :data="locationData"/>
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
  data: function() {
    return {
      cxoData: {
        attributes: [
          {
            label: "Position",
            selector: "location"
          },
          {
            label: "%age of total employees",
            selector: "size"
          }
        ],
        rows: [
          {
            location: "C-Suite",
            size: "0.3%"
          },
          {
            location: "VP",
            size: "0.8%"
          },
          {
            location: "Director",
            size: "1.1%"
          }
        ]
      },
      locationData: {
        attributes: [
          {
            label: "Location",
            selector: "location"
          },
          {
            label: "Employee Count",
            selector: "size"
          }
        ],
        rows: [
          {
            location: "Redmond, USA",
            size: "42,323"
          },
          {
            location: "Hyderabad, India",
            size: "29,323"
          },
          {
            location: "Mountain View, USA",
            size: "18,823"
          },
          {
            location: "San Diego, USA",
            size: "12,623"
          },
          {
            location: "Las Vegas, USA",
            size: "8,753"
          },
          {
            location: "Cincinnati, USA",
            size: "4,432"
          }
        ]
      },
      openPositions: [
        {
          title: "Senior UX Designer",
          location: "Beijing, China",
          description:
            "Act as the central point for all user experience design queries within the agency. Oversee and approve the creation of all wireframes, prototypes, user flow diagrams and interaction designs.",
          experience: "5+ years",
          link: "https://www.naukri.com/senior-ux-designer-jobs"
        },
        {
          title: "Product Manager",
          location: "Mumbai, India",
          description:
            "We are looking for a strong program manager who embraces the challenges of developing intelligent experiences and turns them into intuitive and streamlined experiences for retail and enterprise customers in an ever-increasing collaboration driven world.",
          experience: "5+ years",
          link: "https://www.naukri.com/senior-ux-designer-jobs"
        },
        {
          title: "Senior UX Designer",
          location: "Beijing, China",
          description:
            "Act as the central point for all user experience design queries within the agency. Oversee and approve the creation of all wireframes, prototypes, user flow diagrams and interaction designs.",
          experience: "5+ years",
          link: "https://www.naukri.com/senior-ux-designer-jobs"
        }
      ],
      keyPeople: [
        {
          name: "Bill Gates",
          position: "Co-Founder",
          image:
            "https://www.insidermonkey.com/blog/wp-content/uploads/2013/01/01-Bill-Gates.jpg",
          contact: {
            linkedin: "williamhgates",
            email: "bill@microsoft.com"
          }
        },
        {
          name: "Paul Allen",
          position: "Co-Founder",
          contact: {
            linkedin: "williamhgates",
            email: "paul@microsoft.com"
          }
        },
        {
          name: "Satya Nadella",
          position: "CEO",
          image:
            "https://media.licdn.com/dms/image/C4E03AQGhU6VJLcn9xA/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=0E9d_pTkpy5S9bKVEFQtwOs8ru-lW3Wv6nA8zPAHfAc",
          contact: {
            linkedin: "satyanadela",
            email: "satya@microsoft.com"
          }
        },
        {
          name: "Brad Smith",
          position: "Director",
          contact: {
            linkedin: "williamhgates",
            email: "paul@microsoft.com"
          }
        },
        {
          name: "John W. Thompson",
          position: "Chairman",
          contact: {
            linkedin: "williamhgates",
            email: "paul@microsoft.com"
          }
        },
        {
          name: "Bill Gates",
          position: "Co-Founder",
          contact: {
            linkedin: "williamhgates",
            email: "bill@microsoft.com"
          }
        },
        {
          name: "Paul Allen",
          position: "Co-Founder",
          image:
            "https://media.licdn.com/dms/image/C4E03AQF5ktLTiMDuBQ/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=_jHuyLYGp904fS4eleATdI5GDHb2IJ_6abocydJu93c",
          contact: {
            linkedin: "williamhgates",
            email: "paul@microsoft.com"
          }
        },
        {
          name: "Satya Nadella",
          position: "CEO",
          contact: {
            linkedin: "satyanadela",
            email: "satya@microsoft.com"
          }
        },
        {
          name: "Brad Smith",
          position: "Director",
          contact: {
            linkedin: "williamhgates",
            email: "paul@microsoft.com"
          }
        },
        {
          name: "John W. Thompson",
          position: "Chairman",
          contact: {
            linkedin: "williamhgates",
            email: "paul@microsoft.com"
          }
        }
      ]
    };
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
