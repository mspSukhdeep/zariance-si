<template>
  <div class="tech columns is-marginless">
    <div class="tech__img-wrpr column is-2" :style="{background: tech.color}">
      <div class="tech__img-wrpr-inr">
        <img
          class="tech__img"
          :src="tech.image"
        >
      </div>
    </div>
    <div class="tech__info column is-10">
      <div class="tech__name">{{tech.name}}</div>
      <div
        class="tech__description"
      >
      {{tech.description}}
      </div>
      <div class="tech__timeline">
        <div class="tech__timeline-inr" :style="{background: tech.color}">
          <div class="tech__timeline-event" v-for="(event, index) in tech.events" :key="index" :style="{left:event.position}">
            <div class="tech__timeline-event-info">
              <div class="tech__timeline-event-title">{{event.key}}</div>
              <div class="tech__timeline-event-description">{{event.value}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['tech']
};
</script>

<style>
</style>
