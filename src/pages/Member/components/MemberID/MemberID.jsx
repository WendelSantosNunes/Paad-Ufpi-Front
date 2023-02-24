import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerMemberID } from "./styles";

export function MemberID(){
  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')
  const [teacher, setTeacher] = useState([])

  async function data(){
    let response = await axios.get(`https://api-paadupfi.onrender.com/teacher/${key}`)

    setTeacher(response.data.teacher)

    console.log(response)
  }

  useEffect(() => {
    data()
  },[])

  console.log(teacher.students)

  return (
    <ContainerMemberID className="container">
      <div className="title">
        <h1>Docente</h1>
      </div>

      <div className="image">
        <img src={teacher.image} alt="" />
      </div>

      <div className="info">
        <div>
          <h2>Nome:</h2>
          <p>{teacher.fullName}</p>
          
          <h2>Email:</h2>
          <p>{teacher.email}</p>
        </div>

        <div>
          <h2>Curso:</h2>
          <p>{teacher.course}</p>
        </div>
      </div>
    </ContainerMemberID>
  )
}