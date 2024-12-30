import { View, Text, Image , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import {Colors} from '@/constants/Colors'
import { useWarmUpBrowser} from './../hooks/useWarmUpBrowser'
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React. useCallback(async () => {
       try {
          const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();

       if (createdSessionId) {
         setActive({ session: createdSessionId });
      } else {
// Use signIn or signUp for next steps such as MFA
      }
     } catch (err) {
         console. error("OAuth error", err);
      }
    }, []);
  return (
    <View>
        <View style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 100
    }}>
      <Image source={require('./../assets/images/login.png')}
        style={{
            width:220,
            height:450,
            borderRadius:20,
            borderWidth:8,
            borderColor:''
        }}
        />
             
        </View>

        <View style={styles.subContainer}>
            <Text style={{
                  fontSize:30,
                  fontFamily: 'Kanit-Bold',
                textAlign: 'center'
        }}>Yout Ultimate
            <Text style={{
                  color: Colors. PRIMARY,
            }}> TOUR TRAVEL </Text> App</Text>
            <Text style={{
                  fontSize:15,
                  fontFamily: 'outfit',
                  textAlign: 'center',
                  marginVertical:15,
                  color: Colors. GRAY
            }}>You Can Book A Taxi to Nice Travel from the<Text style={{
                  color: Colors. PRIMARY,
                  fontWeight: 'bold'
            }}> POOCHI! </Text>App</Text>

          <TouchableOpacity style={styles.btn}
          onPress={onPress}
          >
               <Text style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontFamily: 'Kanit-Bold' 
               }} >Let's Get Started</Text>
</TouchableOpacity>


        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer:{
        backgroundColor: '#fff',
        padding:20,
        marginTop: -40 
    },

    btn:{
          backgroundColor: Colors. PRIMARY,
          padding:16,
          borderRadius:99,
          marginTop:20
    }
})

