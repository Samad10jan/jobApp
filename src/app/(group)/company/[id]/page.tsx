import DeleteBtn from "@/app/components/delete-company";
import data from "@/app/data"
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"
import { notFound } from "next/navigation";

export default async function JobPage({ params }) {
    
    const {id} =await params;
    const res = await fetch("http://localhost:3000/api/company/"+id)
    const data = await res.json();
    // console.log( data);
    
    if(!data?.success){
        notFound()
    }
    const companyDetails = data.data
    return (
        <div >

            <Card className="h-[95vh] m-5">
                <Flex gap="3" align="center">
                    <Avatar
                        size="9"
                        src={companyDetails?.employer_logo}
                        radius="full"
                        fallback={companyDetails.title[0]}
                    />
                    <Box>
                        <Text as="div" size="6" weight="bold">
                            {companyDetails?.title}
                        </Text>
                       
                        <Text as="div" size="2" color="gray">
                           {companyDetails?.description}
                        </Text>
                       
                    </Box>
                    <Box><DeleteBtn id={companyDetails.id}/></Box>
                </Flex>
            </Card>



        </div>
    )
}