// importiamo il componente store 
import { reactive } from 'vue';
// creiamo una bacheca , una fonte condivisa tra i vari componenti
export const store = reactive({
    // in questo caso specifico creiamo un array vuoto
    cardsArray: [],
    typeArray: [],
    selectType: [] ,
});