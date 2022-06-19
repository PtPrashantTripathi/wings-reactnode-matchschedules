import model from "../model";
import Button from "./Button";
import Error from "./Error";

// Form Component has following elements
// use label and input elements for each input field
// custom Button component executes "onSaveHandler" prop when clicked
// props:
//   title: renders heading using h3 tag
//   onSaveHandler: called when the Save button is clicked
//   inputOnChangeHandler: helps to capture the entered data to store it in state
//   error: renders the error from backend
const Form = ({ title, inputOnChangeHandler, onSaveHandler, error }) => (
  <form>
    <h3>{title}</h3>
    <Error message={error} />
    {model.filter(i => i.input_type)
      .map(i =>
        <div key={i.key} className="form-group">
          <label htmlFor={i.column_name}>{i.title}</label>
          <input
            type={i.input_type}
            name={i.column_name}
            onChange={inputOnChangeHandler}
          />
        </div>
      )}
    <Button onClick={onSaveHandler} className="success">Save</Button>
  </form>
);

export default Form;