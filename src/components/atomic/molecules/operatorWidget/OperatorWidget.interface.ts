import { STATUS_BADGE_TYPE } from "../../atoms";

export type OPERATOR_WIDGET_SIZE = "small" | "medium";

export interface IOperatorWidgetProps {
  name: string;
  lastName: string;
  status: STATUS_BADGE_TYPE;
  size?: OPERATOR_WIDGET_SIZE;
  showStatus?: boolean;
}
