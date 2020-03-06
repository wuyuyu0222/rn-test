import React, { useState } from 'react'
import { StyleSheet, Image, Dimensions, View } from 'react-native'
import Container from '../components/Container'
import TitleText from '../components/Text/TitleText'
import OutlinedButton from '../components/Button/OutlinedButton'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import BaseImage from '../components/Button/BaseImage'
import Tabs from '../components/Tabs'

export default function TestScreen() {
    const routes = [
        { title: 'Upload Image', view: UploadImage },
    ]

    return (
        <Container>
            <TitleText style={styles.title}>Test</TitleText>
            <Tabs routes={routes} />
        </Container>
    )
}

const UploadImage = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    const onImageUpload = async () => {
        await getPermissionAsync()
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result)

        if (!result.cancelled) {
            setUploadImage(result.uri)
        }
    }
    return (
        <View style={styles.tabContent}>
            <OutlinedButton onPress={onImageUpload}>Upload</OutlinedButton>
            <BaseImage uri={uploadImage} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        marginBottom: 12
    },
    tabContent: {
        marginTop: 24
    },
    image: {
        marginTop: 24
    }
})