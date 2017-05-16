<template>
  <span class="badge" :class="classes">
    <slot></slot> 
  </span>
</template>
<script>
export default {
  name: 'badge',
  props: {
    text: String,
    new: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'new': this.new
      }
    }
  }
}
</script>
