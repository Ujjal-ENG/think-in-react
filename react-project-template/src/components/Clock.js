import React from 'react';
import Button from './Button';
class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

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

    handleClick = () => {
        this.setState({
            locale: 'en-US'
        });
    };

    render() {
        const { date, locale } = this.state;

        return (
            <>
                <h1 className="heading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} />
            </>
        );
    }
}

export default Clock;
