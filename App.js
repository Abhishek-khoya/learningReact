import React from 'react'
const students=[
    {"id" : 101,"name" : "Nikhil Soni","type" : "Full Time","company" : "Groww","salary" : "20LPA","passingYear" : 2021}
    ,{"id" : 102,"name" : "Yash Govindani","type" : "Internship","company" : "InvesTrack","salary" : "15000 per Month","passingYear" : 2021}
    ,{"id" : 103,"name" : "Akshita Shah","type" : "Full Time","company" : "Wiley","salary" : "7LPA","passingYear" : 2021}
    ,{"id" : 104,"name" : "Aditya Sharma","type" : "Full Time","company" : "Groww","salary" : "20LPA","passingYear" : 2021}
    ,{"id" : 105,"name" : "Umang Saxena","type" : "Full Time","company" : "TCS","salary" : "7LPA","passingYear" : 2021}
]
const App=()=>{
    const [title]=React.useState("Thinking Machines");
    const [year]=React.useState(2021);
    return (
        <div>
            <TitleComponent title={title} placementYear={year} />
            <ToolBarComponent />
            <StudentsListComponent students={students} />
        </div>
    )
}
const ToolBarComponent=()=>{
    return (
        <div>
            <hr/>
            <button type="button"> + </button>
            <hr/>
        </div>
    )
}
const TitleComponent=({title,placementYear})=>{
    return (
        <h1>{title} - Placement ({placementYear})</h1>
    )
}
const StudentsListComponent=({students})=>{
    return (
        <div>
            {
                students.map((student)=>{
                    return (
                        <StudentComponent key={student.id} student={student} />
                    )
                })
            }
        </div>
    )
}
const StudentComponent=({student})=>{
    return(
        <div>
            <span>Name : {student.name}</span><br/>
            <span>Company : {student.company}</span><br/>
            <span>Placement Type : {student.type}</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span>Salary : {student.salary}</span><br/>
            <span>Year of Passing : {student.passingYear}</span>
            <hr/>
        </div>
    )
}
export default App;