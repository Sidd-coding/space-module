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
      rockets: [],
      allrockets: [],
      checked: false,
    }
  }

  getRockets() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then(rockets => this.setState({ allrockets: rockets, rockets }))
  }

  componentDidMount() {
    this.getRockets()
  }

  allRocketHandler = () => {
    const all = this.state.allrockets
    this.setState({
      rockets: all
    })
    console.log(all);
  }

  upcomingRocketHandler = () => {
    const upcoming = this.state.allrockets.filter(el => new Date(el.first_flight) > new Date())
    this.setState({
      rockets: upcoming
    })
    console.log(upcoming);
  }

  pastRocketHandler = () => {
    const past = this.state.allrockets.filter(ps => new Date(ps.first_flight) < new Date())
    this.setState({
      rockets: past
    })
    console.log(past);
  }

  muiRocketHandler = () => {
    console.log("test");
    const muiHandler = this.state.allrockets.filter(mui => mui.success_rate_pct === 100)
    this.setState({
      rockets: this.state.checked ? this.state.allrockets : muiHandler,
      checked: !this.state.checked,
    })
  }

  render() {
    console.log(this.state.rockets);
    return (
      <div className="App">
        <Header />
        <Button upcomingRocket={this.upcomingRocketHandler}
          pastRocket={this.pastRocketHandler}
          allRocket={this.allRocketHandler}
          muiRocket={this.muiRocketHandler} />


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
