import MobileNavBar from "@/components/Dashboard/MobileNav";
import NavBar from "@/components/Dashboard/NavBar";
import {
  Box,
  Text,
  VStack,
  Avatar,
  useToast,
  Badge,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Select,
  HStack,
  Input,
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { useState } from "react";

const medicationLogs = [
  {
    id: "1",
    timestamp: "2024-02-21T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "2",
    timestamp: "2024-02-21T20:00:00Z",
    taken: false,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "3",
    timestamp: "2024-02-20T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "4",
    timestamp: "2024-02-20T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "5",
    timestamp: "2024-02-19T08:00:00Z",
    taken: false,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "6",
    timestamp: "2024-02-19T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "7",
    timestamp: "2024-02-18T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "8",
    timestamp: "2024-02-18T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "9",
    timestamp: "2024-02-17T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "10",
    timestamp: "2024-02-17T20:00:00Z",
    taken: false,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "11",
    timestamp: "2024-02-16T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "12",
    timestamp: "2024-02-16T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "13",
    timestamp: "2024-02-15T08:00:00Z",
    taken: false,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "14",
    timestamp: "2024-02-15T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "15",
    timestamp: "2024-02-14T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "16",
    timestamp: "2024-02-14T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "17",
    timestamp: "2024-02-13T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "18",
    timestamp: "2024-02-13T20:00:00Z",
    taken: false,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "19",
    timestamp: "2024-02-12T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "20",
    timestamp: "2024-02-12T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "21",
    timestamp: "2024-02-11T08:00:00Z",
    taken: false,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "22",
    timestamp: "2024-02-11T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "23",
    timestamp: "2024-02-10T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "24",
    timestamp: "2024-02-10T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "25",
    timestamp: "2024-02-09T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "26",
    timestamp: "2024-02-09T20:00:00Z",
    taken: false,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "27",
    timestamp: "2024-02-08T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "28",
    timestamp: "2024-02-08T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "29",
    timestamp: "2024-02-07T08:00:00Z",
    taken: false,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "30",
    timestamp: "2024-02-07T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "31",
    timestamp: "2024-02-06T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "32",
    timestamp: "2024-02-06T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "33",
    timestamp: "2024-02-05T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "34",
    timestamp: "2024-02-05T20:00:00Z",
    taken: false,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "35",
    timestamp: "2024-02-04T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "36",
    timestamp: "2024-02-04T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "37",
    timestamp: "2024-02-03T08:00:00Z",
    taken: false,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "38",
    timestamp: "2024-02-03T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "39",
    timestamp: "2024-02-02T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "40",
    timestamp: "2024-02-02T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "41",
    timestamp: "2024-02-01T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "42",
    timestamp: "2024-02-01T20:00:00Z",
    taken: false,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "43",
    timestamp: "2024-01-31T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "44",
    timestamp: "2024-01-31T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "45",
    timestamp: "2024-01-30T08:00:00Z",
    taken: false,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "46",
    timestamp: "2024-01-30T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "47",
    timestamp: "2024-01-29T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "48",
    timestamp: "2024-01-29T20:00:00Z",
    taken: true,
    description: "Evening dose - Metformin 500mg",
  },
  {
    id: "49",
    timestamp: "2024-01-28T08:00:00Z",
    taken: true,
    description: "Morning dose - Lisinopril 10mg",
  },
  {
    id: "50",
    timestamp: "2024-01-28T20:00:00Z",
    taken: false,
    description: "Evening dose - Metformin 500mg",
  },
];
const Logs = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const toast = useToast();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const handleRequery = (logId: string) => {
    // Add your requery logic here
    console.log(logId);
    toast({
      title: "Requery sent",
      status: "success",
      duration: 3000,
    });
  };

  return (
    <>
      <MobileNavBar state={isOpen} setState={setOpen} />
      <NavBar />

      <Box
        width={"100%"}
        pr={{ base: "0.5rem", lg: "0rem" }}
        paddingLeft={{ base: "0.5rem", lg: "18%" }}
        height={"100vh"}
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
                Medication Logs
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

        <Card mt="1rem">
          {/* <CardHeader>
            <Heading size="md">Medication Logs</Heading>
          </CardHeader> */}
          <CardBody>
            <Box overflowX="auto">
              <Table>
                <Thead>
                  <Tr>
                    <Th>S/N</Th>
                    <Th>Date</Th>
                    <Th>Time</Th>
                    <Th>Status</Th>
                    <Th>Description</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {medicationLogs.map((log, index) => (
                    <Tr key={log.id}>
                      <Td>{index + 1}</Td>
                      <Td>{formatDate(log.timestamp)}</Td>
                      <Td>{formatTime(log.timestamp)}</Td>
                      <Td>
                        <Badge colorScheme={log.taken ? "green" : "red"}>
                          {log.taken ? "Taken" : "Missed"}
                        </Badge>
                      </Td>
                      <Td>{log.description}</Td>
                      <Td>
                        {!log.taken && (
                          <Button
                            size="sm"
                            colorScheme="blue"
                            onClick={() => handleRequery(log.id)}
                          >
                            Requery
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default Logs;
