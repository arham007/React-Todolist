// import React, { useState } from 'react';



// function App(){

//   let [todos,setTodos]=useState([]);
//   let[item,setItem]=useState("");
//   let [flag,setFlag]=useState("false")
//   let [newval,setNewVal]=useState("")
//   const inputEvent=(e)=>{
//     setItem(e.target.value)
//   }
//   const addTodo=()=>{
//     if (flag==="false"){

//       setTodos([...todos,item])
//       setItem("")
//     }
//     else{
//       // let i=todos.indexOf(item);
//       // console.log(i)
//       // setNewVal(item)

//       // setItem("")
//       // todos.slice(index,1)
//       // todos.splice(i,1,item)
//       // console.log( todos.splice(i,1,item) )
//       // console.log(todos)
//       // setTodos([...todos])
//       // setItem("")
//       // setFlag("false")
//       edit()

//     }
//   }
//   const del=(i)=>{
//     todos.splice(i,1)
//     setTodos([...todos])
//   }
//   const edit=(i)=>{
//     setFlag("true")
//     setItem(todos[i])
//     setNewVal(item)
//     todos.splice(i,0,newval)
//     console.log(todos)
//     setTodos([...todos])

//   }

//   return(
//     <>
//     <input type="text" onChange={inputEvent} value={item}/>
//     <button onClick={addTodo}>Add</button>
//     <button onClick={()=>{setTodos([])}}>Delete ALl</button>


//     <ul>
//       {todos.map((val,index)=>{
//         return <li>{val} <button onClick={()=>{del(index)}}>Delete</button><button onClick={()=>{edit(index)}}>Edit</button></li>

//       })}
//     </ul>
//     </>
//   )
// }

// export default App;
// =======================Hooks Component=======================//


// ===============Class Componenet====================//


import React from 'react';
import './index.css';


class App extends React.Component{

  constructor(){
    super();
    this.state={
      todos:[],
      item:"",
      edit_val:""
    }

  }
  inputEvent=(event)=>{
    this.setState({
      item:event.target.value
    })

  } 
  addTodo=()=>{
    let obj={title:this.state.item,edit:false}
    this.state.item=""
    this.setState({
      todos:[...this.state.todos,obj]
    })
  }
  del=(index)=>{
    this.state.todos.splice(index,1);
    this.setState({
      todos:[...this.state.todos]
    })

  }
  edit=(index)=>{
    this.state.todos[index].edit=true
    this.setState({
      todos:[...this.state.todos  ]
    })

  }
  handleChange=(event)=>{
    this.setState({

      edit_val:event.target.value
    })

  }
  update=(index)=>{
    this.state.todos[index].title=this.state.edit_val
    this.state.todos[index].edit=false
    this.setState({
      todos:[...this.state.todos]
    })

  }
 
  render(){
    return (
      <>
        <div className="main_div">
          <div className="todo_div">
            <div className="todo_list_head" >
              <h1 style={{ fontFamily: "'Righteous', cursive", color: "#fff", letterSpacing: "2px" }} >ToDo List</h1>
            </div>
            <br />
            <input value={this.state.item} type="text" placeholder="Add a items"  onChange={this.inputEvent} />
            <button className="addTodo" disabled={this.state.item==="" ? true : false} onClick={this.addTodo}>+</button>
            <button className="delTodo" onClick={()=>{this.setState({todos:[],item:""})}}><i className="fas fa-trash-alt"></i></button>
         
         
          <ul>
            {this.state.todos.map((v,i)=>{
              return <li>
                
                <button className="del" onClick={()=>{this.del(i)}}><i className="fas fa-times"></i></button>
                {(v.edit===true)? <button className="updateTodo" onClick={()=>{this.update(i)}}>+</button> :<button className="edit" onClick={()=>{this.edit(i)}}><i class="fas fa-edit"></i></button> }
                
                {(v.edit===true) ? <input type="text" onChange={this.handleChange} className="updateInp" /> :v.title}
                
                
                 </li>
            })} 
            
          </ul>
          </div>
  
        </div>
      </>
    )
  } 
}
export default App;