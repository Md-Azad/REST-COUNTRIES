import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <h1>Let's Visit All countries of the world!!</h1>
      <hr />
      <Countries></Countries>
    </div>
  );
}

// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h1>Total Countries: {countries.length} </h1>
//       {/* <h3>Country name: {countries[0].name.common}</h3> */}
//       {/* {console.log(countries[0].name.common)} */}

//       {countries.map((country) => (
//         <AllCountris
//           name={country.name.common}
//           area={country.area}
//           capital={country.capital}
//           population={country.population}
//         ></AllCountris>
//       ))}
//     </div>
//   );
// }

// function AllCountris(props) {
//   return (
//     <div>
//       <h1>Country Name: {props.name}</h1>
//       <h2>Area: {props.area}</h2>
//       <h3>Capital: {props.capital}</h3>
//       <h3>Population: {props.population}</h3>
//     </div>
//   );
// }

export default App;
