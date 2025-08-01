import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";
import Header from "../components/header";

export default async function Layout({children}){
    const userCookies = await cookies();
    const tokenEmail= userCookies.get("token")?.value
    console.log(tokenEmail);
    
// const user={}
    const user = await prismaClient.user.findUnique({
        where:{
            email:tokenEmail
        }
    })
    return(
        <div>
            <Header user={user}/>
            {children}
        </div>
    )


}