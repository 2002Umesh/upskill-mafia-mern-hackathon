import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const authToken = `Bearer ${token}`;
  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("isLoggedin ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //Authentication JWT -- to get currently logged in user data
 
  const userAuthentication = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:9000/auth/user", {
        method: "GET",

        headers: {
          Authorization: authToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false)
      }else{
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch(`http://localhost:9000/api/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services error ${error}`);
    }
  };

  const [users, setUsers] = useState([]);
 
  const getAllUsersData = async () => {
    try {
      const response = await fetch(`http://localhost:9000/profile/user`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(`user ${data}`);
      setUsers(data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  
//   useEffect(() => {
//     getAllUsersData()
//     getServices();
//     userAuthentication();
//   }, [token]);
const selected = async (data) => {
  try {
    //
    console.log("from services",data)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authToken,
        isLoading,
        selected,getAllUsersData,users
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
