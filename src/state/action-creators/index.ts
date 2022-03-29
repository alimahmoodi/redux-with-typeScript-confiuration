import axios from "axios";
import { ActionType } from "../action-type";
import { Dispatch } from "redux";
import { Action, ActionTypeTest, TestAction } from "../action";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: "salam",
      });
    }
  };
};

export const testActionCreator = (): TestAction => {
  return { type: ActionTypeTest.test };
};
