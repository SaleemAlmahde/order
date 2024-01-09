import { axiosService } from "./axios.service";

async function getAll() {
    let result={}
    const res = await axiosService.get("users")
    console.log(res)
    if(res.status == 200){
        result.error= null;
        result.data= res.data
    } else {
        result.error= res.error
        result.data= null
    }
    console.log(result)
    return result
    
}

export let categoryService = {
    getAll
}