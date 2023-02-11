import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { LoginPasswordLost } from "./components/LoginPasswordLost/LoginPasswordLost";
import { LoginPasswordReset } from "./components/LoginPasswordReset/LoginPasswordReset";

export function Login(){
    return(
        <>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/password" element={<LoginPasswordLost />} />
                <Route path="/reset" element={<LoginPasswordReset />} />
            </Routes>
        </>
    )
}