import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


// FETCH data from the API

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'a7a1489605msh7c26a388f1b5904p124f03jsnb3e1a3136bec',
        },
    });

    return data;
}