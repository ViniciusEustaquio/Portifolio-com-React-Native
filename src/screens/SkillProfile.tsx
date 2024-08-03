import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Vinicius from "../../assets/vinicius.png";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';







export default function SkillsProfile() {
  return (
    <View style={style.Contanier}>
      <View style={style.imageContanier}>
        <Image resizeMode="contain" source={Vinicius} style={style.image} />
        <Text style={style.textName}>Vinicius Eustaquio</Text>
      </View>

      <View style={style.skillsContanier}>
        <Text style={style.titleSkills}>Skills</Text>

        <View style={style.skillsDetails}>
          <FontAwesome5 name="react" size={40} color="#fff" />
          <Text style={style.levelSkills}>⭐⭐⭐⭐⭐</Text>
        </View>
        <View style={style.skillsDetails}>
        <Ionicons name="logo-javascript" size={40} color="#fff" />
          <Text style={style.levelSkills}>⭐⭐⭐⭐⭐</Text>
        </View>
        <View style={style.skillsDetails}>
        <MaterialCommunityIcons name="language-csharp" size={40} color="#fff" />
          <Text style={style.levelSkills}>⭐⭐⭐</Text>
        </View>
        <View style={style.skillsDetails}>
        <Fontisto name="mysql" size={40} color="#fff" />
          <Text style={style.levelSkills}>⭐⭐⭐⭐</Text>
        </View>
        <View style={style.skillsDetails}>
        <FontAwesome5 name="node" size={40} color="#fff" />
          <Text style={style.levelSkills}>⭐⭐⭐⭐⭐</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  Contanier: {
    flex: 1,
    backgroundColor: "#002080",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 50,
  },

  image: {
    height: 250,
    width: 250,
    borderRadius: 125,
  },

  imageContanier: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  textName: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
    fontStyle: "italic",
  },

  skillsContanier: {
    width: "80%",
    height: "60%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 100,
    gap: 15
  },

  titleSkills: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "600",
    letterSpacing: 2,
    marginBottom: 20
  },
  
  skillsDetails: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  levelSkills: {
    fontSize: 22
  }
  
});
