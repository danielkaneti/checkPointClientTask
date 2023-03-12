 
 import axios from 'axios';

 export const getAllstudent= async()=>{
    try {
        const response= await axios.get("http://localhost:8080/users");
        console.log(response.data);
        return response.data;
    } catch (error) {
        return [];
    }
    return [];
 }

 export const getAllExcellentstudent= async()=>{
    try {
        const response= await axios.get("http://localhost:8080/excellentusers");
        console.log(response.data);
        return response.data;
    } catch (error) {
        return [];
    }
    return [];
 }


 export const addStudent= async(user)=>{
    try {
        const response = await axios.post("http://localhost:8080/user",user);
        
    } catch (error) {
        console.error(error)
    }
 }


 export const deleteStudent= async(id)=>{
    try {
      const    response = await axios.delete(`http://localhost:8080/user${id}`);
        
    } catch (error) {
        console.error(error)
    }
 }

 export const updateStudent= async(id,user)=>{
    try {
        const response = await axios.put(`http://localhost:8080/user/${id}`,user);
        
    } catch (error) {
        console.error(error)
    }
 }