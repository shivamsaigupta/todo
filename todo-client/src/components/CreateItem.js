import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../actions';

class CreateItem extends React.Component{

  render(){
    const itemObj = {
      label: 'Tap to edit',
      done: false,
      editable: false
    };
    return (
      <div style={{marginTop: 10}}>
        <button className="ui button" onClick={() => this.props.createItem(itemObj)}>Add A New Item</button>
      </div>
    )}
}

const mapStateToProps = (state) => {
  return { userId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {createItem})(CreateItem);
