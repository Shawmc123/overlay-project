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