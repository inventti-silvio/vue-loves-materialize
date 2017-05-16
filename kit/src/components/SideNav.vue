<template>
  <ul :id="id" 
      :class="options"
      :data-activates="id"
      class="side-nav">
      <slot></slot>
  </ul>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'side-nav',
  props: {
    config: {
      type: Object,
      default: {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      }
    },
    fixed: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      $el: null
    }
  },
  computed: {
    options () {
      return {
        'fixed': this.fixed
      }
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.$el = $(`#${this.id}`)
      this.$el.sideNav(this.config)
    })
  },
  methods: {
    show () {
      this.action('show')
    },
    hide () {
      this.action('hide')
    },
    destroy () {
      this.action('destroy')
    },
    action (action) {
      this.$el.sideNav(action)
    }
  }
}
</script>
