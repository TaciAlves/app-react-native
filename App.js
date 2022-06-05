// import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import  Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
// import { Alert } from 'react-native-web';
// import imagex from './assets/icons/eco-light.png';

export default function App() {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() =>{
    //liga flash do celular
    Torch.switchState(toggle);
    
  }, [toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      handleChangeToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, [toggle]);

  return <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
    
      <Image
        style={toggle ? style.lightingOn : style.lightingOff}
        source={
          toggle
            ? require('./assets/icons/eco-light.png')
            : require('./assets/icons/eco-light-off.png')}>

      </Image>
      <Image
        style={style.dioLogo}
        source={
          toggle
            ? require('./assets/icons/logo-dio.png')
            : require('./assets/icons/logo-dio-white.png')}>

      </Image>
    </TouchableOpacity>
  </View>;

};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignItems: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 250,
    height: 250,
  },
});
