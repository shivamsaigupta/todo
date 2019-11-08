import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { fetchItems, itemToggle, itemDelete, itemEditToggle, itemLabelChange } from '../actions';

class Content extends React.Component{

  componentDidMount(){
      this.props.fetchItems();
  }

  onDone = (id) => {
    this.props.itemToggle(id);
  }

  onDelete = (id) => {
    this.props.itemDelete(id);
  }

  onEdit = (id) => {
    this.props.itemEditToggle(id);
  }

  onEditChange = (id, e) => {
    this.props.itemLabelChange(id, e.target.value);
  }

  onKeyPress = (id, e) => {
    if(e.key == 'Enter'){
      this.props.itemEditToggle(id);
    }
  }

  renderItems = () => {
     return this.props.items.map( item => {
       return <Item label={item.label}
        name={item.id}
        key={item.id}
        done={item.done}
        onDone={() => this.onDone(item.id)}
        onDelete={() => this.onDelete(item.id)}
        onClick={() => this.onEdit(item.id)}
        editable={item.editable}
        onEditChange={(e)=> this.onEditChange(item.id, e)}
        onKeyPress={(e) => this.onKeyPress(item.id, e)}
        />
     })
  }

  render(){
    console.log('test')
    return(
      <div>
        {this.renderItems()}
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  //Object.values converts object into array so that we can use map() later
  return { items: Object.values(state.items) ,
    userId: state.auth.userId }
}

export default connect(mapStateToProps, {fetchItems, itemToggle, itemDelete, itemEditToggle, itemLabelChange})(Content);
