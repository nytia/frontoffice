import axios from "axios";

const url = "https://s5final-production.up.railway.app/categories";

class CategorieWS{
    getCategories(){
        return axios.get(url);
    }
}
export default  CategorieWS