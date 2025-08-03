"use client"
import { Link1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, Card, IconButton, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import LogOut from "./logout-btn";
import AvatarMenu from "./avatar-menu";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../(group)/layout";

export default function Header() {
    const { user } = useContext(UserContext)
    const [suggestions, setSuggestions] = useState([])
    const [searchq, setSearchq] = useState("")
    const [isDisable, setIsDisable] = useState(true)

    useEffect(() => {
        async function getSuggesstion() {
            const res = await fetch("http://localhost:3000/api/sugesstions?q=" + searchq)
            const data = await res.json()
            if (data.success) {
                setSuggestions(data.data)
            }

        }
        // debouncing
        // useEffect on change of searchq it will firts call return statement(clerr x time and yes setTimeout return some time) then if user will have waited 1000ms then getSugesstion() fun will run
        let x;
        // kuch input me ho to chlao na to mat chlao
        if (searchq) {
            x = setTimeout(() => {
                getSuggesstion()

            }, 400)

        }

        else {
            setSuggestions([]);
        }

        return () => {
            if (x) clearTimeout(x);
        }
    }, [searchq])


    return (
        <header className="bg-emerald-800 h-[5em] flex gap-5 justify-between w:full sticky top-0 z-1">


            <div className="flex items-center mx-3 gap-5">

                <Link className="md:text-3xl text-2xl text-white  font-serif " href={"/"}>Job App</Link>

                <form className="flex items-center relative " action={`/search`}>

                    <TextField.Root placeholder="Search the docs…" name="q" onChange={(e) => { setSearchq(e.target.value) }}>
                        <TextField.Slot >
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                    <IconButton color="green">
                        <MagnifyingGlassIcon width="20" height="20" />
                    </IconButton>
                    <div className="absolute  top-14 ">
                        {
                            suggestions.length > 0 &&
                            <Card className=" bg-black text-white z-1 rounded " >
                                {
                                    suggestions.map((sugg) => {
                                        return <div key={sugg.id} className="turncate"> {sugg.title}</div>
                                    })
                                }
                            </Card>
                        }
                    </div>
                </form>

            </div>


            <div className="m-5 disabled:true">
                {
                    user?.email ?

                        <div className="flex gap-3 items-center ml-3">  <div><AvatarMenu user={user} /></div> </div>
                        :
                        <Link href={"/login"} className="w-15 h-9 bg-emerald-700 p-2 m-5 rounded " > Login</Link>
                }
            </div>

        </header>
    )
}
