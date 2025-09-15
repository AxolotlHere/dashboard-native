import * as Font from 'expo-font';
import { router, useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import stripesImage from '../assets/images/stripes.jpg';

const Profile = () => {
   const {mode} = useGlobalSearchParams()
   const [fontsLoaded, setFontsLoaded] = useState(false);
   let img_url:string = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'
   let user_name:string = 'Naveen Bharath'
   let credits_avail = 10.43
   let w_device = Dimensions.get("window").width
   let h_device = Dimensions.get("window").height
   let profession:string = 'B2B Owner'
   let contact:string = '+91 9365546386'
   let trustee_review = [
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      },
      {
         "img_url":stripesImage,
         "rating":4.2
      }
   ] 
   let location:string = 'Chennai, Tamil Nadu'
   let about:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et eleifend ante. Integer non placerat nulla, sed bibendum eros. (MORE)`
   useEffect(() => {
    Font.loadAsync({
      'Inter': require('../assets/fonts/Inter.ttf'),
      'Inter-Italic': require('../assets/fonts/Inter-Italic.ttf'),
      'Epunda': require('../assets/fonts/EpundaSlab-Medium.ttf'),
      'Epunda-Bold': require('../assets/fonts/EpundaSlab-Black.ttf'),
      }).then(() => setFontsLoaded(true));
   }, []);
   return(
      <View style={{ flex: 1 , backgroundColor: mode==='light'?'#efefef':'#1c1c1c'}}>
      <View style={{
         display:'flex',
         flexDirection:'row',
      }}>
         <View style={{
            width:w_device/2,
            height: h_device/2.2,
            backgroundColor: mode==='light'?'rgba(236,235,253,255)':'#424247',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <TouchableOpacity onPress={()=>router.push("/")} style={{
               position: 'absolute',
               top: 30,
               left: 10
            }}>
                      <View style={{
                        borderRadius: 500,
                        marginLeft: 0,
                      }}>
                        <Image
                          source={require('../assets/images/back_arrow.png')}
                          style={{width: 30, height: 30}}
                        />
                      </View>
                    </TouchableOpacity>
            <Image source={{uri:img_url, width: 100, height: 100}} style={{
               borderRadius: 500,
               borderWidth: 5,
               borderColor: 'white'
            }}></Image>
            <Text style={{
               fontFamily:'roboto',
               fontSize: 16,
               fontWeight: 'bold',
               marginTop: 5,
               color: mode==='light'?'#1c1c1c':'#efefef'
            }}>{user_name.toUpperCase()}</Text>
         </View>
         <View style={{marginTop: 25, padding: 10, marginRight: 5, width: w_device/2-10}}>
            <Text style={{
               alignSelf: 'flex-end',
               fontFamily:'roboto',
               fontWeight: 'bold',
               color: mode==='light'?'#1c1c1c':'#efefef'

            }}>PROFILE</Text>
            <Text style={{marginVertical:15, fontFamily: 'roboto', fontSize: 11, fontWeight:'bold',color: mode==='light'?'#1c1c1c':'#efefef'}}>PROFESSION{'\n'}<Text style={{
               color:mode==='light'?'rgba(1, 163, 250, 1)':'rgba(129, 217, 255, 1)',
               paddingRight: 3, 
               fontWeight: 'normal', 
            }}>{profession}</Text></Text>
            <Text style={{marginVertical:15, fontFamily: 'roboto', fontSize: 11,fontWeight:'bold',color: mode==='light'?'#1c1c1c':'#efefef'}}>CONTACT{'\n'}<Text style={{
               color:mode==='light'?'rgba(1, 163, 250, 1)':'rgba(129, 217, 255, 1)',
               paddingRight: 3,
               fontWeight: 'normal'
            }}>{contact}</Text></Text>
            <Text style={{marginVertical:15, fontFamily: 'roboto', fontSize: 11,fontWeight:'bold',color: mode==='light'?'#1c1c1c':'#efefef'}}>LOCATION{'\n'}<Text style={{
               color:mode==='light'?'rgba(1, 163, 250, 1)':'rgba(129, 217, 255, 1)',
               paddingRight: 3,
               fontWeight: 'normal'
            }}>{location}</Text></Text>
            <Text style={{marginVertical:15, fontFamily: 'roboto', fontSize: 11,fontWeight:'bold',color: mode==='light'?'#1c1c1c':'#efefef'}}>ABOUT COMPANY{'\n'}<Text style={{
               color:mode==='light'?'rgba(1, 163, 250, 1)':'rgba(129, 217, 255, 1)',
               marginRight: 3,
               fontWeight: 'normal'
            }}>{about}</Text></Text>
         </View>
      </View>
      <View style={{
         display:'flex',
         flexDirection:'column'
      }}>
         <Text style={{fontFamily:'roboto',fontWeight:'bold',textAlign:'center', marginTop: 10,color: mode==='light'?'#1c1c1c':'#efefef'}}>REVIEWS FROM OUR TRUSTEES</Text>
         <ScrollView horizontal={true} style={{
            display:'flex',
            flexDirection:'row',
         }}>
         {trustee_review.map((element,index)=>(
         <View key={index} style={{
            margin: 18,
            alignItems:'center'
         }}>
            <Image source={element.img_url} style={{
               width: 60,
               height: 60,
               borderRadius: 500,
               borderWidth: 2,
               borderColor: 'white'
            }}></Image>
            <Text>{element.rating}⭐</Text>
         </View>))}
         </ScrollView>
      </View>
      <View style={{flex:1,flexDirection:'column',backgroundColor:'#0048ffff',width: w_device}}>
         <View style={{flexDirection:'row', justifyContent: 'space-around', width: w_device, marginTop: 10}}>
            <Text style={{fontFamily:'roboto', color: 'white', fontSize: 40, textAlign:'center'}}>4.3{'\n'}<Text style={{fontSize: 15}}>Average Rating</Text></Text>
            <Text style={{fontFamily:'roboto', color: 'white', fontSize: 40, textAlign:'center'}}>37{'\n'}<Text style={{fontSize: 15}}>Campaigns Completed</Text></Text>
         </View>
         <View style={{flexDirection:'row', justifyContent: 'space-around', width: w_device, marginTop: 20}}>
            <Text style={{fontFamily:'roboto', color: 'white', fontSize: 12, textAlign:'left'}}>payment range{'\n'}<Text style={{fontSize: 25}}>150k-200k{'\n'}<Text style={{fontSize: 12}}>(negotiable)</Text></Text></Text>
            <Text style={{fontFamily:'roboto', color: 'white', fontSize: 40, textAlign:'left'}}>02{'\n'}<Text style={{fontSize: 12}}>Ongoing</Text></Text>
         </View>
         <View style={{flexDirection:'row', justifyContent: 'space-around', width: w_device, marginTop: 20}}>
            <Text style={{fontFamily:'roboto', color: 'white', fontSize: 12, textAlign:'left'}}>Availablity{'\n'}<Text style={{fontSize: 10}}>Good</Text></Text>
            <Text style={{fontFamily:'roboto', color: 'white', fontSize: 12, textAlign:'left'}}>Service{'\n'}<Text style={{fontSize: 10}}>Good</Text></Text>
            <Text style={{fontFamily:'roboto', color: 'white', fontSize: 12, textAlign:'left'}}>Communication{'\n'}<Text style={{fontSize: 10}}>Good</Text></Text>
         </View>
      </View>
      </View>
   )
}


export default Profile