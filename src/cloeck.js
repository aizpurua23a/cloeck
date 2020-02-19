import React from 'react'

//Base three numbers
const Three0 = () => (
        <img src={require("./img/3-0.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Three1 = () => (
        <img src={require("./img/3-1.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Three2 = () => (
        <img src={require("./img/3-2.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);

//Basic four numbers
const Four0 = () => (
        <img src={require("./img/4-0.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Four1 = () => (
        <img src={require("./img/4-1.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Four2 = () => (
        <img src={require("./img/4-2.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Four3 = () => (
        <img src={require("./img/4-3.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);


//Basic five numbers
const Five0 = () => (
    <img src={require("./img/5-0.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Five1 = () => (
    <img src={require("./img/5-1.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Five2 = () => (
    <img src={require("./img/5-2.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Five3 = () => (
    <img src={require("./img/5-3.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);
const Five4 = () => (
    <img src={require("./img/5-4.png")}  style={{padding: "0 10px 0 0"}} alt=""/>
);



const Three = () => (
    <div>
        <Three0 />
        <Three1 />
        <Three2 />
    </div>
);

const Four = () => (
    <div>
        <Four0 />
        <Four1 />
        <Four2 />
        <Four3 />
    </div>
);

const Five = () => (
    <div>
        <Five0 />
        <Five1 />
        <Five2 />
        <Five3 />
        <Five4 />
    </div>
)


class Hour3 extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        switch (this.props.h%3) {
            case 0:
              return (<Three0 />);
            case 1:
              return (<Three1 />);
            case 2:
              return (<Three2 />);
            default:
              return null;
        }
    }
}

class Hour4 extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        switch (Math.floor(this.props.h/3)%4) {
            case 0:
                return (<Four0 />);
            case 1:
                return (<Four1 />);
            case 2:
                return (<Four2 />);
            case 3:
                return (<Four3 />);
            default: 
            return null;
           
        }
    }
}

class Hour extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div>
                <Hour4 h={this.props.hour} />
                <Hour3 h={this.props.hour} />
            </div>
        );
    };
}

class Sixty3 extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        switch (this.props.num%3) {
            case 0:
              return (<Three0 />);
            case 1:
              return (<Three1 />);
            case 2:
              return (<Three2 />);
            default:
              return null;
        }
    }
}

class Sixty4 extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        switch (Math.floor(this.props.num/3)%4) {
            case 0:
                return (<Four0 />);
            case 1:
                return (<Four1 />);
            case 2:
                return (<Four2 />);
            case 3:
                return (<Four3 />);
            default: 
            return null;
           
        }
    }
}

class Sixty5 extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        switch (Math.floor(Math.floor(this.props.num/3)/4)%5) {
            case 0:
                return (<Five0 />);
            case 1:
                return (<Five1 />);
            case 2:
                return (<Five2 />);
            case 3:
                return (<Five3 />);
            case 4:
                return (<Five4 />);
            default: 
                return null;
           
        }
    }
}

class Minute extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div>
                <Sixty5 num={this.props.minute} />
                <Sixty4 num={this.props.minute} />
                <Sixty3 num={this.props.minute} />
            </div>
        );
    }
}

class Second extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div>
                <Sixty5 num={this.props.second} />
                <Sixty4 num={this.props.second} />
                <Sixty3 num={this.props.second} />
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
        var today = new Date();
        var hourNow = today.getHours();
        var minuteNow = today.getMinutes();
        var secondNow = today.getSeconds();
        return(
            <div>
                <p>The hour is:</p>
                <Hour hour={hourNow%12} /><br />
                <Minute minute={minuteNow} /><br />
                <Second second={secondNow} /><br />
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