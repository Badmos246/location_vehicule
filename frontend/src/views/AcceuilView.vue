<script setup>
import Layout from '@/components/Layout.vue'
import myImage from '@/assets/images/logo-removebg-preview.png';
import myImage1 from '@/assets/images/mini_bus15-removebg-preview.png';
import myImage2 from '@/assets/images/autobus-renault-removebg-preview.png';
import myImage3 from '@/assets/images/autobus-1__1_-removebg-preview.png';
import myImagf from '@/assets/images/vehicule_bg-removebg-preview.png';
import { useRouter } from 'vue-router';

const router = useRouter()


</script>

<template setup  >
<layout >
    div
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
    <div  class="bg">
    <div  class=" text-black font-extrabold text-7xl w-[450px] relative top-20 left-20 ">
       <h1> Voyager <br>
          <span class="left-20 relative top-4">En Confiance</span> 
      </h1>
    </div>
       
        <div class="w-96 text-sm  relative top-[100px] left-44 font-thin ">
            <h5>Des camions robustes, des bus speciaux, et
             des minibus confortables pour tous besoins de transport. 
             </h5>
        </div>
        <div class="w-96 text-sm ml-10 relative top-[130px] left-32 space-x-5 font-thin ">
            <RouterLink to="/reservation"><button value="Reservez maintenant" 
            class="bg-black h-14 w-40 text-white rounded-md">Reservez maintenant</button></RouterLink>
            <RouterLink to="/catalogue"><button value="Voir nos vehicules" 
            class="bg-white w-36 text-black h-14 border-solid border
            border-black rounded-md font-bold" > Voir nos vehicules</button></RouterLink>

        </div>
        <div class=" flex  gap-3 px-4 py-4 grid-cols-3 relative left-[60px] bg-blue-300 mt-[200px]  mb-9">
            <div class="text-black w-1/3 text-xl flex flex-col bg-slate-100 px-3 py-5 rounded-md gap-4">
                <span class=" font-extrabold"> <span class=" bg-amber-400 px-2 py-2 rounded-xl">01</span> TEMITOKPE location a des priorités</span>
                <p>
                    Une de nos priorités principales consiste <br> à adapter
                    chaque forfait que nous proposons aux besoins <br>précis de nos clients.
                    Nous offrons une variété d'options qui peuvent <br>améliorer votre expérience,
                    toujours selon vos besoins.<br>
                </p>
            </div> 
            <div class="text-black w-1/3 text-xl flex flex-col bg-slate-100 px-3 py-5 rounded-md gap-4">
                 <span class=" font-extrabold"><span class=" bg-amber-400 px-2 py-2 rounded-xl">02</span> Réservez en toute sécurité</span>
                <p>
                    Notre moteur de réservation intelligent recherche le prix meilleur ,<br>
                    la catégorie de votre bus et de votre camion, des offres exclusives et <br>
                    des réductions correspondant à vos besoins. <br> Vous pouvez réserver en ligne
                    en toute sécurité avec un petit acompte et
                    payer le reste à votre arrivée au bureau!
                </p>
            </div>
            <div class="text-black w-1/3 text-xl flex flex-col bg-slate-100 px-3 py-5 rounded-md gap-4">
                 <span class=" font-extrabold"><span class=" bg-amber-400 px-2 py-2 rounded-xl mr-1">03</span>Experts principaux</span>
                <p>
                    Temitokpe location a fourni à des millions de clients <br>
                     le meilleur prix garanti possible . <br>
                    Nous vous invitons à devenir notre prochain client satisfait. <br>
                </p>
            </div>
        </div>
    </div>
</layout>
     
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
*{
    font-family: "Nunito";
}

.bg{
    background-image: url('src/assets/images/vehicule_bg-removebg-preview.png');
    position: relative;
    background-position-x: right;
    background-repeat: no-repeat;
    right: 60px;
    bottom: 20px;
}
</style>