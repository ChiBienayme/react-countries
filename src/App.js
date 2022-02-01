import React from "react";

// JS
import Button from "./components/Button";
import Card from "./components/Card"

// CSS
import "./App.css"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };
  }

  componentDidMount() {
     
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ loading: false, countries: res });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
  }

  getCountry(country) {
    fetch("https://restcountries.com/v3.1/name/france")
    .then((country) => res.json())
    .then((country) => {
      console.log(country);
      this.setState({ loading: false, countries: res });
    });

    fetch("https://restcountries.com/v3.1/name/brazil")
    .then((country) => res.json())
    .then((country) => {
      console.log(country);
      this.setState({ loading: false, countries: res });
    });

    fetch("https://restcountries.com/v3.1/name/croatia")
    .then((country) => res.json())
    .then((country) => {
      console.log(country);
      this.setState({ loading: false, countries: res });
    });
  }

  renderCountries = () => {
    switch(this.state.name) {
      case 'France':
        return <Card getCountry={this.state}></Card>
      case 'Brazil':
        return <Brazil getCountry={this.state}></Brazil>
      case 'Croatia':
        return <Croatia getCountry={this.state}></Croatia>
      default
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Countries selector </h1>

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          this.state.countries.map((country) => {
            return <div>
                    <p>{country.flag}</p>
                    <p><b>{country.name.common}</b></p>
                    <p>{country.capital}</p>
                    <p>{country.population}</p>
                    <p>{country.region}</p>
                  </div>      
          })
        )}
      </div>
    );
  }
}
// Ordre d'éxecution de React :
// 1 - premier render (affichage du component à l'écran)
// 2 - componentDidMount avec un setState
// 3 - nouveau render
export default App;
