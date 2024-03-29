// import logo from './logo.svg';
import './App.css';
// import ContactForm from './ContactForm';

import axios from 'axios';
// import './App.css';

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make API Call</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
