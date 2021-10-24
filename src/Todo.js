import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({todo, onRemove = null}) => {
    return (
        <TouchableOpacity
            onPress={() => onRemove ? onRemove(todo.id) : null}
        >
            <View style={styles.todo} >
                <Text>
                    {todo.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    }
})