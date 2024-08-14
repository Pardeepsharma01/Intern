// import logo from './logo.svg';
// import './App.css';
// import Home from './Components/Home';
import Filter from './Components/Filter';

function App() {
  const dropdownContent =[
    {name: "Date of Registration"},
    {name: "vendor Scor"},
    {name: "Rating"},
    {name: "Status"},
    {name: "Location"},
    {name: "Assign to "},
  ]
  return (
    <>
    {/* <Home/> */}
    <h1>React Filter Component</h1>
    <Filter dropdownContent={dropdownContent} 
    buttonText="Filter"/>
    </>
  );
}

export default App;
