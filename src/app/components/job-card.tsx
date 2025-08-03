import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function JobCard({ item }) {
  return (
    <div className="m-4">
      <Box className="transition-transform duration-200 ease-in-out hover:scale-110">
        <Card className="md:w-[25em] w-fit h-auto min-h-[20em]">
          <Flex gap="3" direction="column" align="center" className="p-4">
            <Avatar
              src={item.employer_logo}
              radius="full"
              fallback={item.title[0]}
              className="md:size-24 size-12"
            />
            <Box className="text-center">
              <Text
                as="div"
                weight="bold"
                className="text-sm md:text-lg line-clamp-2"
              >
                {item.title}
              </Text>
            </Box>
            <Box className="text-center px-2">
              <Text
                as="div"
                color="gray"
                className="text-xs md:text-base line-clamp-3 md:line-clamp-5"
              >
                {item.description}
              </Text>
            </Box>
            <Flex justify="center" gap="4" className="pt-2">
              <Link href={`job/${item.id}`}>
                <Button className="text-sm md:text-base">More details</Button>
              </Link>
              <Button className="text-sm md:text-base">Save Job</Button>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </div>
  );
}
