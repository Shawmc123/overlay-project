<template>
  <div>
    <div class="left-0 absolute">
      <BoostAmount v-for="(item,index) in $store.state.state.players" v-if="item.team==0" :name="item.name" :boost="item.boost" :key="index"/>
    </div> 
    <div class="right-0 absolute">
      <BoostAmount v-for="(item,index) in $store.state.state.players" v-if="item.team==1" :name="item.name" :boost="item.boost" :key="index"/>
    </div>
    <!-- {{$store.state.state}} -->
    <!-- {{$store.state.state.players}} -->
    <div class="bottom-0 absolute">
      <Playerboard/>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('initWebsocket')
  }
}
</script>