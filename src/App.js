import './App.css';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { CiBookmarkPlus } from "react-icons/ci";
import { addTodo, deleteTodo, removeTodo } from './redux/actions';
import  todoReducer  from './redux/reducers/todoReducers';



function App() {

  const dispatch = useDispatch()

  const list = useSelector((state) => state.todoReducer.list )
  const [input, setInput] = useState("");


  return (
    <div className="App">
      <div className='child_div'>
        <figure>
         <figcaption>Add your list here</figcaption>
         </figure>  
      </div>

      <div className='add__items'>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='✍️ Add items..'/>
        <CiBookmarkPlus className='icon' onClick={() => dispatch(addTodo(input), setInput(""))} />
      </div>

      <div className='show__items'>
         <div className='each__item'>
            {list.map((item) => {
              return(
                <div key={item.id}>
                <h3>{item.data}</h3>
                <CiBookmarkPlus className='icon' onClick={() => dispatch(deleteTodo(item.id), setInput(""))} />
                </div>

              )
            })}
         </div>
      </div>

      <button onClick={() => dispatch(removeTodo())}>Check List</button>
    </div>
  );
}

export default App;
