import React, {Component} from 'react';
import Container from 'muicss/lib/react/container';

class GetAllLeague extends Component {

    render() {
        console.log(this.props)
        return(
            <Container>
                <h1>All league</h1>
            </Container>
        )
    }
}

export default GetAllLeague