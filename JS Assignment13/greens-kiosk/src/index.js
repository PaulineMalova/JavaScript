import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class App extends Component {
    render() {
        return(
        <div>
            <h1 id="title">Welcome to Greens Kiosk</h1>
            <p>We sell fruits and vegetables</p>
            <h2>Products</h2>
            <ul id="products">
                {/* Show products list from API */}
            </ul>
            <h3>Fruits</h3>
            <ul id="fruList">
            {/* Show fruits from API */}
            </ul>
            <h3>Vegetables</h3>
            <ul id="vegList">
            {/* Show vegetables from API */}
            </ul>
        </div>


        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
