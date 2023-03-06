import React from 'react';

class Clock extends React.Component {
    state = { date: new Date() };

    componentDidMount() {
        this.clockTime = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTime);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick() {
        console.log('Clicked');
    }

    render() {
        const { date } = this.state;

        return (
            <>
                <h1 className="heading">
                    <span>{date.toLocaleTimeString('bn-BD')}</span>
                </h1>
                <button onClick={this.handleClick}>Click Here</button>
            </>
        );
    }
}

export default Clock;
