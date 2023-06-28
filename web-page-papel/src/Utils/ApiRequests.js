import axios from "axios";

export async function getDataFromAPI() {
    try {
        const result = await axios.get(
            //aqui metes tu URL, reemplazas este string por la URL del API
            'http://127.0.0.1:8000/'
        );
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}