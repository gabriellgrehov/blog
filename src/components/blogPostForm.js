import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.inputStyle}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.inputStyle}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button
                title="Save"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,

    },
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 15
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    }
});

export default BlogPostForm;