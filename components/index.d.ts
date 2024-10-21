import { type IconNames } from "./icon-names";
declare interface RemixIconProps {
  name: IconNames;
  size?: number | string;
  color?: string;
  [key: string]: any;
}
declare const RemixIcon: React.FC<RemixIconProps>;
export default RemixIcon;
