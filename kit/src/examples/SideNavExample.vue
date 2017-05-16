<template>
  <div>
    <side-nav ref="demo" id="demo">
      <li>
        Hey
      </li>
    </side-nav>
    <button @click="hey">clickme</button>
  </div>
</template>
<script>
import SideNav from '@/components/SideNav'

export default {
  name: 'side-nav-example',
  components: {
    SideNav
  },
  methods: {
    hey () {
      console.log('hey')
      this.$refs.demo.show()
    }
  }
}
</script>
