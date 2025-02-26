import React, { useState } from "react";
import {
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
  Avatar,
  Stack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { PatientData } from "../types/types";

interface PatientProfileProps {
  patientData: PatientData;
  onSave: () => void;
}

const PatientProfile: React.FC<PatientProfileProps> = ({
  patientData,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<PatientData>(patientData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleInputChange = <K extends keyof PatientData>(
    field: K,
    value: PatientData[K]
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEmergencyContactChange = (
    field: string,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [field]: value,
      },
    }));
  };

  const handleSave = async (): Promise<void> => {
    try {
      setIsLoading(true);
      onSave();
      setIsEditing(false);
      toast({
        title: "Profile Updated",
        status: "success",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error updating profile",
        description:
          error instanceof Error ? error.message : "Unknown error occurred",
        status: "error",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack spacing={6} pt="2rem">
      <Card>
        <CardHeader>
          <HStack justify="space-between">
            <Heading size="md">Personal Information</Heading>
            <Button
              colorScheme={isEditing ? "green" : "blue"}
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              isLoading={isLoading}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            <VStack align="center" spacing={4}>
              <Avatar size="2xl" name={formData.name} src={formData.photoUrl} />
            </VStack>

            <VStack align="stretch" spacing={4} flex={1}>
              <InputGroup>
                <InputLeftAddon>Name</InputLeftAddon>
                <Input
                  value={formData.name}
                  isReadOnly={!isEditing}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon>Age</InputLeftAddon>
                <Input
                  value={formData.age}
                  isReadOnly={!isEditing}
                  type="number"
                  onChange={(e) =>
                    handleInputChange("age", parseInt(e.target.value))
                  }
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon>Phone</InputLeftAddon>
                <Input
                  value={formData.phone}
                  isReadOnly={!isEditing}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon>Email</InputLeftAddon>
                <Input
                  value={formData.email}
                  isReadOnly={!isEditing}
                  type="email"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </InputGroup>
            </VStack>
          </Stack>
        </CardBody>
      </Card>

      {/* Medical History */}
      <Card>
        <CardHeader>
          <Heading size="md">Medical History</Heading>
        </CardHeader>
        <CardBody>
          <VStack align="stretch" spacing={4}>
            <InputGroup>
              <InputLeftAddon>Blood Type</InputLeftAddon>
              <Input
                value={formData.bloodType}
                isReadOnly={!isEditing}
                onChange={(e) => handleInputChange("bloodType", e.target.value)}
              />
            </InputGroup>

            <Box>
              <Text mb={2} fontWeight="medium">
                Allergies
              </Text>
              <Textarea
                value={formData.allergies}
                isReadOnly={!isEditing}
                onChange={(e) => handleInputChange("allergies", e.target.value)}
              />
            </Box>

            <Box>
              <Text mb={2} fontWeight="medium">
                Current Medications
              </Text>
              <Textarea
                value={formData.currentMedications}
                isReadOnly={!isEditing}
                onChange={(e) =>
                  handleInputChange("currentMedications", e.target.value)
                }
              />
            </Box>

            <Box>
              <Text mb={2} fontWeight="medium">
                Medical Conditions
              </Text>
              <Textarea
                value={formData.medicalConditions}
                isReadOnly={!isEditing}
                onChange={(e) =>
                  handleInputChange("medicalConditions", e.target.value)
                }
              />
            </Box>
          </VStack>
        </CardBody>
      </Card>

      {/* Emergency Contact */}
      <Card>
        <CardHeader>
          <Heading size="md">Emergency Contact</Heading>
        </CardHeader>
        <CardBody>
          <VStack align="stretch" spacing={4}>
            <InputGroup>
              <InputLeftAddon>Name</InputLeftAddon>
              <Input
                value={formData.emergencyContact.name}
                isReadOnly={!isEditing}
                onChange={(e) =>
                  handleEmergencyContactChange("name", e.target.value)
                }
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>Relationship</InputLeftAddon>
              <Input
                value={formData.emergencyContact.relationship}
                isReadOnly={!isEditing}
                onChange={(e) =>
                  handleEmergencyContactChange("relationship", e.target.value)
                }
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>Phone</InputLeftAddon>
              <Input
                value={formData.emergencyContact.phone}
                isReadOnly={!isEditing}
                onChange={(e) =>
                  handleEmergencyContactChange("phone", e.target.value)
                }
              />
            </InputGroup>
          </VStack>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default PatientProfile;
