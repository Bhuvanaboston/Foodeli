import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'Bhuvana',
    };
    //parent constructor
    //parent render
    //child constructor
    //child render
    //child did mount
    //parent did mount
    console.log('constructor');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/Bhuvanaboston');
    const json = await data.json();
    console.log(json);

    this.setState({
      name: json.login,
    });
    console.log('componentDidMount');
  }
  render() {
    // const { count } = this.state;
    console.log('render');

    return (
      <div className="user-card">
        {/*   <h1>Count:{count}</h1>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add count
        </button>*/}
        <h1>Name:{this.props.name}</h1>
        <h1>Location: {this.props.location}</h1>
        <h1>Contact: https://www.linkedin.com/in/bhuvana-boston-99204b298/</h1>
      </div>
    );
  }
}

export default UserClass;
