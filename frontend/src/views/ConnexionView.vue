<script setup>
import Layout from '@/components/Layout.vue'
import axiosInstance from '../../axiosConfig';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const Nom = ref('')
const Telephone = ref('')
const Password = ref('')

const base_url = 'https://tokpelocation-backend.onrender.com/api/auth'
const connexion = async() => {
    try {
    
        const data = {
            Telephone:Telephone.value,
            Password: Password.value
        }
    const response = await axios.get(`/connexion?telephone=${Telephone.value}&password=${Password.value}`);
      router.push('acceuil')
    }catch(error) {
        console.error('error:',error);
    }
};


</script>

<template>
     
 <layout>
    <div class=" bg h-screen flex flex-col justify-center items-center">
        <h1 class=" text-white font-bold text-2xl">CONNEXON</h1>
        
        <form          @submit.prevent="connexion"
         class=" bg-white    p-5 rounded-md">
            <label for="Telephone" class="text-xl ">Telephone</label><br>
            <input type="phone" v-model="Telephone" name="" id="telephone" placeholder="numero de telephone" class="w-80 h-10 
              border-gray-500 border"><br>
            <label for="Password" class="text-xl">Password</label> <br>
            <input type="Password" v-model="Password" name="pass" id="Password" placeholder="votre mot de passe" class="w-80 h-10 
             border-gray-500 border">
            <div class="w-full flex justify-center px-10 p-5 rounded-md">
              <input type="submit" value="SOUMETTRE" class="  text-white   w-30 h-12 bg-green-600">
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