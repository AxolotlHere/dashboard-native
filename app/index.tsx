import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import StackingBezierCurve from "./components/curve";

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};


export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState(systemScheme);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    console.log(mode)
  };  
  useEffect(() => {
    Font.loadAsync({
      'Inter': require('../assets/fonts/Inter.ttf'),
      'Inter-Italic': require('../assets/fonts/Inter-Italic.ttf'),
      'Epunda': require('../assets/fonts/EpundaSlab-Medium.ttf'),
      'Epunda-Bold': require('../assets/fonts/EpundaSlab-Black.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);
    if (!fontsLoaded) return null;


  let img_url:string = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'
  let user_name:string = 'Naveen Bharath'
  let credits_avail:Float = 10.43
  let sample_data = [
    {"id":12341,"price":12,"location":"Vandallur","img":"https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"},
    {"id":12341,"price":12,"location":"Vandallur","img":"https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"},
    {"id":12341,"price":12,"location":"Vandallur","img":"https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"},
    {"id":12341,"price":12,"location":"Vandallur","img":"https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"}
  ]
  return (
    <View style={[{backgroundColor: mode==='light'?'#efefef':'#1c1c1c'},styles.container]}>
      <View style={styles.headerContainer}>
        <StackingBezierCurve width={375} height={200}/>
        <Pressable style={styles.settingsButton}>
          <View style={[{backgroundColor: mode==='light'?'#efefef':'#1c1c1c'},styles.settingsWrapper]}>
            <Image
              source={require('../assets/images/settings.png')}
              style={styles.settingsIcon}
            />
          </View>
        </Pressable>
        <Pressable style={styles.themesButton} onPress={toggleMode}>
          <View style={[{backgroundColor: mode==='light'?'#efefef':'#1c1c1c'},styles.themesWrapper]}>
            <Image
              source={mode==='light'?require('../assets/images/moon.png'):require('../assets/images/sun.png')}
              style={styles.themesIcon}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Pressable   onPress={() => {
    console.log('Pressable was clicked!');
    router.push({
      pathname: '/profile',
      params:{
        mode: mode
      }
    })
  }}>
          <Image source={{uri: img_url}} style={{
            width: 75,
            height: 75,
            borderRadius: 500,
            borderColor: 'white',
            borderWidth: 2
          }}></Image>
          </Pressable>
          <Text style={{fontFamily: 'Roboto',fontWeight: 'bold', fontSize: 23, color: mode==='light'?'#1c1c1c':'#efefef', marginTop: 40, marginLeft: 5}}>HELLO, {user_name.toUpperCase()} !</Text>
      </View>
      <Text style={{fontFamily: 'Epunda', fontSize: 15, paddingLeft: 105, color: mode==='light'?'#1c1c1c':'#efefef'}}>Avl. CREDITS : {credits_avail}</Text>
      <View style={{ margin: 30, display:'flex', flexDirection:'row', alignContent: 'center', alignItems: 'center', backgroundColor: 'rgba(235, 229, 229, 0.5)', padding: 20, borderRadius: 20}}>
        <Text style={{fontFamily:'roboto', fontWeight: 'bold', fontSize: 20, width:'auto',color: mode==='light'?'#1c1c1c':'#efefef'}}>
          CREATE YOUR NEW {'\n'}AD BILLBOARD
        </Text>
        <TouchableOpacity onPress={()=>{}}>
          <View style={{
            backgroundColor: mode==='light'?'#3555d4ff':'#574ed6ff',
            borderRadius: 500,
            marginLeft: 90,
          }}>
            <Image
              source={require('../assets/images/arrow.png')}
              style={{width: 40, height: 40}}
            />
          </View>
        </TouchableOpacity>
        
      </View>
      <Text style={{fontFamily: 'Roboto',fontWeight: 'bold', fontSize: 23, color: mode==='light'?'#1c1c1c':'#efefef',marginLeft: 30}}>MY ADS BILL-BOARD</Text>
      <ScrollView style={{height: 400, margin: 10, marginTop: 20}}>
        {sample_data.map((rec, index)=>(
          <View key={index} style={{
            margin: 20,
            display: 'flex',
            flexDirection: 'row'
          }}>
            <View style={{shadowColor: '#000',
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          backgroundColor: 'white',
  elevation: 5}}><Image source={{uri: rec.img, width: 70, height: 70}} style={{shadowColor: 'black'}} ></Image></View>
            <View style={{marginLeft: 30}}>
              <Text style={{fontFamily: 'Roboto', fontSize: 15,color: mode==='light'?'#1c1c1c':'#efefef'}}><Text style={{fontWeight: 'bold'}}>BOARD ID:</Text>{'\t'}{rec.id}</Text>
              <Text style={{fontFamily: 'Roboto', fontSize: 15,color: mode==='light'?'#1c1c1c':'#efefef'}}><Text style={{fontWeight: 'bold'}}>PRICE:</Text>{'\t'}{rec.price}</Text>
              <Text style={{fontFamily: 'Roboto', fontSize: 15,color: mode==='light'?'#1c1c1c':'#efefef'}}><Text style={{fontWeight: 'bold'}}>LOCATION:</Text>{'\t'}{rec.location}</Text>
            </View>
            <TouchableOpacity onPress={()=>console.log("yeah....")} style={{
              backgroundColor: '#3555d4ff',
              height: 30,
              width: 60,
              marginTop: 10,
              marginLeft: 30,
              justifyContent: 'center',
              borderRadius: 10
            }}>
              <Text style={{
                textAlign: 'center',
                alignContent:'center',
                color: 'white',
                backgroundColor: mode==='light'?'#3555d4ff':'#574ed6ff'
              }}>Track</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'top'
    
  },
  headerContainer: {
    width: '100%',
    height: 200,
    position: 'absolute',
    left:0,
    
  },
  settingsButton: {
    position: 'absolute',
    top: 40,
    right: 40,
    zIndex: 10,
  },
  settingsWrapper: {
    padding: 4,
    borderRadius: 500,
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },

  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  credits: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    paddingTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 'auto',
    marginTop: 50,
    marginLeft: 20,
  },
  themesButton: {
    position: 'absolute',
    top: 40,
    right: 100,
    zIndex: 10,
  },
  themesWrapper: {
    padding: 4,
    borderRadius: 500,
  },
  themesIcon: {
    width: 30,
    height: 30,
  },
});