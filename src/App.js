import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <TestButton></TestButton>
      </header>
    </div>
  );
}

function TestButton(){
  var user = {
    nome :"luann",
    isLogged: false
  }
  let content;

  function onClickBtn(){alert('OI');}

  if(user.isLogged){
    content = (<h1>
      {user.nome}
      </h1>)
    }



  return (
    <>
    {content}

    {user.isLogged ? (<h1>
      {user.nome}
      </h1>) : (<h1>Nao esta Logado</h1>)
    }
  
    <button onClick={onClickBtn}>Test Button</button>
    </>
  )
}

export default App;
