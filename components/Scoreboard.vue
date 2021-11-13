<template>
  <div class="mt-3 bg-gradient-to-l from-pink-600 via-indigo-400 to-blue-500 w-60">
    <h1>
      {{team1}}
      {{score1}}
      {{score2}}
      {{team2}}
    </h1>
  </div>
</template>

<script>
export default {
  //name: "Scoreboard"
  props: {
    team1: {default:'', type:String},
    score1: {default:'', type:String},
    score2: {default:'', type:String},
    team2: {default:'', type:String}
  }
}
</script>

<style scoped>

</style>
