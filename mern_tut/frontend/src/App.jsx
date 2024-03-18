import './App.css';
import { Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import chats from './pages/Chats';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/>
      <Route path="/chats" component={chats} />
      
    </div>
  );
}

export default App;
