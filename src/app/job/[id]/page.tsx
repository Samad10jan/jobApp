import data from "@/app/data"
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"

export default function JobPage({ params }) {
    const id = decodeURIComponent(params.id)
    const job = data?.data
    const jobDetail = job.find((job) => {
        if (job.job_id === id) return true
    })
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
                            {jobDetail?.job_title}
                        </Text>
                        <Text as="div" size="2" color="gray">
                           {jobDetail?.employer_name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                           {jobDetail?.job_description}
                        </Text>
                        <Text as="div" size="2" color="gray">
                           {jobDetail?.job_title}
                        </Text>
                    </Box>
                </Flex>
            </Card>



        </div>
    )
}