import React from 'react'
import AlienNum from './AlienNum.js'

class Twelve extends React.Component {
    render() {

        //Error Handling
        if (this.props.n >= 12){
            throw new Error("Could you, like, try not to show a number greater or equal to 12? Thanks.")
        }

        //variables
        const n4 = Math.floor(this.props.n/3)%4;
        const n3 = this.props.n%3;

        

        return(
            <div>
                <AlienNum base={4} num={n4} />
                <AlienNum base={3} num={n3} />
            </div>
        );
    };
}

class Sixty extends React.Component {
    render() {

        //Errors
        if (this.props.n >= 60){
            throw new Error("Could you, like, try not to show a number greater or equal to 60? Thanks.")
        }

        //Variables
        const n5 = Math.floor(Math.floor(this.props.n/3)/4)%5;
        const n4 = Math.floor(this.props.n/3)%4;
        const n3 = this.props.n%3;
        return(
            <div>
                <AlienNum base={5} num={n5} />
                <AlienNum base={4} num={n4} />
                <AlienNum base={3} num={n3} />
            </div>
        );
    }
}

class ThreeSixtyFour extends React.Component {

    render() {

        //Errors
        if (this.props.n >= 365){
            throw new Error("Could you, like, try not to show a number greater or equal to 364? Thanks.")
        }

        //Variables
        const n13 = Math.floor(this.props.n/7)%13;
        const n7 = this.props.n%7;

        return(
            <div>
                <AlienNum base={13} num={n13} />
                <AlienNum base={7} num={n7} />

            </div>
        );
    }
}

class Cloeck extends React.Component {
    constructor(props){
        super(props);
        this.state = {time: Date.now() };
    }

    render(){
        //We calculate when "now" is
        var now = new Date();

        //theres not really an easy way to get the day of the year it is, so we do it manually
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        console.log('Day of year: ' + day);

        //We also get the time
        var hourNow = now.getHours()%12;
        var minuteNow = now.getMinutes();
        var secondNow = now.getSeconds();

        return(
            <div>
                <p>Today:</p>
                <ThreeSixtyFour n={day}/>

                <p>And the time is:</p>
                <Twelve n={hourNow}/>
                <Sixty n={minuteNow}/>
                <Sixty n={secondNow}/>
            </div>
        )
    }
    
    componentDidMount(){
        console.log("Cloeck Mounted")
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }
}


export default Cloeck