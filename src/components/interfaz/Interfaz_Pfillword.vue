<template>
    <div id="app">
      <v-row>
        <v-col>
          <h3>INGRESE TEXTO</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h4>Las palabras que generarán los espacios en blanco deben estar entre <kbd>:</kbd>.</h4>
        </v-col>
      </v-row>
      <ckeditor :editor="editor" v-model="pregunta.enunciado" :config="editorConfig"></ckeditor>
  
      <v-row>
        <v-col cols="10">
          <v-btn class="ma-2" outlined color="indigo" @click="guardarPregunta">
            GUARDAR PREGUNTA
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  
  export default {
    name: 'app',
    data() {
      return {
        editor: ClassicEditor,
        editorConfig: {
          toolbar: ['heading', '|', 'bold', 'italic', '|', 'undo', 'redo'],
        },
        pregunta: {
          enunciado: '',
          opciones: [],
          tipo: 4,
          name: 'Pfillword',
        },
      };
    },
    methods: {
      guardarPregunta() {
        const patron = /:(.*?):/g;
        const resultado = this.pregunta.enunciado.match(patron);
        this.pregunta.opciones = resultado || [];
        this.$emit('pcompletada', this.pregunta);
      },
    },
  };
  </script>
  
  <style>
  /* Estilos CSS aquí si es necesario */
  </style>
  