import React, { Component } from 'react'

export class MySection extends Component{
    render(){
        return(
            <section>
                <h2>MySection</h2>
                {this.props.children}
            </section>
        );
    }
}

export class MyButton extends Component{
    render(){
        return <button>{this.props.children}></button>
    }
}