<template>
  <a class="waves-effect waves-light btn" @click="click">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'button',
  props: {
    text: String
  },
  methods: {
    click (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>
