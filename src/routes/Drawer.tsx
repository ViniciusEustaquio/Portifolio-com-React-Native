import { createDrawerNavigator } from '@react-navigation/drawer';
import MainProfile from '../screens/MainProfile';
import SkillsProfile from '../screens/SkillProfile';

const {Navigator, Screen} = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Navigator>
      <Screen name="Home" component={MainProfile} />
      <Screen name="Skills" component={SkillsProfile} />
    </Navigator>
  );
}