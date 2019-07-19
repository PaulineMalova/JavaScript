import React from 'react';
import './App.css';
import Products from './products';
import Fruits from './fruits';
import Vegetables from './vegetables';
import Collapsible from 'react-collapsible';


class App extends React.Component {

  render() {


      return(
      <div>
          <h1 id="title">Welcome to Greens Kiosk</h1>
          <p>We sell fruits and vegetables</p>
          <h2>Products</h2>
          <Collapsible trigger = "Click to view products list" >
            <ul id="products">
              
                <Products />

            </ul>
          </Collapsible>
          <h2>Fruits</h2>
          <Collapsible trigger = "Click to view fruits list">
            <ul id="fruList">

                <Fruits />
          
            </ul>
          </Collapsible>
          <h3>Vegetables</h3>
          <Collapsible trigger = "Click to view vegetables list">
            <ul id="vegList">
            
                <Vegetables />

            </ul>
          </Collapsible>
      </div>


      )
  }
}

export default App;
