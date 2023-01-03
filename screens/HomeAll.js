import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'


const HomeAll = () => {
    const navigate = useNavigation();
    const data = [
        { key: '1', value: 'straigh', },
        { key: '2', value: 'wavy' },
        { key: '3', value: ' curly' },

    ]
    const [selected, setSelected] = React.useState("");

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="m-2  p-2 flex-row item-center justify-between border-2 border-[#dfdfdf] rounded-xl">
                <View className="flex-row item-center justify-between">
                    <View className="mr-2">

                        <Image source={require('../assets/icons/pick.png')}
                            className="w-7 h-7"


                        />

                    </View>
                    <View>
                        <Text>Glame Oslo</Text>
                        <Text className="text-gray-400">No</Text>
                    </View>
                </View>
                <View className="flex-row item-center justify-between mt-3">
                    <View>
                        <Image source={require('../assets/icons/date.png')}
                            className="w-7 h-7 mr-2" />


                    </View>
                    <View>
                        <Text>When ?</Text>
                    </View>

                </View>
            </View>
            <View className="flex-row item-center justify-between mr-7 ml-7 p-2 rounded">
                <View className="w-46">

                    <SelectList
                        setSelected={val => setSelected(val)}
                        data={data}
                        save="value"



                    />


                </View>
                <View className="w-46">

                    <SelectList
                        setSelected={val => setSelected(val)}
                        data={data}
                        save="value"


                    />


                </View>
            </View>
            <View className="shadow-2xl   mr-2 ml-2 rounded-md">
                <Text className="mr-2 ml-2 mt-3 font-bold text-gray-400">100 results of 455</Text>
                <View className="mr-2 ml-2">
                    <Image source={require('../assets/icons/final.jpg')}
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
            <View className="shadow-2xl mt-2  mr-2 ml-2 rounded-md mb-12 ">

                <View className="mr-2 ml-2">
                    <Image source={require('../assets/icons/final2.jpg')}
                        className="w-full h-48 mr-2 rounded-md" />
                </View>
                <View className="mr-2 ml-2 mt-1 flex-row item-center justify-between ">
                    <Text className="text-xl font-semibold">Theresa Webb</Text>
                    <Text className="text-ms font-semibold text-gray-400">FROM</Text>

                </View>
                <View>
                    <View className="mr-2 ml-2  flex-row item-center justify-between mb-1">
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
            <View className="flex-row item-center justify-between   p-2 border-2 border-[#dfdfdf]">
                <View>
                    <Image source={require('../assets/icons/homeicon-removebg-preview.png')}
                        className="w-12 h-10 ml-3 rounded-md" />
                    <Text className="ml-2 font-bold">Home</Text>
                </View>
                <View>
                    <Image source={require('../assets/icons/salon-removebg-preview.png')}
                        className="w-12 h-10 ml-3 rounded-md" />
                    <Text className="ml-2 font-bold text-gray-400">Saloon</Text>
                </View>
                <View >

                    <Image source={require('../assets/icons/Screenshot_2023-01-03_141706-removebg-preview.png')}
                        className="w-12 h-10 ml-3 rounded-md"
                    />
                    <Text className="ml-2 font-bold text-gray-400">Account</Text>

                </View>

            </View>



        </SafeAreaView>
    )

}

export default HomeAll
