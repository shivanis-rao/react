import ApiService from "./ApiService"

const login = (email:string,password:string)=>{
    const apiKey= "AIzaSyC0vdHUxgPZ9KByiA6rft4QJR8FHRe1Urw"
    const url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+apiKey;
    const data ={email,password,returnSecureToken:true};
    return ApiService.post(url,data)
};
export default {login};