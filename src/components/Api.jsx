import axios from 'axios';

const url = `https://obscure-journey-05478.herokuapp.com/api/get-stalls`;

export const fetchData = async ( country ) => {
    var changeableUrl = url;

    try{
        const { data } = await axios.get(changeableUrl);
            
        return data;
    } catch (err) {
        console.log(err)
    }
}