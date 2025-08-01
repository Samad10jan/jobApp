import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function JobCard({ item }) {
    return (
        <div className="m-[1em]  ">

            <Box maxWidth="30em" className="transition-transform duration-300 ease-in-out hover:scale-115" >
                <Card className="w-[25em] h-[25em]">
                    <Flex gap="3" align="center" className="flex flex-col p-4 ">
                        <Avatar
                            size="6"
                            src={item.employer_logo }
                            radius="full"
                            fallback={(item.title)[0]}
                        />
                        <Text className=" text-center line-clamp-1">{item.job_title}</Text>
                        <Box>
                        <Text as="div" size="2" weight="bold">

                            {item.title}
                        </Text>
                        </Box>
                        <Box>
                            <Text as="div" size="2" color="gray" className="line-clamp-8">
                                {item.description}
                            </Text>
                        </Box>
                        <Flex justify={"between"} gap={"5px"}>
                        <Link href={`job/`+ item.job_id}><Button className="m-[1em]">More details - </Button></Link>
                        <Button className="m-[1em]">Save Job </Button>
                        </Flex>
                    </Flex>
                </Card>

            </Box>



        </div>
    )

}