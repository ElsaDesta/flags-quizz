import reducers from "../index";

test('reducers', () => {
  let state;
  state = reducers({used:[],score:0,choice:['5']}, {type:'ADD_USED_COUNTRY',used:'Central African Republic'});
  expect(state).toEqual({used:['Central African Republic'],score:0,choice:['5']});
});

test('reducers', () => {
    let state;
    state = reducers({used:['Central African Republic','Bermuda'],score:0,choice:['5']}, {type:'COUNT_SCORE',count:1});
    expect(state).toEqual({used:['Central African Republic','Bermuda'],score:1,choice:['5']});
  });

  test('reducers', () => {
    let state;
    state = reducers({used:['Central African Republic','Bermuda','Benin','Réunion','Liechtenstein'],score:2,choice:['5']}, {type:'COUNT_SCORE',count:1});
    expect(state).toEqual({used:['Central African Republic','Bermuda','Benin','Réunion','Liechtenstein'],score:3,choice:['5']});
  });