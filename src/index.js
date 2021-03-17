import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <>
      the app is used by pressing the buttons
      </>
    )
  }

  return(
    <>
    button press history: {props.allClicks.join(' ')}
    </>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {

  const [left, setLeft] = useState(0)
  const [rigth, setRigth] = useState(0)
  const [allClicks, setAll] = useState([])


  return (
    <>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>

      <button onClick={() => setRigth(left + 1)}>rigth</button>
      {rigth}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root')
)
