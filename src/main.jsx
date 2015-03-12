
// Shims and Polyfills
import 'es5-shim';
import 'es5-shim/es5-sham';
import 'console-polyfill';
import 'babelify/polyfill';

// Libraries
import React from 'react';


import Sample from './component/sample_component.jsx';

React.render(<div><Sample message="OH HAI REACT" /></div>, document.getElementById('app'));