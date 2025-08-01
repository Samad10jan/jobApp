
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function LogOut(){
    
    // const tokenEmail= cookie.get("token")?.value

    async function handleClick(){
        "use server"
        const cookie = await cookies();
        cookie.delete("token");
        

    }
    return(
        
        <Link href={"/"}><Button onClick={handleClick}><ExternalLinkIcon />LogOut</Button></Link>
        
    )
}