import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavorite from '../components/NavFavorite'
const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>

            <View style={tw`p-5`}>
                <Image source={{ uri: "https://links.papareact.com/gzs" }} style={{ width: 100, height: 100, resizeMode: "contain" }} />
                <GooglePlacesAutocomplete placeholder="Where From"
                    styles={{ container: { flex: 0, }, textInput: { fontSize: 18 } }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    onPress={(data, details) => {
                        dispatch(setOrigin({
                            location:details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    fetchDetails={true} />
                <NavOptions />
                <NavFavorite/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
