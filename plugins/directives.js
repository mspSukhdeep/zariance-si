import Vue from 'vue'

Vue.directive('click-outside', {
    bind () {
        if(this && this.el){
          this.event = event => this.vm.$emit(this.expression, event)
          this.el.addEventListener('click', this.stopProp)
          document.body.addEventListener('click', this.event)
        }
    },   
    unbind() {
      if(this && this.el){
        this.el.removeEventListener('click', this.stopProp)
        document.body.removeEventListener('click', this.event)
      }
    },
  
    stopProp(event) { event.stopPropagation() }
  });