<template>
  <div class="w-screen">
    <div class="flex-justify-between w-1/2 text-white sm:px-6 font-mono antialiased sm:px-6 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-200 border-4 border-blue-500">
     <span class="text-2xl pr-8 bg-gradient-to-r from blue-700 via-blue-600 to-blue-500 bg-clip-border bg-opacity-50"> {{name}}</span> 
     <span class="font-extrabold text-xl font-mono pl-4">{{score}}</span> 
     <span class="font-extrabold text-lg font-mono">Score</span> 
     <span class="font-extrabold text-xl font-mono pl-4">{{goals}}</span> 
     <span class="font-extrabold text-lg font-mono">Goals </span>
     <span class="font-extrabold text-xl font-mono pl-4">{{shots}}</span> 
     <span class="font-extrabold text-lg font-mono"> Shots  </span>
     <span class="font-extrabold text-xl font-mono pl-4">{{assists}}</span> 
     <span class="font-extrabold text-lg font-mono">Assists</span>
    </div>
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