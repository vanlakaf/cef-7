import { useState } from "react";
import { apiMocker } from "../services/mocks/api.mock";

interface LoginCredentials {
  username: string;
  password: string;
}

function parseStorageValue(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch (e: any) {
    console.error("Parsing error: ", e);
    return null;
  }
}

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<ReturnType<
    typeof apiMocker.login
  > | null>(null);

  function login(payload: LoginCredentials) {
    let _current = parseStorageValue(localStorage.getItem("currentUser"));
    if (!_current) {
      setCurrentUser(apiMocker.login(payload));
    } else {
      setCurrentUser(_current);
    }
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  }

  return {
    currentUser,
    login,
    logout,
  };
}
