<template>
  <div>
    <div class="w-32 h-32">
      <CircleDialThing
        textClass="text-4xl font-medium"
        :val=val
      />
    </div>
    <div class="w-64 h-64">
      <CircleDialThing
        textClass="text-8xl font-medium"
        :val=val
      />
    </div>
    <input type="range" max=100 min=0 v-model="val" />
    <div class="w-32 h-32" style="background-color: #1873FF"></div>
    <div class="w-32 h-32" style="background-color: #E5E5E5"></div>
    <div class="w-32 h-32" style="background-color: #C26418"></div>
    <div class="w-32 h-32" style="background-color: #E5E5E5"></div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("initFakeData");
  },
  data() {
    return {
      val: 20
    }
  }
};
</script>
<style scoped>
</style>