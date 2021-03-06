
import React, {Component} from 'react';

export class Button extends Component {

    handleclick () {
        if (this.props.onClick)
        this.props.onClick();
    }

    render() {
        return(
        <div className={"button"} onClick={this.handleClick.bind(this)}>
            {this.props.display}
        </div>
        )
    }
}
