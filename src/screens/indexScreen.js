import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.container}>
                                <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <EvilIcons name='trash' style={styles.iconStyle} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />

        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <EvilIcons name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'black'
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30
    }
});

export default IndexScreen;