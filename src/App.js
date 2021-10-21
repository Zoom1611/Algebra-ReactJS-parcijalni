import InputForm from "./components/FormGitHubUser";

/* function Clicker() {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((state) => state + 1);
  }

  return (
    <button onClick={updateCounter}>Clicked {counter} time(s)</button>
  )
}

 */

function App() {
  return (
    <div className="App">
      <InputForm />
      {/* <Clicker /> */}
    </div>
  );
}

export default App;
