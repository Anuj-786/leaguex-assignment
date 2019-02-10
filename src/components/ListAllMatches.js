import React, {Component} from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';

const styles = {
    container: {
        backgroundImage: "url('https://www.leaguex.com/batsman.jpg')",
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}
class ListAllMatches extends Component {
    render() {
        return(
            <Container fluid={true} style={styles.container}>
                <div className="mui--text-title" style={{textAlign: 'center', color: '#fff', marginTop: '10px'}}>All Matches</div>
                <Row>
                    {this.props.allMatch}
                </Row>
            </Container>
        )
    }
}

export default ListAllMatches;