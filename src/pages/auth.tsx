import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useLogin } from "./api/use-login";

const Auth = () => {
  const [username, setUsername] = useState("demo_patient");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const router = useRouter();
  const toast = useToast();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (username === "demo_patient" && password === "password") {
        router.push("/dashboard");
      } else {
        toast({
          status: "error",
          duration: 3000,
          description: "Invalid credentials",
          position: "top",
        });
      }
    }, 1000);
  };

  return (
    <Box
      fontFamily={"poppins"}
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      alignItems="center"
      justifyContent={"center"}
      bg="rgba(91,140,232,.25)"
    >
      <Box
        bg="white"
        justifyContent={"center"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        px="2rem"
        color={"black"}
        py="5rem"
        boxShadow={"lg"}
        borderRadius={".5rem"}
        width={{ base: "90%", md: "max-content" }}
      >
        <Heading fontFamily={"poppins"} color="#5B73E8" fontWeight={500}>
          MEDIBOX
        </Heading>

        <Text fontFamily={"poppins"} color="grey" textAlign={"center"}>
          Please Sign in to continue
        </Text>
        <form onSubmit={onSubmit}>
          <Box
            margin="auto"
            w="max-content"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Input
              type="text"
              name="username"
              maxW={"80%"}
              height={"3.5rem"}
              placeholder="Username"
              defaultValue={"demo_patient"}
              isRequired
              focusBorderColor="#5B73E8"
              w={{ base: "80%", md: "30rem" }}
              onChange={(e) => setUsername(e.target.value)}
              mt="2rem"
            />

            <InputGroup
              maxWidth={"80%"}
              w={{ base: "80%", md: "30rem" }}
              mt="1rem"
            >
              <Input
                height={"3.5rem"}
                focusBorderColor="#5B73E8"
                bg="white"
                defaultValue={"password"}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement pt="1rem">
                <IconButton
                  variant="unstyled"
                  aria-label="Toggle password visibility"
                  boxSize={6}
                  onClick={togglePasswordVisibility}
                  icon={showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                />
              </InputRightElement>
            </InputGroup>

            <Button
              mt={"2rem"}
              maxWidth={"80%"}
              w={{ base: "80%", md: "30rem" }}
              height={"3.5rem"}
              type={"submit"}
              background={"#5B73E8"}
              color={"white"}
              fontSize={"1rem"}
              _hover={{ transform: "scale(1.01)" }}
            >
              {loading ? <Spinner /> : "Log in"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Auth;
