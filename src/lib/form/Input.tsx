const Input = (props: {
  label: string;
  type: string;
  name: string;
  value?: string;
  defaultChecked?: boolean;
}) => {
  return (
    <div className="mt-10 d-flex">
      <div className="d-flex w-100">
        <label htmlFor={props.name} className="mr-10 label-style">
          {props.label}
        </label>
      </div>
      <input
        className="style-input w-300"
        type={props.type}
        name={props.name}
        defaultValue={props.value}
        placeholder={props.label}
        defaultChecked={props.defaultChecked}
      />
    </div>
  );
};
export default Input;
