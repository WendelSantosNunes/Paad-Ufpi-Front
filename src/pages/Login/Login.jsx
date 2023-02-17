import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { LoginPasswordLost } from "./components/LoginPasswordLost/LoginPasswordLost";
import { LoginPasswordReset } from "./components/LoginPasswordReset/LoginPasswordReset";

export function Login(){
    const {login} = useContext(UserContext)

    if(login === true){
        return <Navigate to='/' />
    }else{
        return(
            <>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/password" element={<LoginPasswordLost />} />
                    <Route path="/recovery-pass/" element={<LoginPasswordReset />} />
                </Routes>
            </>
        )
    }
}