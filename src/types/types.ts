// types.ts
export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface PatientData {
  id: string;
  name: string;
  age: number;
  phone: string;
  email: string;
  photoUrl?: string;
  bloodType: string;
  allergies: string;
  currentMedications: string;
  medicalConditions: string;
  emergencyContact: EmergencyContact;
}
