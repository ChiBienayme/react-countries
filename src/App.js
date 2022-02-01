import React from "react";

// JS
import Button from "./components/Button";
import Card from "./components/Card"

// CSS
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };

    this.getCountry = this.getCountry.bind(this)
    this.renderCountry = this.renderCountry.bind(this)
  }

  componentDidMount() {
     
    fetch(`https://restcountries.com/v3.1/name/france`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ name: res[0].name.common,
                        capital: res[0].capital,
                        flag: res[0].flag,
                        population: res[0].population,
                        region: res[0].region,
                    });
      })
      .catch(error => console.log(error));
  }


  getCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      this.setState({ name: res[0].name.common,
                      capital: res[0].capital,
                      flag: res[0].flag,
                      population: res[0].population,
                      region: res[0].region, 
                    });
    })
    .catch(error => console.log(error));

  }

  renderCountry(e) {
    fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital,
          flag: res[0].flag,
          population: res[0].population,
          region: res[0].region,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div> 
        <h1 className="text-center"> Country selector </h1>

        <div >
          <Button onClick={() => this.getCountry("france")}> France </Button>

          <Button onClick={() => this.getCountry("brazil")}> Brazil </Button>

          <Button onClick={() => this.getCountry("croatia")}> Croatia </Button>
        </div>
       
        <Card
          flag={this.state.flag}
          name={this.state.name}
          capital={this.state.capital}
          population={this.state.population}
          region={this.state.region}
        />   

      </div>

    );
  }
}

export default App;