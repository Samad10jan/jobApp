"use client"
import { Button, Card, div, Heading } from "@radix-ui/themes"
import { Label } from "@radix-ui/themes/components/context-menu";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const router=useRouter();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        setIsDisabled(true)

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
        const userData ={ email, password }

        // send data and check if in database if yes exist user, if no new user create
        //"/api/signup" on valid due to client side and server side are from same localhost:3000
        const res = await fetch('/api/signup', {
            method: "POST",
            body: JSON.stringify(userData)
        })


        // console.log(res);

        const data = await res.json();
        const user = data.user

        // console.log(user);

        if(data.success){
            alert(`SignUp`)
            router.push("/")
        }

    }


    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <Heading>SignUp</Heading>
            <Card className="w-[26vw] text-2xl h-[30vh] border rounded w-max  h-[250px] m-3">
                <form onSubmit={handleSubmit} className="*:m-5 *:border *:rounded flex flex-col item-center w-[250px] md:w-[300px]  ">

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


                    <Button type="submit" className="self-center" disabled={isDisabled} >Login</Button>
                </form>
            </Card>
        </main>
    )
}