import { Route, Routes } from "react-router-dom";
import { CreateProject } from "./components/CreateProject/CreateProject";
import { ProjectID } from "./components/ProjectID/ProjectID";
import { ProjectStart } from "./components/ProjectStart/ProjectStart";
import { UpdateProject } from "./components/UpdateProject/UpdateProject";

export function Project(){

  return(
      <>
          <Routes>
              <Route path="/" element={<ProjectStart />} />
              <Route path="/create-project" element={<CreateProject />} />
              <Route path="/project-id/*" element={<ProjectID />} />
              <Route path="/project-update-id/*" element={<UpdateProject />} />  

              {/* <Route path="/create-publication" element={<CreatePublication />} />
              <Route path="/update-publication/*" element={<UpdatePubliation />} /> */}
          </Routes>
      </>
  )
}