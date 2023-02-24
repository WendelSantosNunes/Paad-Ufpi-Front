import { ContainerMemberStudentID } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

export function MemberStudentID(){
  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')
  const [student, setStudent] = useState([])
  
  async function data(){
    let response = await axios.get(`https://api-paadupfi.onrender.com/student/${key}`)

    setStudent(response.data.student)

    console.log(response)
  }

  useEffect(() => {
    data()
  },[])

  // console.log(student.teacher.fullName)

  return (
    <ContainerMemberStudentID className="container">
      <div className="title">
        <h1>Discente</h1>
      </div>

      <div className="image">
        <img src={student.image} alt="" />
      </div>

      <div className="info">
        <div>
          <h2>Nome:</h2>
          <p>{student.fullName}</p>
          
          <h2>Professor:</h2>
          <p>{student.teacher && student.teacher.fullName}</p>
        </div>

        <div>
          <h2>Email:</h2>
          <p>{student.email}</p>
          
          <h2>Curso:</h2>
          <p>{student.course}</p>
        </div>
      </div>
    </ContainerMemberStudentID>
  )
}