import React, {Component} from 'react';
import CalcUI from './components/CalcUI';

export default class App extends Component {
    render() {
        return (
            <div className="main">
                <CalcUI />
            </div>
        )
    }
}