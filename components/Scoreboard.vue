<template>
  <div class="flex justify-between font-mono shadow-2xl text-gray-800 mt-3 bg-gradient-to-r from-blue-800 via-gray-200 to-yellow-500 w-72 border-4 rounded-xl border-gray-200">
    <span class="pl-5 pt-0.5 pb-0.5">
      {{team0}}
    </span>
    <span class="flex justify-between w-24">
      <span class="p-0.5">
        {{score0}}
      </span>
      <span class="p-0.5">
        {{time}}
      </span>
      <span class="p-0.5">
        {{score1}}
      </span>
    </span>
    <span class="pr-5 pt-0.5 pb-0.5">
      {{team1}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    team0: {default:'', type:String},
    score0: {default:'', type:String},
    score1: {default:'', type:String},
    team1: {default:'', type:String},
    time: {default:'', type:Number}
  }
}
</script>

<style scoped>

</style>
