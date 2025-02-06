import { useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";

function App() {
  const [name, setName] = useState([]);
  const [id, setId] = useState(0);

  
  function getInput(event) {
    event.preventDefault();
    const taskName = event.target[0].value; 
    const date = new Date();
    let dates=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();

    let day="AM"
    let hours=date.getHours();
    if(hours==0){
      hours=12;
    }
    if(hours>12){
      day="PM"
      hours=hours-12;
    }else{
      day="PM"
    }

    let minu=date.getMinutes();
    let sec=date.getSeconds();
    
    console.log(dates)
    if (taskName) {  
      setId(id + 1);  
      setName((data) => [
        ...data,
        { name: taskName, id: id,date:dates,month:month,year:year,hour:hours,minu:minu,sec:sec,day:day}  
      ]);
      event.target[0].value = '';  
    }
  }

  function remove(taskId) {
    setName((data) => data.filter((item) => item.id !== taskId));  
  }
  console.log(name)
  return (
    <>
      <div className='overall'>
        <div className='left'>
          <h1>TodoList</h1>
          <div className='txt'>
            <form onSubmit={getInput}>
              <textarea placeholder='Add Your list....'></textarea>
              <button type="submit">Add List</button>
            </form>
          </div>
        </div>

        <div className='right'>
          <h1>RecentList</h1>
          {name && name.map((item) => (
            <div className='task' key={item.id}>
              <h3>Task</h3>
              <p>Date:{item.month}/{item.date}/{item.year} Time:{item.hour}:{item.minu}:{item.sec} {item.day}</p>
              <ul>
                <li>{item.name}</li>
              </ul>
              <MdDelete className='delete' onClick={() => remove(item.id)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
