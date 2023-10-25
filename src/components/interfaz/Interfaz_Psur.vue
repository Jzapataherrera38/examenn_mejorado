<template>
    <div>
        
        <v-row
        class="ml-4 "
      
      >
     
       </v-row> 
       
       <v-row  align="center" class="pr-20"
       
      >
      <v-col cols="3" class="texto">
        Enunciado:
      </v-col>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
      </svg>
      <v-col cols="8">

        <v-text-field
      v-model="pregunta.enunciado"
   
    ></v-text-field>
      </v-col>
      </v-row>  



      <v-row align="center" class="pr-20">
      <v-col cols="3" class="texto">
        Número de Opciones
      </v-col>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-down" viewBox="0 0 16 16">
        <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
        <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
        <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
      </svg>
      <v-col
        cols="2">

        <v-text-field
      v-model.number="nopciones"
     
    ></v-text-field>
      </v-col>
      </v-row>  

      
      <v-col
        cols="10">
  
       <v-row   
       justify="center" v-for="(data,index) in nopciones" :key="data" align="center" class="pr-20">
       <v-col>
        <v-list-item >
            <v-list-item-avatar>
                {{index + 1}}
            </v-list-item-avatar>
         <v-list-item-content>
          <v-list-item-title>

            <v-text-field
            v-model.number="pregunta.opciones[index]"
           
            label="Digite opcion " 
            required
            class="pl-5 pr-5"
            height="18"
           ></v-text-field>

          </v-list-item-title>
         
        </v-list-item-content>
      </v-list-item>
      </v-col>
    </v-row>
 
  
        
            
          

      </v-col>

      
      <v-row align="center" class="pr-20">
        <v-col
          cols="3" class="texto">
          Respuesta Correcta
        </v-col>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-down" viewBox="0 0 16 16">
          <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
          <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
          <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
        </svg>
        <v-col cols="3">
          <v-text-field
          v-model="pregunta.correcta"
          @input="verificar()"
     
      
    ></v-text-field>
      </v-col>
        </v-row>

        <v-row>
          <v-col
           cols=10
           >
           <v-btn
           class="ma-2"
           outlined
           color="indigo"
           @click="enviar()"
         >
           GUARDAR PREGUNTA
          </v-btn>
          </v-col>
          </v-row>
          <template >
            <div class="text-center" >
              <v-snackbar  :color="color"
                v-model="alerta"
              
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
    </div>
</template>

<script>


  export default {
    
    props:['ppregunta'],
    data: () => ({
    pregunta :{
          enunciado : '',
          opciones : [],
          correcta : 0,
          tipo : 1,
          name : 'Psur'
          },
          nopciones:0,
          alerta: false,
          texto : null
          
    
    }),
    mounted() {
        if (this.ppregunta != null)
        {
          this.pregunta = this.ppregunta;
          this.nopciones = this.pregunta.opciones.length;
        }
    },

    methods: {
        verificar(){
        if ((this.pregunta.correcta > this.nopciones )|| (this.pregunta.correcta < 0 ))
        {
          this.pregunta.correcta = 0;
          this.alerta=true
          this.texto="Digite un valor de acuerdo a las opciones disponibles"
        }
      },

      enviar(){
        if ((this.pregunta.enunciado.length > 0) && (this.pregunta.opciones.length == this.nopciones) && (this.pregunta.correcta != 0)){
                  this.$emit('pcompletada',this.pregunta)
                }
        else
        {
          this.alerta= true
          this.texto ='Faltan campos por diligenciar'

        }
             
      }
    },
  
}

</script>