import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/blogPostForm';
import { Context } from '../context/BlogContext';


const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);
    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
    }} />

};

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

export default CreateScreen;