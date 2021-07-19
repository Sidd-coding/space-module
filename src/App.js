import './App.css';
import { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from 'react';
import Header from './Header';
import RocketDetail from './Component/RocketDetail';
import Button from './Component/Button';



class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: []
    }
  }


  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then(rockets => this.setState({ rockets: rockets }))
  }

  allRocketHandler = () => {
    const all = this.state.rockets.filter(al => new Date(al.first_flight))
    this.setState({
      rockets: all
    })
    console.log(all);
  }

  upcomingRocketHandler = () => {
    const upcoming = this.state.rockets.filter(el => new Date(el.first_flight) > new Date())
    this.setState({
      rockets: upcoming
    })
    console.log(upcoming);
  }

  pastRocketHandler = () => {
    const past = this.state.rockets.filter(ps => new Date(ps.first_flight) < new Date())
    this.setState({
      rockets: past
    })
    console.log(past);
  }

  render() {
    console.log(this.state.rockets);
    return (
      <div className="App">
        <Header />
        <Button upcomingRocket={this.upcomingRocketHandler}
          pastRocket={this.pastRocketHandler}
          allRocket={this.allRocketHandler} />
        <div>
          <br />
          <br />
          {this.state.rockets.map((rocket) => (
            <RocketDetail key={rocket.id} rocket={rocket} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
