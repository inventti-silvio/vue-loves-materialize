<template>
  <div>
    <k-side-nav ref="sidenav" id="sidenav">
      <li>
      </li>
    </k-side-nav>
    <div>
      <k-badge new>oi</k-badge>
      <k-badge>oi</k-badge>
    </div>
    
    <k-button @click="showSideNav">Hey <k-icon right>add</k-icon></k-button>
  </div>
</template>

<script>
import KSideNav from '@/components/SideNav'
import KBadge from '@/components/Badge'
import KButton from '@/components/Button'
import KIcon from '@/components/Icon'

export default {
  name: 'side-nav-example',
  components: {
    KSideNav,
    KBadge,
    KButton,
    KIcon
  },
  methods: {
    showSideNav () {
      this.$refs.sidenav.show()
    }
  }
}
</script>

