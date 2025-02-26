import { createMutation } from "react-query-kit";
import getApi from "./api";

export type LoginCredential = {
  email: string;
  password: string;
};

export interface User {
  id: number;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
}

// Add return type interface
export interface LoginResponse {
  token: string;
  user: User;
}

export const login = async ({
  email,
  password,
}: LoginCredential): Promise<LoginResponse> => {
  const response = await getApi().post("auth/login", {
    email: email,
    password: password,
  });

  if (!response.data.status) throw new Error("Invalid username or password");

  return {
    token: response.data.token,
    user: response.data.user,
  };
};

export const useLogin = createMutation({
  mutationFn: login,
});
