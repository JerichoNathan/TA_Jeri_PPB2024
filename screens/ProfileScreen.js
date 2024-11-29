import * as React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Jericho Nathanael</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>21120121140160</Text>
        </View>
    );
}