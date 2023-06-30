import axios from "axios";

export async function getDataPerYear(year) {
    try {
        const result = await axios.get(
            //aqui metes tu URL, reemplazas este string por la URL del API
            `http://127.0.0.1:8000/items/${year}`
        );
        //console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getDataAntioquia() {
    try {
        const result = await axios.get(
            //aqui metes tu URL, reemplazas este string por la URL del API
            'http://127.0.0.1:8000/antioquia-data'
        );
        //console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getDataAño(sitio) {
    try {
        const result = await axios.get(
            //aqui metes tu URL, reemplazas este string por la URL del API
            `http://127.0.0.1:8000/dominio-geografico/${sitio}`
        );
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}