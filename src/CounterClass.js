import React, { Component } from 'react';

class CounterClass extends Component {
    state = {
        count: 0,
    };
    handleChangeValue = (e) => {
        if (e.target.value === '0') {
            console.log('플러스');
            this.setState({ count: this.state.count + 1 });
        } else if (e.target.value === '1') {
            console.log('마이너스');
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>
                    <b>{count}</b>번 눌렀따
                </p>
                <button onClick={this.handleChangeValue} value="0">
                    +1
                </button>
                <button onClick={this.handleChangeValue} value="1">
                    -1
                </button>
            </div>
        );
    }
}

export default CounterClass;
