import NavBar from "@/components/Dashboard/NavBar";
import {
  Box,
  HStack,
  Text,
  VStack,
  Heading,
  SimpleGrid,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import masking from "../../../public/Masking.png";
import Image from "next/image";
import Hamburger from "hamburger-react";

import { useRouter } from "next/router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import MobileNavBar from "@/components/Dashboard/MobileNav";
import axios from "axios";

const data = [
  { time: "9:00", heartRate: 75, bloodOxygen: 98 },
  { time: "10:00", heartRate: 72, bloodOxygen: 97 },
  { time: "11:00", heartRate: 76, bloodOxygen: 98 },
  { time: "12:00", heartRate: 73, bloodOxygen: 99 },
  { time: "13:00", heartRate: 75, bloodOxygen: 98 },
  { time: "14:00", heartRate: 74, bloodOxygen: 97 },
];

const COLORS = ["#48BB78", "#F56565"];

interface AdherenceData {
  name: string;
  value: number;
}

interface HealthMetricsData {
  time: string;
  health_rate: number;
  blood_oxygen: number;
}

const User = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [adherenceData, setAdherenceData] = useState<AdherenceData[]>([]);
  const [healthMetricsData, setHealthMetricsData] = useState<HealthMetricsData[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdherenceData = async () => {
      try {
        const response = await axios.get(
          "https://medibox-server.onrender.com/api/logs/adherence"
        );
        setAdherenceData(response.data);
      } catch (error) {
        console.error("Error fetching adherence data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchMetricsData = async () => {
      try {
        const response = await axios.get(
          "https://medibox-server.onrender.com/api/health"
        );
        setHealthMetricsData(response.data);
      } catch (error) {
        console.error("Error fetching metrics data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdherenceData();
    fetchMetricsData();
  }, []);

  return (
    <>
      <NavBar />
      <MobileNavBar state={isOpen} setState={setOpen} />
      <Box
        paddingLeft={{ base: "0.5rem", lg: "18%" }}
        pr={{ base: "0.5rem", lg: "0rem" }}
        background={"#F3F4FF"}
        overflowY={"scroll"}
        height={"100vh"}
        width={"100%"}
      >
        <Box paddingX={{ base: "0rem", lg: "2rem" }} paddingTop={"2rem"}>
          <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
            <VStack gap={0} alignItems={"flex-start"} pl="1rem">
              <Text
                color={"#303972"}
                fontWeight={700}
                fontSize={{ base: "1.5rem", lg: "1.75rem" }}
              >
                Dashboard
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

          <Box
            mt={"2rem"}
            borderRadius={"1rem"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              height={{ base: "4rem", lg: "10rem" }}
              bg={"#4D44B5"}
              borderTopRadius={"1rem"}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                left={"2rem"}
                top={"5rem"}
                bg={"#C1BBEB"}
                borderRadius={"full"}
                border={"5px solid white"}
                width={"10rem"}
                height={"10rem"}
                display={{ base: "none", lg: "flex" }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Avatar
                  onClick={() => router.push("/dashboard/profile")}
                  cursor={"pointer"}
                  bg={"#4D44B5"}
                  src="https://bit.ly/broken-link"
                  w="8rem"
                  height="8rem"
                />
              </Box>
              <Image src={masking} alt="masking" />
            </Box>
            <Box
              pt={{ base: "3rem", lg: "5rem" }}
              height={{ base: "10rem", lg: "15rem" }}
              bg={"white"}
              borderBottomRadius={"1rem"}
              fontFamily={"poppins"}
            >
              <HStack
                px={{ base: "1rem", lg: "2rem" }}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text
                    color={"#303972"}
                    fontSize={{ base: "1.25rem", lg: "2rem" }}
                    fontWeight={700}
                    display={{ base: "none", lg: "block" }}
                  >
                    PATIENT
                  </Text>
                  <Text
                    fontSize={"1.125rem"}
                    fontWeight={500}
                    color={"#303972"}
                  >
                    <b>Patient ID</b> <br />
                    001
                  </Text>
                </VStack>

                <VStack alignItems={"flex-start"} gap={0}>
                  <Text
                    color={"#303972"}
                    fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                    fontWeight={700}
                  >
                    Age
                  </Text>
                  <Box display={"flex"} alignItems={"center"} gap={".2rem"}>
                    <Text
                      fontSize={"1.125rem"}
                      fontWeight={500}
                      color={"#303972"}
                    >
                      78
                    </Text>
                  </Box>
                </VStack>

                <VStack
                  alignItems={{ base: "flex-end", lg: "flex-start" }}
                  gap={0}
                >
                  <Text
                    color={"#303972"}
                    fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                    fontWeight={700}
                  >
                    Physician
                  </Text>
                  <Text
                    fontSize={"1.125rem"}
                    fontWeight={500}
                    color={"#303972"}
                  >
                    Dr. John Doe
                  </Text>
                </VStack>

                <VStack
                  alignItems={"flex-start"}
                  gap={0}
                  display={{ base: "none", lg: "flex" }}
                >
                  <Text color={"#303972"} fontSize={"1.5rem"} fontWeight={700}>
                    Next scheduled Visitation
                  </Text>
                  <Text
                    fontSize={"1.125rem"}
                    fontWeight={500}
                    color={"#303972"}
                  >
                    Feb 27th, 2025
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
          <Box
            mt={"2rem"}
            borderRadius={"1rem"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box borderTopRadius={"1rem"} height={"4rem"} bg="#4D44B5">
              <Text
                fontWeight={500}
                p={"1rem"}
                color={"white"}
                fontSize={"1.25rem"}
              >
                Health Metrics Visualization
              </Text>
            </Box>
            <Box
              height={"max-content"}
              py="2rem"
              background={"white"}
              borderBottomRadius={"1rem"}
            >
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {/* Heart Rate Graph */}
                <Box
                  p={4}
                  pb="2rem"
                  borderRadius="lg"
                  borderWidth="1px"
                  h="450px"
                >
                  <Heading size="sm" mb={4}>
                    Heart Rate (BPM)
                  </Heading>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthMetricsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[60, 100]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="health_rate"
                        stroke="#E53E3E"
                        strokeWidth={2}
                        dot={{ fill: "#E53E3E" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>

                {/* Blood Oxygen Graph */}
                <Box
                  p={4}
                  pb="2rem"
                  borderRadius="lg"
                  borderWidth="1px"
                  h="450px"
                >
                  <Heading size="sm" mb={4}>
                    Blood Oxygen (%)
                  </Heading>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthMetricsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[90, 100]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="blood_oxygen"
                        stroke="#3182CE"
                        strokeWidth={2}
                        dot={{ fill: "#3182CE" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
          <Box
            mt={"2rem"}
            borderRadius={"1rem"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box borderTopRadius={"1rem"} height={"4rem"} bg="#4D44B5">
              <Text
                fontWeight={500}
                p={"1rem"}
                color={"white"}
                fontSize={"1.25rem"}
              >
                Medication Adherence Metrics
              </Text>
            </Box>
            <Box
              height={"max-content"}
              background={"white"}
              borderBottomRadius={"1rem"}
              mb="2rem"
            >
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={8} my="2rem">
                {/* Medication Adherence Pie Chart */}
                <Box p={4} borderRadius="lg" borderWidth="1px" h="500px">
                  <Heading size="md" mb={4}>
                    Medication Adherence
                  </Heading>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4} w="full">
                    <Stat textAlign="center">
                      <StatLabel>Adherence Rate</StatLabel>
                      <StatNumber color="green.500">
                        {" "}
                        {adherenceData
                          .find((item) => item.name === "Taken")
                          ?.value.toFixed(1)}
                        %
                      </StatNumber>
                    </Stat>
                    <Stat textAlign="center">
                      <StatLabel>Missed Doses</StatLabel>
                      <StatNumber color="red">
                        {adherenceData
                          .find((item) => item.name === "Missed")
                          ?.value.toFixed(1)}
                        %
                      </StatNumber>
                    </Stat>
                  </Grid>
                  <ResponsiveContainer width="100%" height="100%">
                    {loading ? (
                      <Box w="5rem" h="5rem">
                        <Spinner size={"sm"} />
                      </Box>
                    ) : (
                      <PieChart>
                        <Pie
                          data={adherenceData}
                          cx="50%"
                          cy="40%"
                          innerRadius={80}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, value }) =>
                            `${name}: ${value.toFixed(1)}%`
                          }
                        >
                          {adherenceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    )}
                  </ResponsiveContainer>
                </Box>

                {/* Time-based Adherence Bar Chart */}
                {/* <Box
                  p={4}
                  pb="2rem"
                  borderRadius="lg"
                  borderWidth="1px"
                  h="500px"
                >
                  <Heading size="sm" mb={4}>
                    Time-based Adherence
                  </Heading>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={timeAdherenceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="taken" name="Taken" fill="#48BB78" />
                      <Bar dataKey="missed" name="Missed" fill="#F56565" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box> */}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default User;
