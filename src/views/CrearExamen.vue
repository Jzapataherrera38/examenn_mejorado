<template>
  <v-container class="fondo">
   <v-row
    justify="center"
    align="center"
    class="mb-4 mt-3"
   >
     <v-col
       cols="6"
       class="fondotitulo">
       <div class="d-flex align-center justify-center" style="height: 40px;">
        <h2> GENERAR EXAMEN</h2>
      </div>
       
    </v-col>
  </v-row>

   <v-tabs
      v-model="tab"
      show-arrows
      centered
      background-color="transparent"
      color="white accent-4"
      icons-and-text
    >
      <v-tabs-slider color="white accent-4
      "></v-tabs-slider>
      <v-tab href="#tab-1" color="white">
        Crear Examen
        <v-icon>mdi-clipboard</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Vista Previa
        <v-icon>mdi-eye</v-icon>
      </v-tab>    
    </v-tabs>
    <v-tabs-items
    v-model="tab"
    >

      <v-tab-item
      value="tab-1"
      color="black"
      >
      <v-sheet>
      <v-expansion-panels popout >
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
        class="mt-4 mb-4"
      >
        <v-expansion-panel-header  >
       <v-row justify="center" >
    <v-col cols="12">
      <h2>Configuración de Examen</h2>
    </v-col>
    </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content >
          <v-form  ref="form"
          v-model="valid"
          lazy-validation
           >
    <v-row align="center" class="pr-20" >
      <v-col cols="2" class="texto">
      Fecha Inicio:
      </v-col>
      <v-col cols="3">
        <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }" >
          <v-text-field
            v-model="examen.fecha_inicio"
       
            prepend-icon="mdi-calendar"
            readonly
            :rules="CampoRules"
            label="Fecha inicial"
            required
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="examen.fecha_inicio"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
      </v-col>

      <v-col cols="2" class="texto"> 
        Fecha Cierre:
      </v-col>
      <v-col cols="4" >
        <v-menu 
        v-model="menu3"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-col >
          <v-text-field 
            v-model="examen.fecha_cierre"
            :rules="CampoRules"
            prepend-icon="mdi-calendar"
            label="Fecha cierre"
            readonly
            required
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </v-col>
        </template>
        <v-date-picker
          v-model="examen.fecha_cierre"
          @input="menu3 = false"
        ></v-date-picker>
      </v-menu>
      </v-col>
    </v-row>

    <v-row align="center" class="pr-20">
      <v-col cols="2" class="texto">
        Tema:
      </v-col>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
      </svg>
      <v-col cols="8">
        
        <v-text-field
        v-model="examen.tema"
        :rules="CampoRules"
        required
        label="Digite el tema"
      ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center" class="pr-20">
      <v-col cols="2" class="texto">
        Número de preguntas: 
      </v-col>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-down" viewBox="0 0 16 16">
        <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
        <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
        <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
      </svg>
      <v-col cols="2">
        <v-text-field
        v-model="examen.no_preguntas"
        label="Numero de preguntas"
        type="number"
        :rules="CampoRules"
        requerid
      ></v-text-field>
      </v-col>
      </v-row>
    </v-form>
   </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>

        <v-expansion-panels popout >
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header >
                
          <v-row justify="center">
            <v-col cols="12">
              <h2>Configuración de Preguntas</h2>
            </v-col>
          </v-row>
              </v-expansion-panel-header>

              <ManagerPregunta
                     :npreguntas="examen.no_preguntas"
                     :preguntas="examen.preguntas"
                     @Evdatos="Rpreguntas"
                   >
             </ManagerPregunta>
             
      </v-expansion-panel>
    </v-expansion-panels>
    <v-bottom-navigation >
      
      <v-btn @click="guardarexamen()"
      :loading="loading4"
      :disabled="loading4"
       >
        <span>GUARDAR EXAMEN</span>
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
          </span>
        </template>
  
        <v-icon>mdi-floppy</v-icon>
      </v-btn>
    </v-bottom-navigation>


<v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>



    <!--Llene datos-->
    <template >
      <div class="text-center" >
        <v-snackbar  :color="color"
          v-model="alerta"
          :vertical="vertical"
        >
          {{ texto }}
    
          <template v-slot:action="{ attrs }">
            <v-btn
              color="indigo"
              text
              v-bind="attrs"
              @click="alerta = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </template>

</v-sheet>
</v-tab-item>
<v-tab-item
      value="tab-2"
      >
      <PreView
        :examen="examen"
      ></PreView>

</v-tab-item>

</v-tabs-items>

</v-container>

</template>

<script>
import axios from 'axios';
import PreView from '@/components/PreView.vue'
import ManagerPregunta from '@/components/interfaz/ManagerPregunta.vue'  

  export default {
    components:{
       PreView,
       ManagerPregunta
        },

    data: () => ({
     
      btnge: true,
      alerta: false,
      texto : '',
      vertical: true,
      menu: false,
      menu2 : false,
      menu3 : false,
      tab : null,
      npreguntas : 0,
      nopciones : '',
      valid: false,
      color : 'red',
      loading4: false,
      loader: null,
      CampoRules: [
        v => !!v || 'Campo requerido',
      ],

      examen:{
        fecha_inicio : '',
        fecha_cierre: '',
        tema : '',
        no_preguntas : '',
        preguntas : [],

      },
      overlay:false,
     
     
    
    }),
    methods: {
     
    Rpreguntas(preguntas){
       this.examen.preguntas = preguntas
    },

     async guardarexamen(){
      
      if (this.$refs.form[0].validate()) {
              
         if (this.examen.no_preguntas == this.examen.preguntas.length)
         {
          this.loading4 = true
           var vm = this
            await axios.post("http://localhost:3000/examen",this.examen)
            .then(function (res) {
              if (res.status == 201)
             {
               vm.color = 'blue'
               vm.alerta = true
               vm.texto = 'El examen ha sido guardado exitosamente ...'
             }
            })
            .catch(function (error) {
              vm.color = 'red'
               vm.alerta = true
               vm.texto = `Error : ${error}`
   
            })
            .finally(function () {
               vm.loading4 = false
               });
           
         }
         
         else
         {
           this.alerta = true
           this.texto = 'El numero de preguntas digitas no coincide con el total de las preguntas del examen'
         }

      }
      

          /*    if (this.examen.fecha_inicio =='' ){
                      this.texto = 'Debe digitar una fecha de inicio'
                       return this.alerta=true 
                }*/
       
     //   if (this.pre_nu > this.examen.no_preguntas){
     //  const res =  await axios.post("http://localhost:3000/examen",this.examen);

     //  console.log(res);
     //  location.reload()
        },

      


    

      limpiar(){
/*         this.examen.fecha_inicio=''
        this.examen.fecha_cierre=''
        this.examen.tema=''
        this.npreguntas='' */
        this.pregunta.enunciado = '';
        this.pregunta.opciones = [];
        this.pregunta.correcta = '';
        this.nopciones = '';
      },
      
     
    },
    watch: {
      nopciones(nueva){
      
           if (nueva > 1)
            {
              this.pregunta.opciones.splice(nueva,this.pregunta.opciones.length )
              this.pregunta.correcta = 0;
            }
    
           
      }
    }
  }
</script>
<style scoped>

.fondotitulo{
  background: linear-gradient(90deg, rgba(243,242,248,0.49352240896358546) 16%, rgba(173,173,184,0.364670868347339) 40%, rgba(180,229,239,0.4375) 83%);justify-content: center;
 color : white

}
.fondo{
  background: linear-gradient(90deg, rgba(30,171,38,0.8688725490196079) 18%, rgba(98,188,38,0.8464635854341737) 53%, rgba(135,180,85,0.9332983193277311) 95%);
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.mostrar{
  background-color: #00C853;
}
</style>

















