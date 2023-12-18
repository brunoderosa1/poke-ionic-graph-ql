<script setup>
import { toRefs } from 'vue'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'

const props = defineProps({
  pokemon: Object
})

const { pokemon } = toRefs(props)

const { name, exp, height, weight, abilities } = pokemon
</script>

<template>
    <ion-card>
    <ion-card-header>
      <ion-card-title>{{ name }}</ion-card-title>
      <ion-card-subtitle>{{ exp }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      Altura: {{ height }}
    </ion-card-content>
    <ion-card-content>
      Peso: {{ weight }}
    </ion-card-content>
    <ion-card-content>
      Habilidades: {{ abilities.join(', ') }}
    </ion-card-content>

</ion-card>
</template>

<style lang="scss" scoped>
    
</style>