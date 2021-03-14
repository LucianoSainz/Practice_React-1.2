import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {

  const [left, setLeft] = useState(0)
  const [rigth, setRigth] = useState(0)


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
