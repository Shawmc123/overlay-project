<template>
  <div class="w-screen">
    <div class="flex justify-between w-1/2 text-white font-mono antialiased sm:px-6 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-200 border-4 border-blue-500">
     <div class="text-2xl pr-8 bg-gradient-to-r from blue-700 via-blue-600 to-blue-500 bg-clip-border bg-opacity-50"> {{name}}</div> 
     <div>
      <span class="font-extrabold text-xl font-mono pl-4">{{score}}</span> 
      <span class="font-extrabold text-lg font-mono">Score</span> 
     </div>
     <div>
      <span class="font-extrabold text-xl font-mono pl-4">{{goals}}</span> 
      <span class="font-extrabold text-lg font-mono">Goals </span>
     </div>
     <div>
      <span class="font-extrabold text-xl font-mono pl-4">{{shots}}</span> 
      <span class="font-extrabold text-lg font-mono">Shots</span>
     </div>
     <div>
      <span class="font-extrabold text-xl font-mono pl-4">{{assists}}</span> 
      <span class="font-extrabold text-lg font-mono">Assists</span>
     </div>
     <div>
      <span class="font-extrabold text-xl font-mono pl-4">{{saves}}</span> 
      <span class="font-extrabold text-lg font-mono">Saves</span>
     </div>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {default:'PlayerName', type:String},
    goals: {default:0, type:Number},
    assists: {default:0, type:Number},
    score: {default:0, type:Number},
    shots: {default:0, type:Number},
    saves: {default:0, type:Number},

  }
}
</script>