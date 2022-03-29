import { TestAction } from "../action";
import { ActionTypeTest } from "../action/index";
interface TestState {
  status: boolean;
}
const initialState = {
  status: false,
};
const reducer = (
  state: TestState = initialState,
  action: TestAction
): TestState => {
  switch (action.type) {
    case ActionTypeTest.test:
      return { status: !state.status };
    default:
      return state;
  }
};

export default reducer;
