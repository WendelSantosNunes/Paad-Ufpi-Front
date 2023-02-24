import { Route, Routes } from "react-router-dom";
import { CreateStudent } from "./components/CreateStudent/CreateStudent";
import { CreateTeacher } from "./components/CreateTeacher/CreateTeacher";
import { MemberID } from "./components/MemberID/MemberID";
import { MemberStar } from "./components/MemberStart/MemberStart";
import { MemberStudentID } from "./components/MemberStudentID/MemberStudentID";


export function Member(){

  return(
      <>
          <Routes>
            <Route path="/" element={<MemberStar />} />
            <Route path="/create-teacher" element={<CreateTeacher />} />
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/member-id/*" element={<MemberID/>} />
            <Route path="/member-student-id/*" element={<MemberStudentID/>} />

          </Routes>
      </>
  )
}