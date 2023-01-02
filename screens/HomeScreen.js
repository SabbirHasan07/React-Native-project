import { useNavigation } from '@react-navigation/native'
import React, { Component, useLayoutEffect, useState } from 'react'
import { Button, Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import { FcGoogle } from "react-icons/fc";




const HomeScreen = () => {
    
    const navigate = useNavigation();
    const [verification,setVerification] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState(false);
    const handleName =(e)=>{
        setVerification(e.nativeEvent.text);
       

        
        

    }
    const passWord =(e)=>{
       
        setPassword(e.nativeEvent.text);

        
        

    }
    if(confirm && verification === 'sabbir@gmail.com' && password === 'sabbir' ) {
        navigate.navigate("Dashboard")
    }
    
    


    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="flex-row px-6 mt-8 items-center space-x-2">

                <Image source={require('../assets/icons/Login.jpg')}
                    className="w-96 h-72"


                />


            </View>
            <View className="px-6 mt-8 space-y-2">
                <Text className="mb-4 font-bold">Log In</Text>
                <TextInput className="px-14 py-4 bg-gray-200 rounded-md "
                    placeholder='@ Email-ID'
                    onChange={handleName}
                  

                    

                />
                <TextInput className="px-14 py-4 bg-gray-200 rounded-md "
                    placeholder=' Password'
                    secureTextEntry={true}
                    onChange={passWord}
                   

                />

            </View>
            <View className="mt-2">
                <Text className="ml-56">Forget Password ?</Text>
                <Button
                
                title='Log In'
                onPress={()=> setConfirm(true)}/>
            



            </View>
            <Text className="mx-12 mb-2">---------------------------- OR ----------------------------</Text>

            <View className=" w-54 mx-12 text-center py-2 mt-2 mb-6 rounded-md bg-gray-200 text-black flex-row item-center ">
                <Image source={require('../assets/icons/7611770.png')}
                    className="w-7 h-7 ml-32 " />
                    <Text className="font-semibold">Log In</Text>

            </View>
            <View>
                <View><Text className="mx-20"><Text className="text-gray-400">Don't have account?</Text> <Text className="text-xl font-bold" >Sign Up</Text></Text></View>


            </View>



        </SafeAreaView>

    )

}


export default HomeScreen
