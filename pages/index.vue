<template>
  <div>
    <div class="left-0 absolute">
      <BoostAmount name="Shaw"/>
      <BoostAmount name="Adam"/>
      <BoostAmount name="Lew"/>
    </div> 
    <div class="right-0 absolute">
      <BoostAmount name="Shaw" boost="50"/>
      <BoostAmount name="Shaw"/>
      <BoostAmount name="Shaw"/>
    </div>
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