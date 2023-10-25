<template>
    <v-app id="inspire" >
      <v-app-bar
        app
        color="teal lighten-1"
        flat
        class="fondo"
        height="100"
      >         
      <v-row>
        <v-col cols="4">
          <v-spacer class="ml-5" >
              <h2 class="white-text">Bienvenido </h2>
             <p class="text-primary">{{ usuario }} </p> 
          </v-spacer>   
       </v-col>
       <v-col cols="8">
         <h1 class="gradient-text">Wiuex: Sistema Único de Examen</h1>
       </v-col>
      </v-row> 
      
      </v-app-bar>



      <div id="building">
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="2" >
              <v-sheet 
              
                class="pt-2" >
                <v-list  v-for="datos in menu[tp_menu]"
                      :key="datos.text"
                      color="transparent">
                    <v-list-item
                      v-for="data in datos"
                      :key="data.text"
                      link
                      :to="data.link"
                    >
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-icon>
                            {{data.icon}} 
                          </v-icon>
                          {{ data.text }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
  
                  <v-divider class="my-2"></v-divider>
  


                  <template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
                  link
                  color="green accent-4"
                 
          dark
          v-bind="attrs"
          v-on="on"
        ><v-icon>mdi-home</v-icon>
                          Inicio
        </v-btn>
        
        
      </template>

      <v-card>
        <v-toolbar dark color="green accent-4">
                        <v-toolbar-title>Desea regresar al inicio</v-toolbar-title>
                     </v-toolbar>
        
        <v-card-text>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
    dark
    color="green accent-4"
            @click="dialog = false"
          >Cancelar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
          </v-btn>
          <v-btn 
                  link
                  color="green accent-4"
                  dark
                  to="/">
                          Salir <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
                        
                  </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>





                </v-list>
              </v-sheet>
            </v-col>
  
            <v-col>
              <v-sheet
                min-height="30vh"
               
                class="pt-2"
                color="white">
              <v-container class="twhite
              ">
                 <router-view></router-view>
            </v-container>


            
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
        
      </v-main>
    </div>
    </v-app>
  </template>
  
  <script>
  
  
    export default {
      data: () => ({
        selectedItem: 0,
    
        links: [
          'Dashboard',
          'Messages',
          'Profile',
          'Updates',
        ],
        dialog:false,
        dialoga:false,
        dialoge:false,
        abrir:false,
        usuario : '',
        tipod : '',
        tp_menu : 0,
        menu : [
          {
           menu_alumno: [
          {
            text : "Examenes",
            link : "/alumno",                   
            icon : "mdi-file-document",
          },
         
        ],
          },
          {
        menu_admin: [
           {
            text : "Crear Usuario",
            link : "/crear_usuario",
            icon : "mdi-account-plus"
          }
        ],
          },
          {
        menu_docente: [
          {
            text : "Crear Examen",
            link : "/docente/",
            icon : "mdi-book-plus"
          },
          {
            text : "Listar Examenes",
            link : "/docente/listar",           
            icon : "mdi-file-document",

          },
          
         ],
        }
      ]
      
      }),

mounted() {
 var data = localStorage.getItem("usuario");
 this.usuario = data
 var tipo = localStorage.getItem("tipo");
 this.tipod = tipo
 console.log(tipo)
 if (tipo == 'Alumno')
   this.tp_menu = 0
   else
   if (tipo == 'Admin')
   this.tp_menu = 1
   else
   this.tp_menu = 2

console.log(this.tp_menu)
console.log(this.menu[this.tp_menu])
  
},
      
      }
    
  </script>
  
  <style scoped lang="scss">
  .fondo{
    background-image: url('../assets/fondo.jpg');
  }
  .white-text {
    color: white;
  }

  .gradient-text {
    background: linear-gradient(to right, #f9f5f5, #ffa600);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Belanosima', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 44px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 20px;
  
    a {
      font-weight: bold;
      color: #2c3e50;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
    
    .color{
      background-color: #c98c37;
      color: #c98c37;
    }
  
  }
  .mostrar{
    background-color:#26A69A;
    border-radius: 10px;
  }
  #building{
 
  width:100%;		
  height:100%;	

}
.mostra{
  margin-left: 30px;
}
  </style>