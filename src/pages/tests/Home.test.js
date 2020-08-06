import React from "react";
import { Home } from "../Home";
import { render, screen, cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../reducer";
import {MemoryRouter } from "react-router-dom";

// afterEach(cleanup);
// it('Renders the connected Home component with initialState', () => {
//   render(<Home />, { initialState: { used: [] , choice: []} })

//   expect(screen.getByText(/choose number of questions/i)).toBeInTheDocument()
// })

const renderComponent = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(
      <MemoryRouter>
        {" "}
        <Provider store={store}> {component}</Provider>
      </MemoryRouter>
    ),
    store,
  };
};
//   render(
//     <Provider store={createStore(usedReducer, { score })}>
//       <Home />
//     </Provider>
//   );

afterEach(cleanup);

it("renders choose number of questions", () => {
  // Render new instance in every test to prevent leaking state
  renderComponent(<Home />);

  expect(screen.getByText(/choose number of questions/i)).toBeInTheDocument();
});

afterEach(cleanup);
