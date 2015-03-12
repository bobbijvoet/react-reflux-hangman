import React from 'react';

var SampleComponent = React.createClass({
  render() {
    return (
      <h1>{this.props.message}</h1>
    );
  }
});


export default SampleComponent;