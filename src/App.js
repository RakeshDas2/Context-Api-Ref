import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { UserProvider } from './context-api/UserContext';
import ComponentA from './components/ComponentA';
import { LoginProvider } from './context-api/LoginContext';
import ComponentE from './components/ComponentE';
import ComponentD from './components/ComponentD';
import { DataProvider } from './context-api/DataContext';
import ComponentF from './components/ComponentF';
import ComponentG from './components/ComponentG';
import RefComponent from './components/RefComponent';
import RefClassComponent from './components/RefClassComponent';

function App() {
  const [userName, setUserName] = useState('Rambo')
  const [logInData, setlogInData] = useState({
    isLogin: true,
    loggedInUser: 'Rambo'
  })
  let myData = '111'
  return (
    <div className="App">
      Context::: Api:::
      {/* pass the props in Context provider and use it in child component by using useContext hooks if this is functional component, if it is a child component then use there context Consumer
      - You have to wrap the main parent component inside the ContextProvider and pass the props inside the Provider Context object as value={} (default attribute)(inside it you can pass any type of data)
        */}

      <button onClick={() => {
        setUserName('Raka')
      }}>Update UserName</button>
      <UserProvider value={userName}>
        <ComponentA />
        <ComponentG/>
      </UserProvider>

      <LoginProvider value={logInData}>
        <ComponentD value={myData} />
      </LoginProvider>
      <DataProvider value={myData}>
        <ComponentF />
      </DataProvider>
      <button onClick={() => {
        myData = '222'
        console.log(myData);
      }}>Update Data</button>
      <hr/>
      <RefComponent/>
      <hr/>
      <RefClassComponent/>
    </div>
  );
}

export default App;
