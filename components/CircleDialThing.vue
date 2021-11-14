<template>
  <!-- <div class="w-full h-full bg-red-600 rounded-full" :style="{padding: ((-(Number(val))/max)*50)+'%'}"> -->
  <div class="w-full h-full relative">
    <div class="w-full h-full bg-blue-500 rounded-full absolute"></div>
    <div
      class="w-full h-full bg-blue-900 rounded-full absolute inset-1/2 transform smooththing -translate-x-1/2 -translate-y-1/2"
      :style="{ width: size + '%', height: size + '%' }"
    ></div>
    <div
      class="absolute text-gray-300 top-1/2 left-1/2  transform -translate-y-1/2 -translate-x-1/2" :class="textClass">
      {{ val }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    size() {
      return (Number(this.val) / this.max) * 100;
    },
  },
  props: {
      max: {default: 100, type: Number},
      val: {type: Number},
      textClass: {default: '', type: String}
  }
};
</script>

<style scoped>
.smooththing {
  transition: width 0.6s ease-in-out, padding-left 0.6s ease-in-out,
    height 0.6s ease-in-out, padding-top 0.6s ease-in-out;
}
</style>