<template>
<EventFeed />
</template>

<script>
export default {
  created() {
    this.$store.dispatch('initFakeData')
  }
}
</script>