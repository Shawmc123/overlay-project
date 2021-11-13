<template>
<div class="mt-3 bg-gradient-to-l from-blue-300 via-indigo-400 to-blue-500 w-60 min-w-full">
  <h1>
    {{name}}
  </h1>
  <div class="h-2 mb-2 bg-red-100">

  </div>
</div>
</template>
<script>
export default {
  props: ['name', 'boost']
}
</script>