import { create } from 'react-test-renderer';
import App, { NODE_APP_URL } from '../App';
import testData from './testData';
import { List, Modal, Button, Error, Form } from '../components';
import { name } from '../../package.json';

describe('App', () => {
  beforeEach(() => {
    const mockSuccessResponse = testData;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders app component', () => {
    const component = create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("component did mount", (done) => {
    create(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      NODE_APP_URL
    );
    global.fetch.mockClear();
    done();
  });

  test('renders App correctly', () => {
    const component = create(<App />).root;

    expect(component.findByType(List)).not.toBeNull();
    expect(component.findByType(Modal)).not.toBeNull();
    expect(component.findByType(Button)).not.toBeNull();
    expect(component.findByType(Error)).not.toBeNull();
  });

  test("App Button click opens Modal and renders form", () => {
    const component = create(<App />);
    const instance = component.getInstance();
    const button = component.root.findByType(Button);

    expect(instance.state.showModal).toBe(false);

    expect(button.props.onClick).not.toBe(undefined);
    expect(button.props.onClick).toEqual(instance.showModalHandler);
    button.props.onClick();

    expect(instance.state.showModal).toBe(true);

    // Expect Modal and Form to have rendered by now
    const modalComponent = component.root.findByType(Modal);
    expect(modalComponent).not.toBeNull();
    expect(modalComponent.props.closeHandler).toEqual(instance.closeModalHandler);
    expect(modalComponent.props.show).toEqual(instance.state.showModal);

    const formComponent = component.root.findByType(Form);
    expect(formComponent).not.toBeNull();
    expect(formComponent.props.onSaveHandler).toEqual(instance.submitHandler);
    expect(formComponent.props.inputOnChangeHandler).toEqual(instance.inputChangeHandler);
  });

  test("App showModalHandler", () => {
    const component = create(<App />);
    const instance = component.getInstance();

    expect(instance.state.showModal).toBe(false);

    instance.showModalHandler();
    expect(instance.state.showModal).toBe(true);
    expect(component.root.findByType(Modal)).not.toBeNull();
    expect(component.root.findByType(Form)).not.toBeNull();
  });

  test("App closeModalHandler", () => {
    const component = create(<App />);
    const instance = component.getInstance();

    instance.setState({
      showModal: true,
      error: "Error",
      formError: "Error",
      formValues: { "abc": "def" }
    });

    instance.closeModalHandler();
    expect(instance.state.showModal).toBe(false);
    expect(instance.state.formValues).toEqual({});
    expect(instance.state.formError).toEqual(undefined);
    expect(instance.state.error).toEqual(undefined);
  });

  test("App fetchData", () => {
    const component = create(<App />);
    const instance = component.getInstance();

    instance.fetchData();
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(NODE_APP_URL);
    global.fetch.mockClear();

    expect(instance.state.error).toEqual(undefined);
  });

  test("App fetchData return error", () => {
    const component = create(<App />);
    const instance = component.getInstance();

    const mockErrorResponse = "Some Error";
    const mockJsonErrorPromise = Promise.resolve({ error: mockErrorResponse });
    const mockFetchPromiseError = Promise.resolve({
      json: () => Promise.resolve(mockJsonErrorPromise),
    });
    jest.spyOn(global, "fetch").mockReturnValue(mockFetchPromiseError);

    instance.fetchData();
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(NODE_APP_URL);
    global.fetch.mockClear();

    expect(component.root.findByType(Error)).not.toBeNull();
  });

  test("App submitHandler", () => {
    const event = { target: { name: "abc", value: "123", type: 'number' }, preventDefault: jest.fn() };
    const formValues = { abc: 123 };
    const component = create(<App />);
    const instance = component.getInstance();

    instance.inputChangeHandler(event);
    instance.submitHandler(event);

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(NODE_APP_URL);
    expect(global.fetch).toHaveBeenCalledWith(
      NODE_APP_URL,
      {
        method: "post",
        body: JSON.stringify(formValues),
        headers: { "Content-Type": "application/json" },
      }
    );
    global.fetch.mockClear();
  });

  test("App submitHandler returns error", () => {
    const event = { target: { name: "abc", value: "123", type: 'number' }, preventDefault: jest.fn() };
    const formValues = { abc: 123 };
    const component = create(<App />);
    const instance = component.getInstance();

    const mockErrorResponse = "Some Error";
    const mockJsonErrorPromise = Promise.resolve({ error: mockErrorResponse });
    const mockFetchPromiseError = Promise.resolve({
      json: () => Promise.resolve(mockJsonErrorPromise),
    });
    jest.spyOn(global, "fetch").mockReturnValue(mockFetchPromiseError);

    instance.inputChangeHandler(event);
    instance.submitHandler(event);

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(NODE_APP_URL);
    expect(global.fetch).toHaveBeenCalledWith(
      NODE_APP_URL,
      {
        method: "post",
        body: JSON.stringify(formValues),
        headers: { "Content-Type": "application/json" },
      }
    );
    global.fetch.mockClear();

    const errorComponent = component.root.findByType(Error);
    expect(errorComponent).not.toBeNull();
  });
});

