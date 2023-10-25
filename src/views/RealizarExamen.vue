<template>
    <v-app>
     <PreView
       :examen = examen
       @terminado="almacenamiento"
       >
     </PreView>
     <v-btn
        dark color="green accent-4"
        @click="enviarexamen()"
        :disabled="activo"
     >
        ENVIAR EXAMEN
    </v-btn>

    <v-overlay :value="overlay">
       <v-progress-circular
           indeterminate
           size="64"
       >
     Guardando ...
     </v-progress-circular>
     </v-overlay>
    
    </v-app>
</template>
<script>
 import axios from 'axios';
 import PreView from '@/components/PreView.vue'
    export default {
      components:{
       PreView
    },
      data: () => ({
        activo : false,
        examen : null,
        overlay: false,
        solucion:{
          id_usuario : null,
          respuestas : [],
          id_examen : null,
        }
      }),

      async mounted() {
       
        this.solucion.id_usuario =   localStorage.getItem("usuario");
        this.solucion.id_examen = this.$route.params.id
        const res =  await axios.get(`http://localhost:3000/examen/${this.$route.params.id}`);
        this.examen = res.data;
      
      },

      methods: {

        almacenamiento(respuestas){
           this.solucion.respuestas = respuestas

        },

        async enviarexamen(){
          if (this.solucion.respuestas.length < this.examen.preguntas.length)
           {
            alert('Faltan preguntas por resolver ...')
            return
           }
           const res =  await axios.post("http://localhost:3000/examenesresueltos/",this.solucion);
           console.log(res)
           this.overlay=false
           alert('examen guardado ...')
            },
      },
  
   
    }
    </script>