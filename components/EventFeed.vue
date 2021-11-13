<template>
  <ul>
    <li v-for="event in $store.events" :key="event" ><pre>{{JSON.stringify(obj, null, 2)}}</pre></li>
  </ul>
</template>