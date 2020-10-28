import React from 'react'
import {db, auth} from './services/firebase'

class App extends React.Component{
	state={
		students: null
	}
	
	componentDidMount(){
		db.collection('students')
			.get()
			.then(snapshot=>{
				const students=[]
				snapshot.forEach(doc=>{
					const data= doc.data()
					students.push(data)
				})
				this.setState({students:students})
				// console.log(students)
			})
			.catch(error=>console.log(error))
	}

	addNewStudent=()=>{
		var name=document.getElementById("name").value
		var age=document.getElementById("age").value
		var grad=false;
		var pts=document.getElementById("point").value
		db.collection('students')
		.add({
			name:name,
			age:age,
			joined_at:new Date(),
			graduated:grad,
			points:pts
		})
	}

	render(){
		return(
			<div className="App" class="container">
				<h1 class="display-2 navbar navbar-light bg-primary">Tution Media</h1>
				<form class="jumbotron">

					<div class="input-group mb-3">
  						<div class="input-group-prepend">
    						<span class="input-group-text" id="basic-addon1">Name</span>
  						</div>
  						<input type="text" class="form-control" placeholder="User Name" aria-label="User Name" aria-describedby="basic-addon1" required/>
					</div>

					<div class="input-group mb-3">
  						<div class="input-group-prepend">
    						<span class="input-group-text" id="basic-addon2">Age</span>
  						</div>
  						<input type="number" class="form-control" placeholder="User Age" aria-label="User Age" aria-describedby="basic-addon2"/>
					</div>

					<div class="input-group mb-3">
  						<div class="input-group-prepend">
    						<span class="input-group-text" id="basic-addon3">Graduated</span>
  						</div>
  						<input type="text" class="form-control" placeholder="true/false" aria-label="true or false" aria-describedby="basic-addon3"/>
					</div>

					<div class="input-group mb-3">
  						<div class="input-group-prepend">
    						<span class="input-group-text" id="basic-addon4">Points</span>
  						</div>
  						<input type="number" class="form-control" placeholder="User Points" aria-label="User Points" aria-describedby="basic-addon4"/>
					</div>					
					
					<button onClick={this.addNewStudent} type="submit"class="btn btn-outline-primary">Add New Student</button>
				</form>
				
				<div class="container">
					<div class="row align-items-start">
						<h2 class="col">Name</h2>
						<h2 class="col">Age</h2>
						<h2 class="col">Graduated</h2>
						<h2 class="col">Joined at</h2>
					</div>
					{
					this.state.students&&
					this.state.students.map(student=>{
						return(
							<div class="row align-items-start">
								<p class="col">{student.name} </p>
								<p class="col"> {student.age}</p>
								<p class="col">{String(student.graduated)}</p>
								<p class="col">{String(student.joined_at.toDate())}</p>
							</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}
export default App