import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({Cards}, ColumnId) => Cards.filter(Card => Card.ColumnId == ColumnId);

// action name creator
const reducerName = 'Cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_Card = createActionName('ADD_Card');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_Card });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_Card:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
} 