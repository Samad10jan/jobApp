import { Link1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, IconButton, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import LogOut from "./logout-btn";
import AvatarMenu from "./avatar-menu";

export default function Header({ user }: { user: object }) {
    return (
        <header className="bg-emerald-800 h-[5em] flex gap-5 justify-between w-full">

            <div className="flex gap-5">

                <p className="text-3xl m-5 font-serif truncate">Job App</p>

                <form className="flex items-center" action={`/search`}>

                    <TextField.Root placeholder="Search the docs…" name="q">
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                    <IconButton color="green">
                        <MagnifyingGlassIcon width="20" height="20" />
                    </IconButton>
                </form>
            </div>

            <div  className=" m-5">
                {
                    user?.email ?

                        <div className="flex gap-3 items-center"> <div><LogOut /></div> <div><AvatarMenu user={user} /></div> </div>
                        :
                        <Link href={"/login"} className="w-15 h-9 bg-blue-600 p-2 m-5 rounded "> Login</Link>
                }
            </div>



        </header>
    )
}