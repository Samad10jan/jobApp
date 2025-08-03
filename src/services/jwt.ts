//@ts-nocheck
import jwt from "jsonwebtoken";

export function createToken(data){
    console.log("data",data.id);
    
    const token = jwt.sign(data.id,process.env.KEY)
    return token;
}

export function verifyToken(token){
    try{

        const verifytoken = jwt.verify(token,process.env.KEY)
        console.log(verifytoken);
        
        return verifytoken;
    }catch(err){
        console.log(err.message);
        return null
        
    }
}