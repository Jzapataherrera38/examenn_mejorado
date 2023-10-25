<template>
    <v-card class="mx-auto"
    max-width="100%"
    elevation="8"
    tile
  >
  <v-card-title class="fondo">
    Relaciones las siguientes preguntas con su respuesta
  </v-card-title>

  <v-card-text>
    <v-row
      align="center"
      class="mx-0"
      v-for="(data,index) in preguntas" :key="index"
    >
         <v-col
          cols="5">
           <label>
              {{data}}
           </label>
         </v-col>
         <v-col
         cols="7">
         <v-select
         :items="opciones"
         v-model="tempo[index]"
         @change=procesar(index)
        
       >
       <template v-slot:item="slotProps">
        {{slotProps.item}}
      </template>
      </v-select>
         </v-col>
         <v-col>

         </v-col>
    </v-row>
    </v-card-text>
   
</v-card>

  </template>
  <script>
  export default {
      props: ['preguntas','respuestas','posicion'],
      data: () => ({
           crespuestas : [],
           tempo: [],
           opciones : [],
           dato : null,
           seleccion : null
        }),

        methods: {
          procesar(pos){
            var obj = new Object()
            obj.respuesta = this.tempo[pos]
            if (this.tempo[pos] == this.respuestas[pos])
              obj.resultado = 1
             else
              obj.resultado = 0
              this.$set(this.crespuestas,pos, obj)
             
          }
        },
       mounted() {
             for(let x in this.respuestas)
          {
            console.log(x)
            let encontrado = true
            var posicion = -1
           while(encontrado)
           {
             posicion = (Math.floor(Math.random() * (this.respuestas.length)));
             let index = this.opciones.indexOf(this.respuestas[posicion]);
               if (index == -1)
                 encontrado = false  
           }
            this.opciones.push(this.respuestas[posicion])
 
          }
       },
       watch: {
        crespuestas: function () {
          

           if (this.crespuestas.length == this.preguntas.length)
           {
            var resp = new Object()
            resp.posi = this.posicion;
            var envio = []
              

              for (let x in this.preguntas)
              {
                var tempo = new Object()
                tempo.pregunta = this.preguntas[x]
                tempo.correcta = this.respuestas[x]
                tempo.respuesta = this.crespuestas[x]
                
                envio[x] = tempo
             }
              resp.respuesta = envio
               this.$emit('seleccion', resp)
           }
        }
       },
     
  }
  </script>
  <style>
   .fondo{
     background-color: burlywood;
   }

 
 </style>