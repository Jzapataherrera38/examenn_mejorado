<template>
    <div>
       <v-expansion-panel-content v-if="pre_nu <= npreguntas" >
        <v-row>
          <v-col
          cols="8" class="texto">
            <h3> PREGUNTA No : {{pre_nu}}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
         >
            <v-select
               v-model="tipop"
               :items="items"
               :item-text="'nombre'"
               :item-value="'tipo'"
               label="Tipo Pregunta"
               @change="cargarcomponente()"
             ></v-select>
          </v-col>
      </v-row>
      <v-row>
        <v-col>
          <component :is="componente"
          :key="pre_nu"
          @pcompletada="guardar"
          :ppregunta="pregunta"
          ></component>
        </v-col>
      </v-row>   
      
      
    </v-expansion-panel-content>

   <v-row justify="space-around" class="mb-1">
   <v-col cols="3"  >
       <v-btn
          class="mostrar"
          outlined
          color="blue"
          @click="anterior()"
          v-if="pre_nu > 1"
        >
           Anterior
       </v-btn>
    </v-col>
      <v-col cols="2">
        <v-btn
          v-model="btnsig"
          class="mostrar"
          outlined
          color="blue"
         @click="siguiente()"
         v-if="pre_nu < npreguntas"
      >
      Siguiente
     </v-btn>
     </v-col>
  </v-row>
       </div>  
</template>

<script>
import Psur from '@/components/interfaz/Interfaz_Psur.vue'
import Prelacion from '@/components/interfaz/Interfaz_Prelacion.vue'
import PsurImg from '@/components/interfaz/Interfaz_Img.vue'
import PfillWord from '@/components/interfaz/Interfaz_Pfillword.vue'

export default {
  props:['npreguntas'],
    components:{
       Psur,
       Prelacion,
       PsurImg,
       PfillWord
    },
    data: () => ({
        items: [{
           nombre : 'Selección multiple con unica respuesta',
           tipo : 1
        },
        {
           nombre : 'Selección multiple con unica respuesta con imagen',
           tipo : 3
        },
        {
           nombre : 'Pregunta relación',
           tipo : 2
        },
        {
           nombre : 'Pregunta Relleno palabras',
           tipo : 4
        },
       
        ],
        btnsig: true,
        pre_nu : 1,
        preguntas : [],
        pregunta : null,
        tipop:'',
        componente: null,

    }),
    methods: {

      cargarcomponente(){
           switch (this.tipop) {
            case 1:
              this.componente = 'Psur'
              break;
              case 2:
              this.componente = 'Prelacion'
              break;
              case 3:
              this.componente = 'PsurImg'
              break;
              case 4:
              this.componente = 'PfillWord'
              break;
           
            default:
              break;
           }
      },
        guardar(pregunta){
         
        if (this.pre_nu > this.npreguntas){
          return this.btnsig==false
        }

             if (this.pre_nu <= this.npreguntas)
                {
                  this.$set(this.preguntas, this.pre_nu-1, pregunta)
                  this.tipop = 0
                  this.componente = null
                }
            if (this.pre_nu < this.npreguntas)
                  this.pre_nu += 1;
                  
            if (this.pre_nu <= this.preguntas.length)
             {
               this.pregunta = this.preguntas[this.pre_nu-1]
               this.tipop = this.pregunta.tipo
             }

      },

      anterior(){
        this.pregunta = null
        if (this.pre_nu >= 1)
        {
          this.pre_nu -= 1;
          this.pregunta = this.preguntas[this.pre_nu-1]
          console.log(this.pregunta)
          this.tipop = this.pregunta.tipo
          this.cargarcomponente()
        }
      },

      siguiente(){
        this.pregunta= null
        if (this.pre_nu <= this.npreguntas)
        {
          this.pre_nu += 1;
          console.log(this.preguntas.length, this.npreguntas)
          console.log(this.preguntas[this.pre_nu-1])
          if (this.preguntas[this.pre_nu-1] != undefined)
           {
               console.log('aca')
               this.pregunta = this.preguntas[this.pre_nu-1]
               this.tipop = this.pregunta.tipo
               this.cargarcomponente()
           }
          else
          {
             console.log('aqui')
             this.pregunta = null
             this.tipop = ''
          }
        }
      }
        
    },
     watch: {
       preguntas(){
        console.log(this.npreguntas, this.preguntas.length)
          if (this.npreguntas == this.preguntas.length)
           {
              this.$emit('Evdatos',this.preguntas)
           }
       }
     },

}
</script>

<style>

</style>