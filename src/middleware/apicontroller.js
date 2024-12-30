import axiosInstance from "./Axiousinstance";


export const addUser= async(payload)=>{
    try{
        const res=await axiosInstance.post("users/signup", payload);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}
export const loginUser= async(payload)=>{
    try{
        const res = await axiosInstance.post('users/login', payload);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}
export const expenceList= async()=>{
    try{
        const res = await axiosInstance.get('expences/allexpence');
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}
export const expenceAdd= async(payload)=>{
    try{
        const res = await axiosInstance.post('expences/addexpence',payload);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}

export const getExpenceById = async (id) => {
    try{
        const response = await axiosInstance.get(`/expences/singleexpence/${id}`);
    return response.data;

    }
    catch(e){
        console.log(e);
    }
  };
  export const expenceUpdate= async(id,payload)=>{
    try{
        const res = await axiosInstance.put(`/expences/updateexpence/${id}`,payload);
        return res.data;
    }
    catch(e){
        console.log(e);
    }
}  