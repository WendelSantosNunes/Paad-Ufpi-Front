import { Route, Routes } from "react-router-dom";
import { CreateProject } from "./components/CreateProject/CreateProject";
import { ProjectStart } from "./components/ProjectStart/ProjectStart";

export function Project(){

  return(
      <>
          <Routes>
              <Route path="/" element={<ProjectStart />} />
              <Route path="/create-project" element={<CreateProject />} />
              {/* <Route path="/create-publication" element={<CreatePublication />} />
              <Route path="/update-publication/*" element={<UpdatePubliation />} /> */}
          </Routes>
      </>
  )
}