import { Avatar, DropdownMenu } from "@radix-ui/themes";
import { Label } from "@radix-ui/themes/components/dropdown-menu";
import Link from "next/link";
import LogOut from "./logout-btn";

export default function AvatarMenu({ user }) {
    
    
    return (
        <div className="hover:cursor-pointer ">
            <DropdownMenu.Root >

                <DropdownMenu.Trigger >


                    <Avatar
                        size={"4"}
                        src={user?.avatar}
                        fallback={user.email[0]}

                    />

                </DropdownMenu.Trigger>


                <DropdownMenu.Content className=" relative right-1.5">
                    <DropdownMenu.Item>{user.email}</DropdownMenu.Item>
                    {
                        ( user.company?.id)

                        &&
                        <div>
                            <DropdownMenu.Item shortcut="⌘ A">Add Job</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                           <Link href={"/company/" +user.company.id}> <DropdownMenu.Item shortcut="⌘ D">MY Company</DropdownMenu.Item></Link>
                        </div>
                    }
                    {
                        (!user.company)

                        &&

                       <Link href={"/add-company"}><DropdownMenu.Item shortcut="⌘ D">Add Company</DropdownMenu.Item></Link> 
                    }
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent>
                            <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                            <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Share</DropdownMenu.Item>
                    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                    <DropdownMenu.Separator/>
                     {
                        (user?.id.length>0)

                        &&
                        <div>
                            <LogOut/>
                        </div>
                    }

                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
}