import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./Drawer";

export function Routes() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
