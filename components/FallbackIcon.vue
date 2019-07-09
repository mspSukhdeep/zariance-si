<template>
  <div :style="divStyle" class="fallback-icon">{{text}}</div>
</template>

<script>
export default {
  name: "FallbackIcon",
  props: ["chars"],
  computed: {
    text() {
      try {
        const charParts = this.chars.split(/[\s\-]+/);
        let text = (text = charParts[0][0]);

        if (charParts.length > 1) {
          text += charParts[1][0].toUpperCase();
        } else {
          text += charParts[0][1];
        }
        return text;
      } catch (ex) {
        console.log("Fatt gya", this.chars);
      }
    }
  },
  data() {
    return {
      divStyle: {
        backgroundColor: this.getRandomColor()
      }
    };
  },
  methods: {
    rand: function(min, max) {
      return min + Math.random() * (max - min);
    },
    getRandomColor: function() {
      var h = this.rand(1, 360);
      var s = this.rand(0, 100);
      var l = this.rand(0, 50);
      return "hsl(" + h + "," + s + "%," + l + "%)";
    }
  }
};
</script>

<style lang="sass">
    .fallback-icon
        background-color: #1a73e8
        width: 42px
        height: 42px
        line-height: 42px
        text-align: center
        font-weight: 500
        font-size: 18px
        color: #fff
        border-radius: 50%
        text-transform: capitalize
        display: inline-block
</style>
