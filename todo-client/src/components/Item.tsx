import React from "react";

interface Props {
  name: string;
  label: string;
  key: number;
  done: boolean;
  onDone: () => void;
  onDelete: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  editable: boolean;
  onEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Item: React.FC<Props> = (props) => {
  return (
    <div className="ui segment" onClick={props.onClick}>
      <div className="ui checkbox">
        <input
          type="checkbox"
          name={props.name}
          onClick={(e) => e.stopPropagation()}
          checked={props.done}
          onChange={props.onDone}
        />
        {props.editable ? (
          <div className="ui input">
            <input
              type="text"
              className="ui input"
              onClick={(e) => e.stopPropagation()}
              onKeyPress={(e) => props.onKeyPress(e)}
              value={props.label}
              onChange={(e) => props.onEditChange(e)}
            />
          </div>
        ) : (
          <label>{props.label}</label>
        )}
      </div>
      <div style={{ float: "right" }} onClick={props.onDelete}>
        <i className="trash alternate outline icon" />
      </div>
    </div>
  );
};

export default Item;
