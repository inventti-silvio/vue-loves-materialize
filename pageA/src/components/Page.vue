<template>
  <div>
    <hello :msg="'Page A'"></hello>
    <side-nav ref="left" id="left" :config="leftConfig"></side-nav>
    <side-nav ref="right" id="right" :config="rightConfig"></side-nav>

    <button @click="open('left')">left</button>
    <button @click="open('right')">right</button>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  data () {
    return {
      leftConfig: {
        menuWidth: 300,
        closeOnClick: true,
        draggable: true,
        edge: 'left'
      },
      rightConfig: {
        menuWidth: 300,
        closeOnClick: true,
        draggable: true,
        edge: 'right'
      }
    }
  },
  methods: {
    open (side) {
      this.$refs[side].show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
