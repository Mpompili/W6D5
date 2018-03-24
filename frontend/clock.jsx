import React from 'react';

class Clock extends React.Component {

  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.intervalId = 0;
    this.tick = this.tick.bind(this);

  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);

  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let time = this.state.time;

    return (
      <div class="time-container">
        <h1>Time</h1>
        <section class="time">
          <h2>Time</h2>
          <h2>{ time.toLocaleTimeString('en-US') }</h2>
        </section>
        <section class="time">
          <h2>Date</h2>
          <h2>{ time.toDateString() }</h2>
        </section>
        <section class="galaxy">
        </section>
      </div>
    );
  }

}

export default Clock;
