import { databaseMocker } from "./database.mock";

interface LoginApiCredentials {
  username: string;
  password: string;
}

function login(payload: LoginApiCredentials) {
  return databaseMocker.mockUser(payload);
}

export const apiMocker = {
  login,
};
