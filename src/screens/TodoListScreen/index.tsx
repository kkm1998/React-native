import React, { FC, useState } from 'react';
import { Button, View } from 'react-native';
import Form from '../../components/Form'
import ToDoList from '../../components/ToDoList';


const TodoListScreen = ({ navigation }) => {
    const [formView, setFormView] = useState<boolean>(false)

    return (
        <View>
            {formView ? (
            <Form switchView={setFormView}/>
            ) : (
            <ToDoList switchView={setFormView}/>
            )}

        </View>
    );
};

export default TodoListScreen;