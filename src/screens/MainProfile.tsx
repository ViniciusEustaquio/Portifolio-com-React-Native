import {StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Vinicius from '../../assets/vinicius.png'
import AntDesign from '@expo/vector-icons/AntDesign';




export default function MainProfile() {
  return (
    

    <View style={style.Contanier}>
      <View style={style.imageContanier}>
      <Image resizeMode='contain' source={Vinicius} style={style.image} />  
      <Text style={style.textName}>Vinicius Eustaquio</Text>
      </View>
      <View style={style.iconContanier}>
        <View style={style.iconDescription}>  
        <AntDesign name='instagram' size={35} color='#fff' />
        <Text style={style.textDescripiton}>@v.eustaquioo</Text>
        </View>
        <View style={style.iconDescription}>  
        <AntDesign name='github' size={35} color='#fff' />
        <Text style={style.textDescripiton}>ViniciusEustaquio</Text>
        </View>
        <View style={style.iconDescription}>  
        <AntDesign name='linkedin-square' size={35} color='#fff' />
        <Text style={style.textDescripiton}>linkedin.com/in/vinicius-eustaquio</Text>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}


const style = StyleSheet.create({
  
  Contanier: {
    flex: 1,
    backgroundColor: '#002080',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 30
  },
  
  image: {
   height: 250,
   width: 250,
   borderRadius: 125,
  },
  
  imageContanier: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  
  textName: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
    fontStyle: 'italic'
  },
  
  iconContanier:{
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 20
  },
  
  iconDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  
  textDescripiton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
  }
  
  
})