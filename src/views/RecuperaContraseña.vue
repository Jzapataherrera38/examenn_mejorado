<template>
    <div>
      <v-row>
          <v-col>
              <h3>RECUPERA TU CONTRASEÑA</h3>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <p>Para recuperar tu contraseña escribe tu correo electrónico al cual enviaremos el código</p>
          </v-col>
      </v-row>
      <v-row  align="center" class="pr-20"
         
    >
    <v-col cols="3" class="texto">
      Correo Electrónico
    </v-col>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-at" viewBox="0 0 16 16">
      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
    </svg>
    <v-col cols="8" >
      <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      outlined
      shaped
    >
</v-text-field>
    </v-col>
    </v-row>

  
      <v-row>
        <v-col cols="12">
      <v-btn
    class="mostrar"
    outlined
    text
    color="cyan lighten-4"
    to="/"
  >
  Enviar Código
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
  </svg>
  </v-btn>
  
  </v-col>
  </v-row>
  
  </div>
  </template>
  
  <script>
    export default {
      data () {
        return {
          show1: false,
          show2: true,
          show3: false,
          show4: false,
          password: '',
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`),
          },
        }
      },
    }
  </script>
  <style>
  .mostrar{
    background-color: #26A69A;
  }
  </style>