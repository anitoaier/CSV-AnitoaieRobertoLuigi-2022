import React, { SyntheticEvent } from "react";
import { Form } from "react-bootstrap";
import Input from "../../../lib/form/Input";
import  "./TableForm.css";

const TableForm = (props: {
  onSubmit: Function;
  table?: {
    name: string;
    capacity: number;
    type: string;
    description: string;
  };
}) => {
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      [key: string]: {
        value: string;
      };
    };

    const tableData = {
      name: target.name.value,
      capacity: +target.capacity.value,
      type: target.type.value,
      description: target.description.value
    };

    props.onSubmit(tableData);
  };

  return (
    <form onSubmit={submitHandler}>
        <div>
            <Input name="name" type="text" label="Name" value={props.table?.name || ""}></Input>
        </div>
        <div className="mt-10">
            <Input name="capacity" type="number" label="Capacity" value={props.table?.capacity as unknown as string}></Input>
        </div>
        <div>
            <Input name="description" type="text" label="Description" value={props.table?.description || ""}></Input>
        </div>
        <div className="mt-10 d-flex">
          <label className="mr-10 label-style type-label">Type</label>
          <Form.Check
            inline
            defaultChecked={props.table?.type ==='indoor'}
            label="Indoor"
            name="type"
            id={`inline-radio-1`}
            type="radio"
            value="indoor"
          />
          <Form.Check
            inline
            label="Outdoor"
            name="type"
            id={`inline-radio-2`}
            type="radio"
            defaultChecked={props.table?.type ==='outdoor'}
            value="outdoor"
          />
        </div>
        <div className="mt-10">
            <button className="btn btn-grad">{props.table ? "Save" : "Add"}</button>
        </div>
    </form>
  );
};

export default TableForm;
