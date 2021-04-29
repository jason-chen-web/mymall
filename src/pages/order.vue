<template>
  <div>
    <order-header></order-header>
    <router-view></router-view> 
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'


export default {
  components: { NavFooter },
  name: 'order'
 
}
</script>

<style>

</style>