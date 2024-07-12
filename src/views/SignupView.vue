<script setup>
   import {ref} from 'vue'

   const Username =ref('john')
   const email = ref('john@gmail.com')
   const password = ref('1233')

   function signup(){
              console.log('${Username.value} ${email.value}${password.value}');
              // connect to your API 
              // axios.post(url,value)
   }
 </script>
<template>
              <v-sheet
              class="mx-auto pa-12 mt-5"
              max-width="500"
              elevation="12">
                            <v-form @submit.prevent="signup">
                                          <v-text-field 
                                          v-model="Username"
                                          label="Enter Username"
                                          type="text"
                                          variant="outlined"></v-text-field>
                                          <v-text-field 
                                          v-model="email"
                                          label="Enter Email"
                                          type="email"
                                          variant="outlined"></v-text-field>
                                          <v-text-field
                                          v-model="password"
                                          label="Enter Password"
                                          type="password"
                                          variant="outlined"></v-text-field>
                                         
                                          <v-btn 
                                          color="green"
                                          density="comfortable"
                                          rounded="sm"
                                          elevation="12"
                                          type="Submit"
                                          >signup</v-btn>
                            </v-form>
              </v-sheet>
</template>