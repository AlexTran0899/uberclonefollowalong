import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import NavFavorite from './NavFavorite'
import { Icon } from 'react-native-elements'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <View>
            <Text style={tw` text-center py-5`}>Good Morning Alex</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}></View>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Where To?'
                    styles={toInputBoxStyles}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    onPress={(data, details) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    fetchDetails={true}
                    debounce={400} />
                <NavFavorite />
                <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RideOptionsCard')}
                        style={tw`flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full`}>
                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tw`text-white text-center`}>Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex justify-between flex-row w-24 px-4 py-3 rounded-full`}>
                        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                        <Text style={tw`text-black text-center`}>Rides</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#e6e6e6",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
