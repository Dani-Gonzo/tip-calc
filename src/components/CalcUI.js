import React, {Component} from 'react';

export default class CalcUI extends Component {
    state = {
        billAmt: "",
        serviceQual: 0,
        numPeople: "",
        total: ""
    }

    calculateTip = () => {
        const billAmt = this.state.billAmt;
        const serviceQual = this.state.serviceQual;
        let numPeople = this.state.numPeople;

        if (billAmt === "" || serviceQual == 0) {
            alert("Please enter values");
            return;
        }

        if (numPeople === "" || numPeople <= 1) {
            numPeople = 1;
        } 

        let total = (billAmt * serviceQual) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        this.setState({total: total});
    }

    changeHandler = e => {
        let id = e.target.id;
        let value = e.target.value;
        this.setState({[id]: value})
    }

    render() {
        let each;
        let tipContainer;

        if (this.state.numPeople > 1) {
            each = <small id="each"> each</small>
        }

        if (this.state.total) {
            tipContainer = <div id="totalTip">
                                <sup>$</sup>
                                <span id="tip">{this.state.total}</span>
                                {each}
                            </div>
        }

        return (
            <div id="container">
                <h1>Tip Calculator</h1>
                <div id="calculator">
                    <form>
                        <p>How much was your bill?</p>
                        <p>$ <input id="billAmt" type="text" onChange={this.changeHandler} placeholer="Bill Amount"></input></p>
                        <p>How was your service?</p>
                        <p>
                            <select id="serviceQual" value={this.state.serviceQual} onChange={this.changeHandler}>
                                <option disabled value="0">-- Choose an Option --</option>
                                <option value="0.25">25% Outstanding</option>
                                <option value="0.2">20% Good</option>
                                <option value="0.15">15% Okay</option>
                                <option value="0.10">10% Bad</option>
                                <option value="0.05">5% Terrible</option>
                            </select>
                        </p>
                    </form>
                    <p>How many people are sharing the bill?</p>
                    <p><input id="numPeople" type="text" onChange={this.changeHandler} placeholder="Number of People" /></p>
                    <button type="button" id="calculate" onClick={this.calculateTip}>Calculate Tip</button>
                </div>
                {tipContainer}
            </div>
        )
    }
}