import axios from "axios";

const encherelink = "https://s5final-production.up.railway.app/encheres";
const enchereActuel = "https://s5final-production.up.railway.app/encheres/actuel";
const lastmiselink="https://s5final-production.up.railway.app/encherissement";

class EnchereWS{
    getEnchereList(){
        return axios.get(enchereActuel);
    }
    getEnchereById(idenchere){
        return axios.get(encherelink+'/'+idenchere)
    }
    getLastMise(idenchere){
        return axios.get(lastmiselink+'/'+idenchere+'/'+sessionStorage.getItem("idUtilisateur"))
    }
}
export default new EnchereWS()