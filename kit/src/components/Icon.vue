<template>
  <i class="material-icons" :class="classes"><slot></slot></i>
</template>
<script>
export default {
  name: 'icon',
  props: {
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'left': this.left,
        'right': this.right
      }
    }
  }
}
</script>
