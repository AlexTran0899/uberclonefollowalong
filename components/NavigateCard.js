import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
const NavigateCard = () => {
    const dispatch = useDispatch()
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
                    key:GOOGLE_MAPS_APIKEY,
                    language: "en"
                }}
                onPress={(data, details)=> {
                    dispatch(setDestination({location:details.geometry.location,
                        description:data.description}))
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                fetchDetails={true} 
                debounce={400}/>
                
            </View>
        </View>
    )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#e6e6e6",
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }
})
