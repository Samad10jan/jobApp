import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        const data = prismaClient.job.create({
            data:body
        })

        return NextResponse.json({
            success: true,
            job:data,
            message:"Done bro"
        })
    }catch(err){
        return NextResponse.json({
            success: false,
            message:"NOi"
        })
    }

    
}