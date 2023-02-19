import { Route, Routes } from "react-router-dom";
import { CreatePublication } from "./components/CreatePublication/CreatePublication";
import { PublicationStart } from "./components/PublicationStart/PublicationStart";
import { UpdatePubliation } from "./components/UpdatePublication/UpdatePublication";

export function Publicaction(){

    return(
        <>
            <Routes>
                <Route path="/" element={<PublicationStart />} />
                <Route path="/create-publication" element={<CreatePublication />} />
                <Route path="/update-publication/*" element={<UpdatePubliation />} />
            </Routes>
        </>
    )
}