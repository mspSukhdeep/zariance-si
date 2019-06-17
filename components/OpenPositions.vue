<template>
  <div class="segment position">
    <div class="segment-title">Open Positions</div>
    <div class="segment-body">
      <div class="columns position-head">
        <div class="column is-3">Position</div>
        <div class="column is-2">Location</div>
        <div class="column is-7">Description</div>
      </div>
      <div class="columns position-row" v-for="(position, index) in positions" :key="index">
          <div class="position__title column is-3">
              {{position.title}}
          </div>
          <div class="position__location column is-2">
              {{position.location}}
          </div>
          <div class="position__description column is-7">
              <div class="position__description-text">
                  {{position.description}}
              </div>
              <div class="position-attr">
                  <span class="position-attr__key">
                      Experience:
                  </span>
                  <span class="position-attr__value">
                      {{position.experience}}
                  </span>
              </div>
              <a target="_blank" class="position__link" :href="position.link">
                  Apply Now
              </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenPositions",
  props: ["positions"]
};
</script>

<style lang="sass">
.position
    &-head
        font-weight: 500
        color: #111
        border-bottom: 1px solid #444
    &__description
        font-size: 14px
        font-weight: 300
    &-attr
        margin-top: 10px
        &__key
            font-weight: 500
    &-row
        position: relative
        & + &
            border-top: 1px solid #dfe1e8
    &__link
        position: absolute
        right: 12px
        bottom: 12px
        font-weight: 500
        border: 1px solid #444
        border-radius: 4px
        padding: 6px 8px
        line-height: 1
        &:hover
            border-color: #3273dc
</style>
