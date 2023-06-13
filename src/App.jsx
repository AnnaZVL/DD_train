import { useState } from 'react';
import InputBase from './components/inputBase.jsx';
import './App.css'

function App() {
  const [name, setName] = useState(''),
        [age, setAge] = useState(''),
        [rezalt, setRezalt] = useState(false),
        [error, setError] = useState(false);

  function handlerForm(e) {  
    setError(false)  
    e.preventDefault();
    setRezalt(true);
   if (name == '' || age == '') {
      setError(true);
    }
  }

  return (
    
      <div className='container'>
        <form className='form' action="#"> 
            <InputBase className={name} type="text" value={name} name='name'
              onChangeInput={(e) => {setName(e.target.value)}}
              error={error}
              />

            <InputBase className={age} type="number" value={age} name='age' 
            onChangeInput={(e) => {setAge(e.target.value)}}
            error={error}
            />
            
            <button type='submit' className='btn__form' onClick={handlerForm}>Отправить</button>        
        </form>
        {rezalt && !error && <p>Hello, {name}, you age {age} </p>}
      </div>
      
  )
}

export default App
