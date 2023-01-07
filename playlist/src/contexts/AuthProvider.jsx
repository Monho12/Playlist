import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    axios
      .post("http://localhost:5000/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
        window.localStorage.setItem("credentials", JSON.stringify(res.data));
        navigate(`/`);
      });
  };

  const signup = (username, password) => {
    axios
      .post("http://localhost:5000/signup", {
        username: username,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
        window.localStorage.setItem("credentials", JSON.stringify(res.data));
        navigate(`/`);
      });
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("credentials");
  };

  useEffect(() => {
    const credentials = window.localStorage.getItem("credentials");
    if (credentials) {
      setUser(JSON.parse(credentials));
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        signup,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
