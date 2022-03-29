import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCretores } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCretores, dispatch);
};
