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
      <Playerboard :name="currentPlayer.name" :score="currentPlayer.score" :goals="currentPlayer.goals" :assists="currentPlayer.assists"/>
    </div>
    <div class="grid justify-items-center">
      <Scoreboard :team0="getTeam0.name" :score0="getTeam0.score" :team1="getTeam1.name" :score1="getTeam1.score"/>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('initFakeData')
    this.$store.dispatch('initWebsocket')
  },
  computed: {
    currentPlayer() {
      if (this.$store.state.state.players !== undefined) {
        return this.$store.state.state.players[this.$store.state.state.game.target]
      }
    },
    getTeam0() {
      if (this.$store.state.state.game.teams[0] !== undefined) {
        return this.$store.state.state.game.teams[0]
      } else return {}
    },
    getTeam1() {
      if (this.$store.state.state.game.teams[1] !== undefined) {
        return this.$store.state.state.game.teams[1]
      } else return {}
    }
  }
}


</script>
