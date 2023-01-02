import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'


const HomeAll = () => {
    const [selected, setSelected] = React.useState("");
    const navigate = useNavigation();
    const data = [
        { key: '1', value: 'straigh', },
        { key: '2', value: 'wavy' },
        { key: '3', value: ' curly' },

    ]


    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="m-2 bg-slate-100 rounded p-2 flex-row item-center justify-between">
                <View className="flex-row item-center justify-between">
                    <View className="mr-2">

                        <Image source={require('../assets/icons/download__1_-removebg-preview.png')}
                            className="w-7 h-7"


                        />

                    </View>
                    <View>
                        <Text>Glame Oslo</Text>
                        <Text className="text-gray-400">No</Text>
                    </View>
                </View>
                <View className="flex-row item-center justify-between">
                    <View>
                        <Image source={require('../assets/icons/download__2_-removebg-preview.png')}
                            className="w-7 h-7 mr-2" />


                    </View>
                    <View>
                        <Text>When ?</Text>
                    </View>

                </View>
            </View>
            <View className="flex-row item-center justify-between mr-7 ml-7 bg-slate-100 p-2 rounded">
                <View className="w-46">
                    <Text className="font-semibold text-center mb-2">Hair Type</Text>
                    <SelectList
                        setSelected={val => setSelected(val)}
                        data={data}
                        save="value"

                    />


                </View>
                <View className="w-46">
                    <View className="flex-row item-center ">
                        <Image source={require('../assets/icons/images-removebg-preview.png')}
                            className="w-10 h-7 mr-2 rounded-md" />
                        <Text className="font-semibold text-center mb-2">Home Salon</Text>
                    </View>
                    <SelectList
                        setSelected={val => setSelected(val)}
                        data={data}
                        save="value"

                    />


                </View>
            </View>
            <View className="bg-slate-100 mt-2  mr-2 ml-2 rounded-md">
                <Text className="mr-2 ml-2 mt-3 font-bold text-gray-400">100 results of 455</Text>
                <View className="mr-2 ml-2">
                    <Image source={require('../assets/icons/photo1.jpg')}
                        className="w-full h-44 mr-2 rounded-md"

                    /></View>
                <View className="mr-2 ml-2 mt-1 flex-row item-center justify-between ">
                    <Text className="text-xl font-semibold">Theresa Webb</Text>
                    <Text className="text-ms font-semibold text-gray-400">FROM</Text>

                </View>
                <View>
                    <View className="mr-2 ml-2  flex-row item-center justify-between ">
                        <View className="flex-row item-center">
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4 " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4  " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4  " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4  " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4 mr-2 " />
                            <Text className="text-xs font-semibold text-gray-400">1</Text>
                        </View>
                        <View className="flex-row item-center justify-between">
                            <Text className="font-semibold mr-6 text-ms">
                                Kr63/<Text className="text-gray-400">h</Text>
                            </Text>
                            <Text className="font-semibold text-ms">
                                Kr480/<Text className="text-gray-400">day</Text>
                            </Text>


                        </View>

                    </View>
                </View>
            </View>
            <View className="bg-slate-100 mt-2  mr-2 ml-2 rounded-md">
                <Text className="mr-2 ml-2 mt-3 font-bold text-gray-400">100 results of 455</Text>
                <View className="mr-2 ml-2">
                    <Image source={require('../assets/icons/photo3.jpg')}
                        className="w-full h-44 mr-2 rounded-md" /></View>
                <View className="mr-2 ml-2 mt-1 flex-row item-center justify-between ">
                    <Text className="text-xl font-semibold">Theresa Webb</Text>
                    <Text className="text-ms font-semibold text-gray-400">FROM</Text>

                </View>
                <View>
                    <View className="mr-2 ml-2  flex-row item-center justify-between ">
                    <View className="flex-row item-center">
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4 " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4  " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4  " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4  " />
                            <Image source={require('../assets/icons/Star_icon_stylized.svg-removebg-preview.png')}
                                className="w-4 h-4 mr-2 " />
                            <Text className="text-xs font-semibold text-gray-400">4</Text>
                        </View>
                        <View className="flex-row item-center justify-between">
                            <Text className="font-semibold mr-6 text-ms">
                                Kr63/<Text className="text-gray-400">h</Text>
                            </Text>
                            <Text className="font-semibold text-ms">
                                Kr480/<Text className="text-gray-400">day</Text>
                            </Text>


                        </View>

                    </View>
                </View>

            </View>
            <View className="flex-row item-center justify-between  mt-1 p-2 bg-blue-100">
                <View>
                    <Image source={require('../assets/icons/images.jpg')}
                        className="w-10 h-7 ml-3 rounded-md" />
                    <Text className="ml-2 font-bold">Home</Text>
                </View>
                <View>
                    <Image source={require('../assets/icons/download-removebg-preview.png')}
                        className="w-10 h-7 ml-3 rounded-md" />
                    <Text className="ml-2 font-bold">Saloon</Text>
                </View>
                <View >

                    <Image source={require('../assets/icons/accounts-1-removebg-preview.png')}
                        className="w-10 h-7 ml-8 rounded-md"
                    />
                    <Text className="ml-3 font-bold">Accounts</Text>

                </View>

            </View>



        </SafeAreaView>
    )

}

export default HomeAll
