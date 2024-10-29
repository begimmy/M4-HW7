import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  plus1 = () => {
    this.setState((prevState) => ({
      num: prevState.num < 15 ? prevState.num + 1 : 15,
    }));
  };

  minus1 = () => {
    this.setState((prevState) => ({
      num: prevState.num > 0 ? prevState.num - 1 : 0,
    }));
  };

  reset = () => {
    this.setState({ num: 0 });
  };

  plus5 = () => {
    this.setState((prevState) => ({
      num: prevState.num + 5 > 15 ? 15 : prevState.num + 5,
    }));
  };

  minus5 = () => {
    this.setState((prevState) => ({
      num: prevState.num - 5 < 0 ? 0 : prevState.num - 5,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.num}</h1>
        <button onClick={this.plus1}>+</button>
        <button onClick={this.minus1}>-</button>
        <button onClick={this.reset}>Res</button>
        <button onClick={this.plus5}>+5</button>
        <button onClick={this.minus5}>-5</button>
      </div>
    );
  }
}

export default App;