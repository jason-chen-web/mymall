<template>
  <div>
      <nav-header></nav-header>
      <router-view>
          
      </router-view>
      <nav-header></nav-header>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'


export default {
  components: { NavHeader },
  name: 'home'
 
}
</script>

<style>

</style>