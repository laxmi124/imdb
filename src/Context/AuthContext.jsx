import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState("")
  const [color , setColor] = useState("light")
  

  const login = (token) => {
    setIsAuth(true);
    navigate("/")
    setToken(token)
  };
  const logout = () => {
    setIsAuth(false);
    navigate("/login");
    setToken("")
  };
  const handleColor = ()=>{
      setColor(color==="light"?"dark":"light")
    }

  return (
    <AuthContext.Provider value={{ login, isAuth , token ,logout, handleColor, color}}>
      {children}
    </AuthContext.Provider>
  );
}
