import { getUserFromCookies } from "@/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export  async function GET (req:NextRequest,{params}){

    const id = await params.id;
    // console.log(id);
    if(!id){
        return NextResponse.json({
            success:false,
            message:"No id"
        })
    }
    
    try{
        const job = await prismaClient.job.findUnique({
            where:{
                id:id
            }
        })
        if(job){
            return NextResponse.json({
                success:true,
                message:"Here is JoB Details",
                data:job
            })
        }
        else{
             return NextResponse.json({
                success:false,
                message:"No Job found",
                data:job
            })

        }
    }catch(err){
        console.log(err.message);
        return NextResponse.json({
            success:false,
            message:"Job Error"

        })
        
    }

}


