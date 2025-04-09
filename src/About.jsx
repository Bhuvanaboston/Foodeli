import UserClass from './UserClass';
import React from 'react';
class About extends React.Component {
  constructor() {
    super();
    console.log(' parent constructor');
  }
  componentWillUnmount() {
    console.log(' parent componentWillUnmount');
  }
  componentDidUpdate() {
    console.log('parent componentDidUpdate');
  }
  componentDidMount() {
    console.log('parent componentDidMount');
  }
  render() {
    console.log('parent render');

    return (
      <div>
        <h1>This is about Section</h1>
        <UserClass name={'Bhuvana'} location={'London, UK'} />
        <UserClass name={'Boston'} location={'London, UK'} />
      </div>
    );
  }
}
/*const About = () => {
  return (
    <div>
      <h1>This is about Section</h1>
      <UserClass name={'Bhuvana'} location={'London, UK'} />
      <UserClass name={'Boston'} location={'London, UK'} />
    </div>
  );
};
*/
export default About;
