<template>
<div class="mt-3 bg-gradient-to-l from-blue-300 via-indigo-400 to-blue-500 w-60 min-w-full">
  <h1 class="text-gray-300 smoothwidth font-bold text-xl flex justify-between">
    {{name}}
    <span class="px-4">
      {{boost}}
    </span> 
  </h1>
  <div class="h-2 mb-2 bg-yellow-500" :style="{width:boost+'%'}">
    <!-- <p> {{boost}} </p> -->
  </div>
</div>
</template>


<script>
export default {
  props: {
    name: {default:'', type:String},
    boost: {default:0, type:Number}
  }
}
</script>

<style scoped>
.smoothwidth {
  transition: width 0.6s ease-in-out,
              padding-left 0.6s ease-in-out;
}
</style>