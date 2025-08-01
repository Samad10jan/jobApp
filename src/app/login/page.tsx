"use client"
import { Button, Card, div, Heading } from "@radix-ui/themes"
import { Label } from "@radix-ui/themes/components/context-menu";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);
    const router=useRouter();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        // client side checks
        // const errObj = {};

        // if (!(email.trim())) {
        //     errObj.email = "Please enter Some Email";
        // }
        // if (!(password.trim())) {
        //     errObj.password = "Please enter Some password";
        // }
        // setError(errObj)
        // console.log(errObj);

        // send data and check if in database or not
        const res = await fetch('http://localhost:3000/api/login', {
            method: "POST",
            body: JSON.stringify({ email, password })
        })


        console.log(res);
        const data = await res.json();
        const user = data.user
        console.log(user);
        if(res.status){
            alert(`${user.role} Logged in`)
            router.push("/")
        }

    }


    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <Heading>LOGIN</Heading>
            <Card className="w-[26vw] text-2xl h-[30vh] border rounded">
                <form onSubmit={handleSubmit} className="*:m-5 *:border *:rounded flex flex-col item-center">

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && <p className="text-red-500">{error.email}</p>}

                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.password && <p className="text-red-500">{error.password}</p>}


                    <Button type="submit" className="self-center">Login</Button>
                </form>
            </Card>
        </main>
    )
}