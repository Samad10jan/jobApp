import { Avatar, DropdownMenu } from "@radix-ui/themes";
import { Label } from "@radix-ui/themes/components/dropdown-menu";

export default function AvatarMenu({ user }) {
    return (
        <div className="hover:cursor-pointer">
            <DropdownMenu.Root >

                <DropdownMenu.Trigger>


                    <Avatar
                        size={"4"}
                        src={user?.avatar}
                        fallback={user.email[0]}
                    />

                </DropdownMenu.Trigger>
                
               

                <DropdownMenu.Content>
                     <DropdownMenu.Item>{user.email}</DropdownMenu.Item>
                    {
                        (user?.role == "admin")

                        &&

                        <DropdownMenu.Item shortcut="⌘ A">Add Job</DropdownMenu.Item>
                    }
                    <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
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
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                        Delete
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
}