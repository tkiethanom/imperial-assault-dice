import React, {Component} from 'react';

export default class AboutPage extends Component {
  render(){
    return (
        <div className="container-fluid">
          <h2>About</h2>
          <p>Thanks for checking out my app! This app was built just for fun and great appreciation for Descent Second Edition. </p>

          <p>This app was built with React, Redux, Webpack, SASS, Bootstrap, FontAwesome among other things.</p>

          <p>Check out the Github <i className="fa fa-github"></i> <a href="https://github.com/tkiethanom/descent2e-dice" target="_blank">here</a></p>
        </div>
    );
  }
}
