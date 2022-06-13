import { create } from 'react-test-renderer';
import { List, Button, Card } from '../components';
import testData from './testData';

describe('List', () => {
  test('renders List component', () => {
    const component = create(<List data={testData} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders List with data', () => {
    const deleteHandler = jest.fn();
    const component = create(<List data={testData} />);
    const instance = component.root;
    const cards = instance.findAllByType(Card);
    const { count, records } = testData;
    
    expect(instance.props.data).toEqual(testData);
    expect(cards.length).toBe(4);

    cards.forEach((card, i) => {
      expect(card.props.index).toBe(i + 1);
      expect(card.props.count).toEqual(count);
      expect(card.props._id).toEqual(records[i]['_id']);
      expect(card.props.venue).toEqual(records[i]['venue']);
      expect(card.props.team1).toEqual(records[i]['team1']);
      expect(card.props.team2).toEqual(records[i]['team2']);
      expect(card.props.date).toEqual(records[i]['date']);
    });
  });

});