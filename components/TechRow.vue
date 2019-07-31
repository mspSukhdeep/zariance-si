<template>
  <div class="tech columns is-marginless">
    <div class="tech__img-wrpr column is-2" :style="{background: tech.color}">
      <div class="tech__img-wrpr-inr">
        <!-- <img
          class="tech__img"
          :src="tech.image"
        >-->
        <FallbackIcon :chars="tech.name" />
      </div>
    </div>
    <div class="tech__info column is-10">
      <div class="tech__name">{{tech.name}}</div>
      <div class="tech__description">{{tech.description}}</div>
      <div class="tech__tag">
        <span class="tech__tag-item" v-for="(tag, index) in tech.tags" :key="index">{{tag.label}}</span>
      </div>
      <!-- <div class="tech__timeline">
        <div class="tech__timeline-inr" :style="{background: tech.color}">
          <div class="tech__timeline-event" v-for="(event, index) in tech.events" :key="index" :style="{left:event.position}">
            <div class="tech__timeline-event-info">
              <div class="tech__timeline-event-title">{{event.key}}</div>
              <div class="tech__timeline-event-description">{{event.value}}</div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import FallbackIcon from "./FallbackIcon";
export default {
  props: ["tech"],
  components: {
    FallbackIcon
  }
};
</script>
<style lang="sass">
.tech
  text-transform: uppercase
  &__tag
    &-item
      background-color: rgba(50, 115, 220, 0.1)
      color: #333
      border-radius: 15px
      padding: 5px 10px
      font-size: 14px
      text-transform: capitalize
</style>
