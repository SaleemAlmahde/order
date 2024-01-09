import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

async function get(path){
    let res={}
    await axios.get(API_URL + path).then(async function (response){
        res.status= response.status
        res.data= response.data
        res.error= null
    }).catch(function(error){
        res.status= error.status
        res.data= null
        res.error= error.error
    })
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    return res
}

export let axiosService = {
    get
}