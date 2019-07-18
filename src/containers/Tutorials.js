import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tutorials from '../components/containers/Tutorials';
//import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Tutorials extends Component {

    render () {
        return (
            <div>
                <Tutorials />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
        //onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tutorials);
