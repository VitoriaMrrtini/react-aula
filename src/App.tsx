//import MyInput from './components/Myinput' 
//import MyButton from './components/MyButton'
import './App.css'
import { useState } from 'react';
import MyForm from './components/MyForm';
import MyP from './components/MyP';

function App() {

  const [items, setItems] = useState(['']);

  const handleOnClick = () => {
    setItems([...items, "Item" + items.length])
    }

  return (
    <>
    <div>
      <MyP>Este é o conteúdo do meu parágrafo!</MyP>
    </div>

      <div className='inputs-container'>
            <MyForm onClick={handleOnClick}/>
      </div>

      {items.length > 0 && ( 
        <ul>
          {items.map((Item, index) => (
            <li key={index}>{Item}</li> 
          ))}
        </ul>
      )}
    </>  

    )
}

export default App 