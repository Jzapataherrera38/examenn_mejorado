<template>
<v-app>
    <div    justify="center">
        
      <v-card-title>
        <span class="text-h5"><b> Crear Usuarios</b></span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row  align="center" class="pr-20"

          >
          <v-col cols="3" class="texto">
            Usuario
          </v-col>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
          </svg>
          <v-col cols="5">
      
            <v-text-field
            v-model="usuario.usuario"
            :rules="[rules.required]"
            outlined
            shaped
        ></v-text-field>
          </v-col>
          </v-row>
      
      
                <v-row align="center" class="pr-20">
                  <v-col cols="3" class="texto">
                    Contraseña
                  </v-col>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                  <v-col
                    cols="5"
                  >
                    <v-text-field
                    v-model="usuario.password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      filled
                      shaped
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
          
                </v-row>
      
      
      
          <v-row  align="center" class="pr-20">
              <v-col cols="3" class="texto">
                Tipo De Usuario
              </v-col>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
              <v-col
              cols="5"
            >
                <v-select
                v-model="usuario.tipo"
                :rules="[rules.required]"
                :items="items"
                :menu-props="{ top: true, offsetY: true }"
                label="-Seleccione un cargo-"
                shaped
                ></v-select>
              </v-col>
            </v-row>
      


            <v-row  align="center" class="pr-20" v-if="usuario.tipo == 'Alumno'">
              <v-col cols="3" class="texto">
                Grado
              </v-col>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
              <v-col
              cols="5"
            >
                <v-select
                v-model="usuario.tipo"
                :rules="[rules.required]"
                :items="itemsg"
                :menu-props="{ top: true, offsetY: true }"
                label="-Seleccione un grado-"
                shaped
                ></v-select>
              </v-col>
            </v-row>
      
        </v-container>
        <small>*Campos obligatorios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        

        <v-row>
            <v-col>
        <v-btn
        class="mostrar"
        outlined
          color="white"
@click="guardar()"
>
Crear
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>
</v-btn>
</v-col>
</v-row>
      </v-card-actions>
      <v-snackbar
      v-model="snackbar"
      :color = "color"
    >
      {{text}}

      
    </v-snackbar>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

    </div>
</v-app>                
</template>


<script>
import axios from 'axios';
var bcrypt = require('bcryptjs');

                export default {
                  data () {
                    return {
                        usuarioreg: false,
                        usuarionreg: false,
                        items : ['Alumno', 'Docente', 'Admin'],
                        itemsg : ['Grado 6', 'Grado 7', 'Grado 8', 'Grado 9', 'Grado 10', 'Grado 11'],
                        usuario : {
            usuario : '',
            password : '',
            tipo : '',
        },
        overlay:false,
        snackbar : false,
        text : "",
        color : "blue",
                      links: [
                        'Dashboard',
                        'Messages',
                        'Profile',
                        'Updates',
                      ],
                          show1: false,
                          password: '',
                          title: 'Preliminary report',
                          email: '',
                      rules: {
                        required: value => !!value || 'Required.',
                        min: v => v.length >= 8 || 'Min 8 characters',
                        emailMatch: () => (`The email and password you entered don't match`),
                        counter: value => value.length <= 20 || 'Max 20 characters',
                            email: value => {
                              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                              return pattern.test(value) || 'Invalid e-mail.'
                      },
                    }
                  }
                },
                methods: {
        async guardar(){
          this.overlay= true;
         const resp =  await axios.get(`http://localhost:3000/usuarios?usuario=${this.usuario.usuario}`);
         this.overlay= false
         if (resp.data.length > 0)
         {
            this.text ="Ya existe este usuario.."
            this.color = "red"
            this.snackbar = true;
         }
         else {
           if (this.usuario.usuario!= '' && this.usuario.password.length>= 8 && this.usuario.tipo != ''){

           this.overlay= true;
           var hash = bcrypt.hashSync(this.usuario.password, 10);
           this.usuario.password = hash;

            
            this.overlay= true;
            const res =  await axios.post("http://localhost:3000/usuarios/",this.usuario);
            this.overlay= false
            this.text = "Usuario creado con exito...";
            this.color ="blue"
            this.overlay = false;
            this.snackbar = true;
            console.log(res)
            location.reload()
          }else{
            this.text = "Llene todos los campos"
            this.color ="red"
            this.snackbar = true;
          }
         }
            this.limpiarcajas()
            
        },
        limpiarcajas(){
          this.usuario.usuario = ''
          this.usuario.password = ''
          this.usuario.tipo = ''
        }
      },
              }
              </script>
                  <style>
                .mostrar{
                  background-color: #00C853;
                  border-radius: 10px;
                }
                #building{
                background:url("../assets/fondo5.jpg");
                width:100%;		
                height:100%;	
                background-size:100% 100%;}
              
                </style>