import { Text } from "react-native";
import * as Icon from "./icons";

const RemixIcon = ({
  name = "remixicon-fill",
  color = "black",
  size = 24,
  ...props
}) => {
  name = name.startsWith("ri-") ? name.substring(3) : name;
  // If name starts with a number add a prefix "svg"
  name = /^\d/.test(+name[0]) ? `svg-${name}` : name;

  const iconComponentName = name
    .split("-")
    .map((s) => s[0].toUpperCase() + s.substr(1))
    .join("");

  const Component = Icon[iconComponentName];
  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default RemixIcon;
