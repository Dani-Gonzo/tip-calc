import React from 'react';

const CalcUI = () => {
    let total;

    function calculateTip() {
        const billAmt = document.getElementById("billamt").value;
        const serviceQual = document.getElementById("serviceQual").value;
        let numPeople = document.getElementById("peopleamt").value;

        if (billAmt === "" || serviceQual == 0) {
            alert("Please enter values");
            return;
        }

        if (numPeople === "" || numPeople <= 1) {
            numPeople = 1;
            document.getElementById("each").style.display = "none";
        } else {
            document.getElementById("each").style.display = "block";
        }

        total = (billAmt * serviceQual) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        document.getElementById("totalTip").style.display = "block";
        document.getElementsById("tip").innerHTML = total;
    }

    let tipContainer;

    if (total) {
        tipContainer = <div id="totalTip">
                            <sup>$</sup>
                            <span id="tip">0.00</span>
                            <small id="each"> each</small>
                        </div>
    }

    return (
        <div id="container">
            <h1>Tip Calculator</h1>
            <div id="calculator">
                <form>
                    <p>How much was your bill?</p>
                    <p>$ <input id="billamt" type="text" placeholer="Bill Amount"></input></p>
                    <p>How was your service?</p>
                    <p>
                        <select id="serviceQual">
                            <option disabled selected value="0">-- Choose an Option --</option>
                            <option value="0.25">25% Outstanding</option>
                            <option value="0.2">20% Good</option>
                            <option value="0.15">15% Okay</option>
                            <option value="0.10">10% Bad</option>
                            <option value="0.05">5% Terrible</option>
                        </select>
                    </p>
                </form>
                <p>How many people are sharing the bill?</p>
                <input id="peopleamt" type="text" placeholder="Number of People" />
                <button type="button" id="calculate" onClick={calculateTip}>Calculate Tip</button>
            </div>
            {tipContainer}
        </div>
    );
}

export default CalcUI;