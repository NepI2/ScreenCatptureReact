import React from "react";


class FirstComponent extends React.Component{
    render() {
        return(
            <h1>{this.props.param}</h1>
        )
    }
}
export default FirstComponent