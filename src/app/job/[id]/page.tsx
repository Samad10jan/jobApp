import data from "@/app/data"
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"
import { notFound } from "next/navigation";

export default async function JobPage({ params }) {
    
    const {id} =await params;
    const res = await fetch("http://localhost:3000/api/job/"+id)
    const data = await res.json();
    // console.log(data);
    
    if(!data?.success){
        notFound()
    }
    const jobDetail = data.data
    return (
        <div >

            <Card className="h-[95vh] m-5">
                <Flex gap="3" align="center">
                    <Avatar
                        size="9"
                        src={jobDetail?.employer_logo?jobDetail?.employer_logo:"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"}
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="6" weight="bold">
                            {jobDetail?.title}
                        </Text>
                        <Text as="div" size="2" color="gray">
                           {jobDetail?.employment_type}
                        </Text>
                         <Text as="div" size="2" color="gray">
                           {jobDetail?.salary}
                        </Text>
                        <Text as="div" size="2" color="gray">
                           {jobDetail?.job_type}
                        </Text>
                        <Text as="div" size="2" color="gray">
                           {jobDetail?.location}
                        </Text>
                    </Box>
                </Flex>
            </Card>



        </div>
    )
}