import React from 'react';
import { View, Image } from 'react-native';
import { sharedStyles } from '../sharedStyles/sharedStyles';

export function Header () {

return (
    <View style={sharedStyles.header}> 
        <Image source={require('./img/logo.png')} resizeMode={"contain"} style={sharedStyles.logo} />
    </View>
    )
};