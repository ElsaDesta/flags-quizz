import React from "react";
import { Home } from "../Home";
import { render, screen, cleanup, fireEvent, getByDisplayValue } from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../reducer";
import {MemoryRouter, Link } from "react-router-dom";


const renderComponent = (
  component,
  { initialState, store = createStore(rootReducer, initialState),  } = {}, state={selectedOption:"", disabled: true}
) => {
  return {
    ...render(
      <MemoryRouter>
        {" "}
        <Provider store={store} state={state}> {component} </Provider>
      </MemoryRouter>
    ),
    store,
  };
};



 afterEach(cleanup);


//   expect(screen.getByText(/choose number of questions/i)).toBeInTheDocument();
// });

// it('renders link to play', () => {
// renderComponent(<Home />)
// expect(screen.getByRole('link', {name: /play/i})).toBeInTheDocument();
// })

renderComponent(<Home />)
test("home component renders link to play", () => {
  screen.debug()
 expect(screen.getByRole('link', {name: /play/i})).toBeInTheDocument()

})

// it("renders choose number of questions", () => {
//   // Render new instance in every test to prevent leaking state
//   renderComponent(<Home />);

// fireEvent.change(link, {target : {disabled: true}})
// expect(link.disabled).toBe(true)
