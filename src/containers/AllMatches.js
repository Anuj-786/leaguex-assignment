import React, { Component } from 'react';
import { connect } from 'react-redux';
import Col from 'muicss/lib/react/col';
import ListAllMatches from '../components/ListAllMatches';
import {getAllMatches, getAllLeague} from '../actions';
import Row from 'muicss/lib/react/row';

class AllMatches extends Component {
    componentDidMount() {
        this.props.dispatch(getAllMatches())
    }
    
    getLeague = (id, e) => {
        e.preventDefault()
        this.props.dispatch(getAllLeague(id))
    }
    render() {
        // console.log(this.props.matches.getAllMatches.allMatches)
        let { allMatches } =  this.props.matches.getAllMatches
        let allMatch=[];

        if(allMatches) {
            allMatches.live.map( ({id,match_status,t1_image,t2_image,match_name, match_type}) => {
                 return allMatch.push(
                    <a href='#' onClick={e=>this.getLeague(id, e)} key={id} style={{color: 'inherit'}}>
                        <Col md="2" >
                            
                            <div style={styles.matchContainer}>
                                <Row>
                                    <Col md="3">
                                        <img src={t1_image}  style={{height: '30px'}} alt=''></img>
                                    </Col>
                                    <Col md="6" style={{padding: '0px'}}>
                                        <Row>
                                            <Col md="12" style={{textAlign: "center", marginTop: '-5px'}}>
                                                <span style={{display: 'inline-block', width: '8px', height: '8px', borderRadius: '100px', backgroundColor: '#fc3737'}}></span>
                                                <span style={{paddingLeft: '5px'}}>{match_status}</span>
                                            </Col>
                                            <Col md="12" style={{textAlign: "center"}}>
                                                <span ><strong>{match_name}</strong></span><br />
                                                <span>{match_type}</span>
                                            </Col>
                                        </Row>
                                        
                                    </Col>
                                    <Col md="3">
                                        <img src={t2_image}  style={{height: '30px'}} alt=''></img>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </a>
                    )
            })
        }
        if(allMatches) {
            allMatches.upcoming.map( ({id, match_status,t1_image,t2_image,match_name, match_type}) => {
                return allMatch.push(
                    <a href='#' onClick={e=>this.getLeague(id, e)} style={{color: 'inherit'}} key={id}>
                        <Col md="2" >
                            
                            <div style={styles.matchContainer}>
                                <Row>
                                    <Col md="3">
                                        <img src={t1_image}  style={{height: '30px'}} alt=''></img>
                                    </Col>
                                    <Col md="6" style={{padding: '0px'}}>
                                        <Row>
                                            <Col md="12" style={{textAlign: "center", marginTop: '-5px'}}>
                                                <span style={{display: 'inline-block', width: '8px', height: '8px', borderRadius: '100px', backgroundColor: '#fc3737'}}></span>
                                                <span style={{paddingLeft: '5px'}}>{match_status}</span>
                                            </Col>
                                            <Col md="12" style={{textAlign: "center"}}>
                                                <span ><strong>{match_name}</strong></span><br />
                                                <span>{match_type}</span>
                                            </Col>
                                        </Row>
                                        
                                    </Col>
                                    <Col md="3">
                                        <img src={t2_image}  style={{height: '30px'}} alt=''></img>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </a>
                    )
            })
        }

        
        return(
            <ListAllMatches allMatch={allMatch}/>
        )    
    }
    
}
function mapStateToProps(state) {
    return {matches: state}

}

const styles = {
    matchContainer: {
        marginTop: '15px',
        background: '#fff',
        padding: '15px 10px 15px 5px',
        borderRadius: '5px'
    }
    
}
export default connect(mapStateToProps)(AllMatches)