import { createContext, useContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import {useNavigate} from "react-router-dom"
export const AuthContext = createContext();

const ENDPOINT = "https://upskill-mafia-mern-hackathon.vercel.app";

var socket;

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [selectedChat,setSelectedchat] = useState()
  const [user, setUser] = useState("");
const navigate=useNavigate();
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [allChats, setAllChats] = useState([]);
  const [allMessage, setAllMessage] = useState([]);
  const authToken = `Bearer ${token}`;
console.log("user",user)
  const params = useParams();
  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("isLoggedin ", isLoggedIn);

  //   to check whether is loggedIn or not

  //mentor by id

  const LogoutUser = () => {
    setToken("");
    toast.success("Logout Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return localStorage.removeItem("token");
  };

  //Authentication JWT -- to get currently logged in user data

  const userAuthentication = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${ENDPOINT}/auth/user`, {
        method: "GET",

        headers: {
          Authorization: authToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMentors = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/ment/mentors`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setMentors(data.msg);
        setFilteredMentors(data.msg);
      }
    } catch (error) {
      console.log(`services error ${error}`);
    }
  };

  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/profile/user`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(`user ${data}`);
      setUsers(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const apiUrl = `${ENDPOINT}/chat`;

  const allChatFetchFunction = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",

        headers: {
          Authorization: authToken,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      setAllChats(data);

      console.log(allChats);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  const allMessageFetchFunction = async (id) => {
    const msgUrl = `${ENDPOINT}/message/${id}`;
    try {
      const response = await fetch(msgUrl,{
        method: "GET",
  
        headers: {
          Authorization: authToken,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      
  
      setAllMessage(data);
  
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
const createChat = async (id) => {
  try {
    const response = await fetch(apiUrl,{
      method: "POST",

      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({"userId":id }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
console.log("user",data)
    setAllChats([...allChats,data])
    navigate(`/profile/chat/${data?._id}`)
 console.log(allChats)
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

  const sendMessage = async (id, content) => {
    const msgUrl = `${ENDPOINT}/message`;
    try {
      const response = await fetch(msgUrl, {
        method: "POST",

        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId: id, content }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      socket.emit("new message", {id,data});
      setAllMessage([...allMessage, data]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
  }, []);
  useEffect(() => {
    allChatFetchFunction();
  }, [setAllChats]);

  useEffect(() => {
    // getAllUsersData()
    if(!token){
      navigate('/signin')
      return
    }
    getMentors();

    userAuthentication();
  }, [token]);
  const selected = async (data) => {
    try {
      //
      console.log("from services", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        mentors,
        authToken,
        isLoading,
        selected,
        getAllUsersData,
        users,
        course,
        setCourse,
        token,
        filteredMentors,
        setFilteredMentors,
        allChatFetchFunction,
        allChats,
        allMessageFetchFunction,
        setAllMessage,
        allMessage,
        sendMessage,
        selectedChat,setSelectedchat,getMentors,createChat
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
