import { create } from 'react-test-renderer';
import { Form, Error, Button } from '../components';
import model from '../model';

describe('Form', () => {


  test('Form renders with all required input elements', () => {
    const changeHandler = jest.fn();
    const component = create(<Form title="Add" inputOnChangeHandler={changeHandler} />).root;
    const inputElements = component.findAllByType('input');

    const actualNumberOfInputs = model.filter(i => i.input_type).length;
    expect(inputElements.length).toBe(actualNumberOfInputs);

    model.filter(i => i.input_type)
      .forEach((i, index) => {
        // Expects a input element
        expect(i.column_name).toBe(inputElements[index].props.name);
        expect(i.input_type).toBe(inputElements[index].props.type);
        expect(inputElements[index].props.onChange).toEqual(changeHandler);
        inputElements[index].props.onChange();
      });

    expect(component.props.inputOnChangeHandler).toHaveBeenCalledTimes(actualNumberOfInputs);
  });

});