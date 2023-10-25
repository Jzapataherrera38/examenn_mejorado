<template>
   <div>
       <template  v-if="examen.preguntas.length > 0">
       <v-row
        class=" fondo align-center"
        justify="center"

        >
           <v-col
             cols="5"
              >
             <h3> TEMA A EVALUAR : {{examen.tema}} </h3>
           </v-col>
        </v-row>
        <v-row
        class=" fondo align-center"
        justify="center">
           <v-col 
            cols="4"
            >
             <h5>Fecha de Inicio :
               <v-chip
               class="ma-2"
               color="primary"
             >
             {{examen.fecha_inicio}}
             </v-chip>
             </h5>
           </v-col>
           <v-col 
            cols="4"
            >
            <h5>Fecha de Cierre  :<v-chip
               class="ma-2"
               color="primary"
             >
             {{examen.fecha_cierre}}
             </v-chip> </h5>
           </v-col>
           <v-col
             cols="4" >
             <h5> Numero de preguntas : <v-chip
               class="ma-2"
               color="success"
             >
             {{examen.no_preguntas}}
             </v-chip> </h5>
           </v-col>
        </v-row>


               
        <v-row
         justify="center">
         <v-col
           cols="8"
           
         >
        
        <v-row v-for="(data,index) in examen.preguntas" :key="index">
           <v-col
            cols="12"
           >
           <component 
            :is="data.name"
            :pregunta="data"
            :posicion="index"
            :preguntas="data.preguntas"
            :respuestas="data.respuestas"
            @seleccion="procesarpregunta"
        ></component>

           </v-col>
        </v-row>
      </v-col>
      </v-row>

        </template>
       <template v-else>
          <v-row justify="center">
           <v-col cols="3">
              <h4>NO HAY DATOS </h4>
           </v-col>
          </v-row>
       </template>
       <br>
     
     
   </div>
 
</template>
<script>
import Psur from './Pregun_Views/PreGunta_Psur.vue'
import Prelacion from './Pregun_Views/PreGunta_Prelacion.vue'
import PsurImg from './Pregun_Views/PreGunta_PsurImagen.vue'
import Pfillword from './Pregun_Views/PreGunta_Fillword.vue'
// const baseURL = "http://localhost:3000/examen";
export default {
   props: ['examen'],

   components :{
       Psur,
       Prelacion,
       PsurImg,
       Pfillword
      
   },
   data: () => ({
    
       tipo : null,
       respuestas:[],
         
     }),

    
      methods: {
      procesarpregunta(resp){
         const { posi, ...paquete } = resp;
         console.log(posi)
            this.$set(this.respuestas, resp.posi, paquete)
         },
        
     /*   procesar(paq){
           this.$set(this.examenres.respuestas, paq.posi, paq.respuesta)
         }*/
     },

     watch: {
      respuestas: function () {
         
          if (this.examen.preguntas.length == this.respuestas.length)
          {
               this.$emit('terminado',this.respuestas)
          }
      }
     },
}

</script>
<style scoped>
  .fondo{
   background: linear-gradient(90deg, rgba(30,171,110,0.3786764705882353) 0%, rgba(38,188,141,0.45710784313725494) 53%, rgba(44,222,208,0.8100490196078431) 98%);}
</style>