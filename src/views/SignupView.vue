<script setup>
   import {ref} from 'vue'

   const Username =ref('john')
   const email = ref('john@gmail.com')
   const password = ref('1233')

   function signup(){
              console.log(Username.value,email.value,password.value)
   }
 </script>
<template>
              <div>
                           <h1>Signup Form</h1>
                          <form @submit="signup">
                            <div>
                                          <input type="text" placeholder="Enter Username" v-model="Username">
                            </div>
                            <div>
                                          <input type="email" placeholder="Enter Email" v-model
                                          ="email">
                            </div>
                            <div>
                                          <input type="password" placeholder="Enter Password" v-model="password">
                            </div>
              <div>
                            
                            <input type="Sign-Up" placeholder="Signup" v-model="signup">
              </div>
                          </form> 
              </div>
</template>