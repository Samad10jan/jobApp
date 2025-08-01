import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default function Middleware(req: NextRequest) {

    const email = req.cookies.get('token')?.value;
    

    const protectedpaths = ["/", "/job", "/search"]
    
    if (protectedpaths.includes(req.nextUrl.pathname)) {

        if (!email) {
            // then redirect user to login page , so user can't access protected paths until sucessful login
            return NextResponse.redirect("http://localhost:3000/login")
        }
    }
    return NextResponse.next(); // if apikey exist in cookies then do next task , which was to redirect to homepage done by server
}

