import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsHospital, BsBook, BsPersonFill } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { BiLogOutCircle } from "react-icons/bi";
import { useRouter } from "next/router";

interface MobileNavBarProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const MobileNavBar = ({ state, setState }: MobileNavBarProps) => {
  const router = useRouter();
  return (
    <Box
      width={"70%"}
      height={"100vh"}
      top={0}
      left={0}
      color={"#F3F4FF"}
      position={"absolute"}
      background={"#4D44B5"}
      display={{ base: state ? "flex" : "none", lg: "none" }}
      flexDir={"column"}
      fontFamily={"poppins"}
      alignItems={"center"}
      zIndex={100}
    >
      <Text fontSize={"2rem"} fontWeight={700} pt="1rem">
        MEDIBOX
      </Text>

      <VStack mt={"2rem"} w="100%" gap={"1.5rem"} alignItems={"flex-end"}>
        <Box
          py={"1rem"}
          pl={"2rem"}
          borderLeftRadius={"full"}
          w={"90%"}
          cursor={"pointer"}
          display={"flex"}
          alignItems={"center"}
          border={"1px solid"}
          gap={".6rem"}
          color={router.pathname === "/dashboard" ? "#4D44B5" : "#F3F4FF"}
          bg={router.pathname === "/dashboard" ? "#F3F4FF" : ""}
          onClick={() => {
            setState(false);
            router.pathname !== "/dashboard" && router.push("/dashboard");
          }}
        >
          <AiOutlineHome fontSize="1.5rem" />
          <Text fontSize={"1.2rem"} fontWeight={500} pt={".1rem"}>
            Home
          </Text>
        </Box>

        <Box
          py={"1rem"}
          pl={"2rem"}
          borderLeftRadius={"full"}
          _hover={{ bg: "#F3F4FF", color: "#4D44D5" }}
          w={"90%"}
          cursor={"pointer"}
          display={"flex"}
          alignItems={"center"}
          gap={".6rem"}
          border={"1px solid"}
          color={router.pathname === "/dashboard/logs" ? "#4D44B5" : "#F3F4FF"}
          bg={router.pathname === "/dashboard/logs" ? "#F3F4FF" : ""}
          onClick={() => {
            setState(false);
            router.pathname !== "/dashboard/logs" &&
              router.push("/dashboard/logs");
          }}
        >
          <ImBlog fontSize="1.5rem" />
          <Text fontSize={"1.2rem"} fontWeight={500} pt={".1rem"}>
            Medication Logs
          </Text>
        </Box>

        <Box
          py={"1rem"}
          pl={"2rem"}
          w={"90%"}
          cursor={"pointer"}
          display={"flex"}
          gap={".6rem"}
          border={"1px solid"}
          alignItems={"center"}
          borderLeftRadius={"full"}
          _hover={{ bg: "#F3F4FF", color: "#4D44D5" }}
          color={
            router.pathname === "/dashboard/profile" ? "#4D44B5" : "#F3F4FF"
          }
          bg={router.pathname === "/dashboard/profile" ? "#F3F4FF" : ""}
          onClick={() => {
            setState(false);
            router.pathname !== "/dashboard/profile" &&
              router.push("/dashboard/profile");
          }}
        >
          <BsPersonFill fontSize="1.5rem" />
          <Text fontSize={"1.2rem"} fontWeight={500} pt={".1rem"}>
            Patient Profile
          </Text>
        </Box>

        <Box
          _hover={{ color: "red.500" }}
          position={"absolute"}
          bottom={0}
          py={"1rem"}
          pl={"2rem"}
          borderRadius={"full"}
          color={"#F3F4FF"}
          w={"80%"}
          margin={"auto"}
          cursor={"pointer"}
          display={"flex"}
          alignItems={"center"}
          gap={".6rem"}
          onClick={() => router.push("/auth")}
        >
          <BiLogOutCircle fontSize="1.5rem" />
          <Text fontSize={"1.2rem"} fontWeight={500} pt={".1rem"}>
            Log out
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default MobileNavBar;
