import { Text } from "react-native";
import { type IconNames } from "./icon-names";
import * as Icon from "./icons";

const RemixIcon = ({
  name,
  color = "black",
  size = 24,
  ...props
}: {
  name: IconNames;
  color?: string;
  size: number;
}) => {
  // If name starts with a number add a prefix "svg"
  const resolvedName = /^\d/.test(+name[0] as any) ? `svg-${name}` : name;

  const iconComponentName = resolvedName
    .split("-")
    .map((s) => s[0].toUpperCase() + s.substr(1))
    .join("");

  // @ts-expect-error
  const Component = Icon[iconComponentName];

  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default RemixIcon;
