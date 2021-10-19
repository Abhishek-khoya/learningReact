import React,{Component,useRef} from 'react'
import './App.css';
class student
{
  constructor(id,name,company,salary)
  {
    this.id=id;
    this.name=name;
    this.company=company;
    this.salary=salary;
  }
  getId()
  {
    return this.id;
  }
  getName()
  {
    return this.name;
  }
  getCompany()
  {
    return this.company;
  }
  getSalary()
  {
    return this.salary
  }
}
function App() 
{
  const students=[];
  const placementYear=2021;
  students.push(new student(101,"Aditya Soni","Grow","20 LPA"));
  students.push(new student(102,"Sapan","MAQ Software","6 LPA"));
  students.push(new student(103,"Rahul","TCS","15 LPA"));
  const filteredStudents=[];
  students.forEach((student)=>{
    filteredStudents.push(student);
  })
  const selectedStudent={
    "name" : "",
    "company" : "",
    "salary" : ""
  }
  const placementDetailRef=useRef(); 
  const placementListRef=useRef();
  const onStudentSelected=(student)=>
  {
    //alert(student.id+","+student.name+","+student.company+","+student.salary);
    placementDetailRef.current.updateStudent(student);
  }
  const searchCriteriaChanged=(ev)=>{
    filteredStudents.splice(0,filteredStudents.length);
    var searchWhat=ev.currentTarget.value.trim().toLowerCase();
    for(var e=0;e<students.length;e++)
    {
      if(students[e].company.toLowerCase().includes(searchWhat))
      {
        filteredStudents.push(students[e]);
      }
    }
    placementListRef.current.updateStudents(filteredStudents);
    selectedStudent.name="";
    selectedStudent.company="";
    selectedStudent.salary="";
    placementDetailRef.current.updateStudent(selectedStudent);
  }
  return (
    <div>
      <h1>Thinking Machines - Ujjain</h1>
      Filter By Company <input type="text" onChange={searchCriteriaChanged}/>
      <PlacementList students={filteredStudents} placementYear={placementYear} onStudentSelected={onStudentSelected} ref={placementListRef}/>
      <br></br><br></br>
      <PlacementDetail student={selectedStudent} ref={placementDetailRef}/>
    </div>
  );
}
class PlacementList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      "students" : props.students,
      "placementYear" : props.placementYear
    }
    this.onStudentSelected=props.onStudentSelected;
  }
  updateStudents(students)
  {
    this.setState({
      "students" : students
    })
  }
  studentClickHandler=(ev)=>{
    var student=null;
    var studentId=ev.currentTarget.getAttribute("id");
    for(var i=0;i<this.state.students.length;i++)
    {
      if(this.state.students[i].id==studentId)
      {
        student=this.state.students[i];
        break;
      }
    }
    if(student)
    {
      this.onStudentSelected(student);
    }
  }
  render()
  {
    return (
      <div>
        <h3>Placement {this.state.placementYear}</h3>
        <ul>
        {this.state.students.map((student)=>{
          return (<li key={student.id} id={student.id} onClick={this.studentClickHandler}>
            {student.name} ({student.company})
            </li>
          )
        })
        }
        </ul>
      </div>
    );
  }
}
class PlacementDetail extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      "student" : props.student,
    }
  }
  updateStudent(student)
  {
    this.setState({
      "student" : student
    })
  }
  render()
  {
    return(
      <div>
          Name : <b>{this.state.student.name}</b><br></br>
          Company : <b>{this.state.student.company}</b><br></br>
          Salary : <b>{this.state.student.salary}</b><br></br>
      </div>
    )
  }
}
export default App;