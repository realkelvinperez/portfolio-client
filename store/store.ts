import { createStore, action } from "easy-peasy";

const scrollModel = {
  elements: [],
  addElement: action((state, payload) => {
      state.elements.push(payload)
      console.log(state, payload)
  })
};

const store = createStore({
    scrollElements: scrollModel
});

export default store;
