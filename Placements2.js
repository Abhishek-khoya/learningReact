import React from "react";
const App=()=>{
    const [title]=React.useState("Thinking Machines");
    const [year]=React.useState("2021");
    const students=[
        {"id" : 101,"name" : "Nikhil Soni","type" : "Full time","company" : "Grow","package" : "20 LPA","passingYear" : 2021},
        {"id" : 102,"name" : "Yash Govindani","type" : "Internship","company" : "InvesTrack","package" : "15000 Per Month","passingYear" : 2022}, 
        {"id" : 103,"name" : "Akshita Shah","type" : "Full time","company" : "Wiley","package" : "7 LPA","passingYear" : 2021},
        {"id" : 104,"name" : "Aditya Sharma","type" : "Full time","company" : "Grow","package" : "20 LPA","passingYear" : 2021},
        {"id" : 105,"name" : "Umang Saxena","type" : "Full time","company" : "TCS","package" : "7 LPA","passingYear" : 2021}
    ]
    const [searchWhat,setSearchCriteria]=React.useState("None");
    const applyFilter=(ev)=>{
        if(ev.currentTarget.value.length<3)
        {
            setSearchCriteria("None");
            return;
        }
        setSearchCriteria(ev.currentTarget.value);
    }
    const filteredStudents=students.filter((student)=>{
        if(searchWhat==="None") return true;
        return student.company.toLowerCase().includes(searchWhat.toLowerCase());
    });
    return (
        <div>
            <TitleComponent title={title} placementYear={year} />
            <SearchBox onSearch={applyFilter} />
            Filter applied : {searchWhat}
            <StudentList students={filteredStudents} />
        </div>
            
    );
}
const TitleComponent=(props)=>{
    return(
        <h1>{props.title} - placements {props.placementYear}</h1>
    );
}
const SearchBox=(props)=>{
    const searchIt=(ev)=>{
        props.onSearch(ev);
    }
    return(
        <div>
            <label htmlFor="searchBox">Search : </label>
            <input type='text' id='searchBox' onChange={searchIt} />
        </div>
    );
}
const StudentList=(props)=>{
    return (
        <ul>
            {
                props.students.map((student)=>
                {
                    return(
                        <li key={student.id}>{student.name} ({student.company})</li>
                    )
                })
            }
        </ul>
    );
}
export default App;
