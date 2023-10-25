<template>
    <span class="caja" @dragstart="drag" :id="palabra" :style="{ backgroundColor : color}" draggable="true">{{palabra}}</span>
  </template>
  
  <script>
  
  export default {
      props : ['palabra','color'],
      methods: {
          drag(ev){
             // ev.preventDefault()
              ev.dataTransfer.setData("text", ev.target.id);
              
          }
      },
  }
    
  </script>
  
  <style>
  .caja {
      display: inline-block;
      padding: 5px;
      background-color: #EEEEEE;
      cursor: move;
      margin-left: 5px;
      margin-right: 5px;
  }
  </style>