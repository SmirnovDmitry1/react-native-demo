import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import {View, Text, StyleSheet} from "react-native"

export const Navbar = () => {
    return (
        <View style={styles.navbar} >
            <Link to="/" underlayColor="#f0f4f7">
                <Text style={styles.text}>Active</Text>
            </Link>
            <Link to="/todosDone" underlayColor="#f0f4f7">
                <Text style={styles.text}>Done</Text>
            </Link>
        </View>
    )
} 

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    }
})