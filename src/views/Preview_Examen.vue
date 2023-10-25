<template>
    <v-app>
     <PreView align="justify"
      :examen = examen>

     </PreView>

    </v-app>
</template>
<script>
 import axios from 'axios';
 import PreView from '@/components/PreView.vue'
    export default {
      components:{
       PreView,
    },
      data: () => ({
        examen : null,
      }),

      async mounted() {
        console.log('holaaaa')
          const res =  await axios.get(`http://localhost:3000/examen/${this.$route.params.id}`);
       this.examen = res.data;
      
      },
      


     
    }
    </script>