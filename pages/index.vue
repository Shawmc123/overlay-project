<template>
  <div>
    <div class="left-0 absolute pl-1">
      <BoostAmount v-for="player in teams[0]" :name="player.name" :boost="player.boost" :key="player.id"/>
    </div>
    <div class="right-0 absolute pr-1">
      <BoostAmount v-for="player in teams[1]" :name="player.name" :boost="player.boost" :key="player.id"/>
    </div>
    <!-- {{$store.state.state}} -->
    <!-- {{$store.state.state.players}} -->
    <div class="bottom-0 absolute">
      <Playerboard :name="currentPlayer.name" :score="currentPlayer.score" :goals="currentPlayer.goals" :assists="currentPlayer.assists" :shots="currentPlayer.shots" :saves="currentPlayer.saves" :boost="currentPlayer.boost" :colour="'#'+this.$store.state.state.game.teams[currentPlayer.team].color_primary"/>
    </div>
    <div class="grid justify-items-center">
      <Scoreboard :team0="getTeam0.name" :score0="getTeam0.score" :team1="getTeam1.name" :score1="getTeam1.score" :time="getTime"/>
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
      } else return {}
    },
    getTeam0() {
      if (this.$store.state.state.game !== undefined) {
        return this.$store.state.state.game.teams[0]
      } else return {}
    },
    getTeam1() {
      if (this.$store.state.state.game !== undefined) {
        return this.$store.state.state.game.teams[1]
      } else return {}
    },
    teams() {
      console.log(this.$store)
      const out = []
      for (const player of Object.entries(this.$store.state.state.players)) {
        while (player[1].team >= out.length) {
          out.push([])
        }
        out[player[1].team].push(player[1])
      }
      return out
    },
    getTime() {
      if (this.$store.state.state.game !== undefined) {
        return this.$store.state.state.game.time_seconds
      } else return {}
    }
  }
}


</script>
