import React from "react"
class AlienNum extends React.Component {
    render(){

        //If the number does not exist, throw error
        if (this.props.num >= this.props.base){
            throw new Error ("You're trying to show a number that doesn't exist!\nYou tried to show the number "
            .concat(this.props.num)
            .concat(" in base ")
            .concat(this.props.base)
            .concat(", which is a mathematical impossibility."));
        }


        //Otherwise, show it.
        return(
            
            <img src={require(
                "./img/"
                .concat(this.props.base.toString())
                .concat("-")
                .concat(this.props.num.toString())
                .concat(".png"))} 
            style={{padding: "0 10px 0 0 "}}
            alt=""/>
        )
    }
}



export default AlienNum