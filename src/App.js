import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

class Card extends Component {
  state = {
    name: "faltanne",
    datvalide: "1120",
    cardnumber: "",
  }
  handChange = (a) => {
    this.setState({
      [a.target.name]: a.target.value
    })
  }

  // (/(\d{4})/g, '$1 ')
  render() {
    let reg = /[0-9]/gi
    return (
      <div className="credit-card" >
        <div className="Card">
          <div className="company-items"><h2>Company Name</h2></div>
          <div className="puce-items"><img src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png" width="100px" />  </div>
          <div className="numcomp-items"><h5>{this.state.cardnumber.padEnd(16, '*').replace(/(.{4})/g, '$1 ')}</h5 ></div>
          <div><p className="datevalid-items">{this.state.datvalide.slice(0, 2) + '/' + this.state.datvalide.slice(2, 4)}</p>
            <p className="logo-items">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" width="120px" />
            </p></div>
          <div className="foulan-items">{(this.state.name).toUpperCase()}</div>
        </div>
        <div className="input-items">
          <input type="text" maxLength="16" placeholder="Card Number" name="cardnumber" onChange={this.handChange} /><br />
          <input className="secondinput-items" name="name" placeholder="Personne Name" maxLength="20" type="text" onChange={this.handChange} /><br />
          <input type="text" name="datvalide" placeholder="Date Expire" onChange={this.handChange} />
        </div >
      </div >
    )
  }
}


export default Card;
