<template>
  <div class = "max-w-xs mx-auto sm:px-6 lg:px-12 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-800 rounded-3xl border-4 border-blue-500">
    <h1 class = "w-32 text-white-600 sm:px-6 lg:px-12 font-mono antialiased">
      {{name}} 
      {{score}}
      {{goals}}
      {{shots}}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    name: {default:'', type:String},
    goals: {default:'', type:Number},
    assists: {default:'', type:String},
    score: {default:'', type:String},
    name: {default:'', type:String},
    name: {default:'', type:String},

  }
}
</script>