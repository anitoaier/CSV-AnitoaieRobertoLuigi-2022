import React from "react";
import Chairs from "./Chairs";
import TableControls from "./controls/TableControls";
import classes from "./Table.module.css";
import * as Icon from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from "react-bootstrap";

const Table = (props: {
    id: string;
    name: string;
    withControls: boolean;
    capacity: number;
    type: string;
    description: string;
    onEdit?: Function;
    onDelete?: Function;
}) => {
    const { id, name, capacity, type, description } = props;

    const tableWidth = 200;
    let chairFontSize = 40;

    const numOfChairsAbove = capacity % 2 === 0 ? capacity / 2 : Math.floor(+capacity / 2) + 1; // Math.ceil

    const numOfChairsBelow = capacity - numOfChairsAbove;

    if (capacity > 1) {
        chairFontSize = tableWidth / capacity;
    }

    const chairStyle = {
        fontSize: chairFontSize
    }

    const belowChairExtraStyle = {
        paddingTop: 5
    }

    return (
      <div className="mt-10 with-border p-30">
        <Chairs
          size={numOfChairsAbove}
          fontSize={chairFontSize}
          style={chairStyle}
        />
        <div
          className={classes.table}
          style={{ color: type === "indoor" ? "brown" : "green" }}
        >
          <div className="title-container">
          <span className={classes["table-name"]}>{name}</span>
          </div>
          <div className="icon-container">
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip >{description}</Tooltip>
              }
            >
              <Icon.InfoCircleFill
                style={{ color: type === "indoor" ? "brown" : "green" }}
                size={30}
              />
            </OverlayTrigger>
          </div>
        </div>
        <Chairs
          size={numOfChairsBelow}
          fontSize={chairFontSize}
          style={{ ...chairStyle, ...belowChairExtraStyle }}
        />
        {props.withControls && props.onEdit && (
          <>
            <hr></hr>
            <TableControls
              onEdit={props.onEdit}
              onDelete={props.onDelete}
              table={{ id, name, capacity, type }}
            />
          </>
        )}
      </div>
    );
}

export default Table;