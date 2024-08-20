<script setup>
import Layout from '@/components/Layout.vue'
import axios from 'axios'
import { ref } from 'vue'

import { useRouter } from 'vue-router';

const router = useRouter() 

const Nom = ref('')
const Prenom = ref('')
const Telephone = ref('')
const Date_naissance = ref('')
const Password = ref('')
const mail = ref('')


const base_url = 'http://localhost:3010/api/auth'
const inscription = async() => {
    try {
    
        const data = {
            Nom: Nom.value,
            Prenom:Prenom.value,
            Telephone: Telephone.value,
            Date_naissance: new Date(Date_naissance.value).toJSON(),
            Password:Password.value,
            mail : mail.value 
        }
        const response = await axios.post(`${base_url}/inscription`,data);
        router.push('connexion')
    }catch(error) {
        console.error('error:',error);
    }
};

</script>

<template>

<layout>
  <div class=" bg h-screen flex flex-col justify-center items-center">
    <h1 class=" text-white font-bold text-2xl ">INSCRIPTION</h1>
    
        <form action="" 
         @submit.prevent="inscription"
        class=" bg-white p-5  rounded-md w-96 ">
            <label for="Nom" class="font-medium ">Nom</label><br>
            <input type="text" v-model="Nom" name="Nom" id="Nom" placeholder="entrer votre nom"
             class="  w-80 h-10  border-gray-500 border-2"><br>
            <label for="Prenom "  class="font-medium ">Prenom</label><br>
            <input type="text" v-model="Prenom" name="Prenom" id="Prenom" placeholder="entrer votre Prenom"
             class=" w-80 h-10  border-gray-500 border-2"><br>
            <label for="phone"  class="font-medium"> Telephone</label> <br>
            <input type="phone" v-model="Telephone" name="phone" id="telephone" placeholder="numero de telephone" 
            class=" w-80 h-10  border-gray-500 border-2"><br>
            <label for="naissance"  class="font-medium ">Date de naissance</label> <br>
            <input type="date" v-model="Date_naissance" name="birth" id="birthday" placeholder="date de naissance" 
            class=" w-80 h-10  border-gray-500 border-2 "><br>
            <label for="mail" class=" text-xl"> email</label> <br>
            <input type="email" v-model="mail" name="email" id="email" placeholder="votre email" 
            class="w-80 h-10   border-gray-500 border-2"> <br>
            <label for="password"  class="font-medium ">Mot de passe</label>
            <input type="password" v-model="Password" name="pass" id="password" placeholder="votre mot de passe" 
            class=" w-80 h-10  border-gray-500 border-2"> <br>
            <div class="w-full flex justify-center px-10 p-5 rounded-md">
              <input type="submit" value="SOUMETTRE"  class=" text-white w-30 h-12 bg-green-600">
            </div>
        </form>
    </div>
    
  
</layout>
    
</template>

<style scoped>

   @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    *{
      font-family: "Nunito";
  }
  input{
    border-radius: 5px;
  }


    .bg{
    background-image: url(@/assets/images/Minibus-Gallery-3-removebg-preview.png);
    background-repeat: no-repeat;
    background-size: cover;
}

</style>