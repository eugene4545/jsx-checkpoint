import CardWithButton from "./Card";
import Message from "./Greeting";
import './App.css' 
function App() {

  return (
    <div className="App">
      {/* our components card and messagebox */}
      <CardWithButton />
      <Message />   
    </div>
  );
}

export default App;
