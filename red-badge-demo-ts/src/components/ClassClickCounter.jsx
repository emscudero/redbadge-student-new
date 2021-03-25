// Create a class version of the Functional Component
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {Button, Container} from "reactstrap";

class ClassClickCounter extends Component {
    constructor(props)
    super(props)
    this.state = { }
}

handleClick = () => {
    this.setState({})
}

render(){
    return(
        <Container>
            <p>The total clicks left are {this.state.countValue}</p>
        </Container>
    )
}