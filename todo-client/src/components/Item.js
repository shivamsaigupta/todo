import React from 'react';

const Item = (props) => {
  return(
    <div className="ui segment" onClick={props.onClick}>
      <div className="ui checkbox">
        <input type="checkbox"
          name={props.name}
          onClick={(e) => e.stopPropagation()}
          checked={props.done}
          onChange={props.onDone}
         />
         {props.editable ?
           <div className="ui input">
              <input type="text" className="ui input" onClick={(e) => e.stopPropagation()} onKeyPress={(e) => props.onKeyPress(e)} value={props.label} onChange={(e) => props.onEditChange(e)} />
          </div>
          : <label>{props.label}</label> }
      </div>
      <div style={{float: 'right'}} onClick={props.onDelete}>
        <i className="trash alternate outline icon" />
      </div>
    </div>
  )
}

export default Item;
