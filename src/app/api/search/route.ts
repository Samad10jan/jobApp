import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){

    const searchParams = req.nextUrl.searchParams;
    
    const q= searchParams.get('q')||"";
    const jt=searchParams.get('jt')||""
    const et =searchParams.get("et")||""
    //limit=10
    // take:limit
    // skip:(page-1)*10

    const job = await prismaClient.job.findMany({
        where:{
            title:{
                contains:q,
                mode:"insensitive"
            },
            job_type: jt,
            employment_type:et,
            
        },
        

    })
    if(!job){

        return NextResponse.json(
            {
                success:true,
                message:" not ok",
                data:job
            }
        )
    }
     return NextResponse.json(
            {
                success:true,
                message:"ok",
                data:job
            }
        )
}