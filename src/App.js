import React, {useState} from 'react'
import './App.css';

const App = () => {

  let array = ['Arnab', 'Anamaya', 'Aparichit', 'Bablu', 'Charles', 'Cbum', 'Kammo','Mekhla' ,'Priyamvada', 'Patrali', 'Pratyush'];
  let suggestion = [];

  const [value, setValue] = useState();
  const [list, setList] = useState();

  const setInputValue = (e, x) => {
    setValue(x);
  }

  const autocomplete = (event) => {
    setValue(event.target.value)
    array.forEach(x => {
      if(x.substr(0, event.target.value.length).toUpperCase() === event.target.value.toUpperCase()){

        suggestion.push(x);
        // console.log(suggestion);
        setList(
          suggestion.map((x, index) => {
            return <p key={index} onClick={(e) => setInputValue(e, x)}>{x}</p>
          })
        );
      }

      if(event.target.value.length === 0)
        setList('');
    })
  }

  return (
    <div className="containerCenter">
      <h1>Autocomplete Text field with Suggestions</h1>
      <h2>(Suggestions are generated using a user provided array)</h2>
      <input className="autocomplete" onChange={(e) => autocomplete(e)} value={value}></input>
      <div className="list">
        {list}
      </div>
    </div>
  );
}

export default App;
