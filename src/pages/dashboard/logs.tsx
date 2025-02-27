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
  Spinner,
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

interface Log {
  id: string;
  time: string;
  date: string;
  status: boolean;
  taken: boolean;
  description: string;
}

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

  const [loading, setLoading] = useState(true);

  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://medibox-server.onrender.com/api/logs");
        setLogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
                alignItems={"flex-end"}
                gap={0}
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
          <CardHeader>
            <Button
              onClick={async () => {
                setLoading(true);
                try {
                  const response = await axios.get(
                    "https://medibox-server.onrender.com/api/logs"
                  );
                  setLogs(response.data);
                  console.log(response.data);
                } catch (error) {
                  console.error("Error fetching data:", error);
                } finally {
                  setLoading(false);
                }
              }}
              color="white"
              bg="#4D44B5"
            >
              Refresh Logs
            </Button>
          </CardHeader>
          <CardBody>
            {loading ? (
              <Spinner />
            ) : (
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
                    {logs.map((log, index) => (
                      <Tr key={log.id}>
                        <Td>{index + 1}</Td>
                        <Td>{formatDate(log.date)}</Td>
                        <Td>{log.time}</Td>
                        <Td>
                          <Badge colorScheme={log.status ? "green" : "red"}>
                            {log.status ? "Taken" : "Missed"}
                          </Badge>
                        </Td>
                        <Td>{log.description}</Td>
                        <Td>
                          {!log.status && (
                            <Button
                              size="sm"
                              bg="#4D44B5"
                              color="white"
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
            )}
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default Logs;
