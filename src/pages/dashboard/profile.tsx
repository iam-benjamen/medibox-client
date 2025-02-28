import MobileNavBar from "@/components/Dashboard/MobileNav";
import NavBar from "@/components/Dashboard/NavBar";
import PatientProfile from "@/components/patientProfile";
import { PatientData } from "@/types/types";
import {
  Avatar,
  Box,
  VStack,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  useToast,
  Divider,
  Stack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { useState } from "react";

const samplePatientData: PatientData = {
  id: "1",
  name: "Areo Benjamen",
  age: 78,
  phone: "+234567890789",
  email: "areo.ben@email.com",
  photoUrl: "",
  bloodType: "O+",
  allergies: "Penicillin, Peanuts",
  currentMedications: "Lisinopril 10mg\nMetformin 500mg",
  medicalConditions: "Hypertension\nType 2 Diabetes",
  emergencyContact: {
    name: "Areo Jane",
    relationship: "Spouse",
    phone: "+23487654321",
  },
};

const Profile = () => {
  const toast = useToast();
  const router = useRouter();

  const handleSave = () => {
    // onSave(formData);
    toast({
      title: "Profile Updated",
      status: "success",
      duration: 3000,
    });
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <NavBar />
      <MobileNavBar state={isOpen} setState={setOpen} />

      <Box
        width={"100%"}
        height={"100vh"}
        paddingLeft={{ base: "0.5rem", lg: "18%" }}
        pr={{ base: "0.5rem", lg: "0rem" }}
        overflowY={"scroll"}
        background={"#F3F4FF"}
      >
        <Box paddingX={{ base: "0rem", lg: "2rem" }} paddingTop={"2rem"}>
          <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
            <VStack gap={0} alignItems={"flex-start"}>
              <Text
                color={"#303972"}
                fontWeight={700}
                fontSize={{ base: "1.5rem", lg: "1.75rem" }}
              >
                Profile
              </Text>
              <Text color={"#303972"} fontWeight={"500"}>
                {new Date().toDateString()}
              </Text>
            </VStack>

            <Box display={{ base: "block", lg: "none" }}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </Box>
            <Box
              display={{ base: "none", lg: "flex" }}
              alignItems={"center"}
              gap={"1rem"}
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                gap={0}
                alignItems={"flex-end"}
              >
                <Text color={"#303972"} fontSize={"1.35rem"} fontWeight={500}>
                  DEMO PATIENT
                </Text>
                <Text color={"#303972"}>Patient 001</Text>
              </Box>
              <Avatar
                onClick={() => router.push("/dashboard/profile")}
                cursor={"pointer"}
                bg={"#4D44B5"}
                src="https://bit.ly/broken-link"
              />
            </Box>
          </Box>
        </Box>

        <PatientProfile patientData={samplePatientData} onSave={handleSave} />
      </Box>
    </>
  );
};

export default Profile;
