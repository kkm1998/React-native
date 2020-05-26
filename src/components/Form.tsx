import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Colors from '../constans/Colors';
import { Button, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { setNewElemTodoList } from '../actions/todolistActions'
import { ISingleElementList } from '../entities/todoSingleEl'
const Wrapper = styled.View`
margin:100px 20px 0 20px
align-items:center;
`;
const CustomTextInput = styled.TextInput`
border:1px solid ${Colors.green};
padding:10px;
margin-bottom:10px;
color:${Colors.black};
width:100%;
text-align:center;
border-radius:20px
background-color:${Colors.white};
`;
const Body = styled.View`
height:100%;
background-color:${Colors.khaki};
`;
const BackBtn = styled.Image`
height:70px;
width:70px;
position:absolute;
bottom:20px;
left:20px;
`;
const SaveBtn = styled.Image`
height:50px;
width:50px;
`;
type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>;
const Form: FC<{ switchView(formView: boolean) }> = props => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descriptionInput, setDescriptionInput] = useState<string>('');
    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    const descriptionValueChange = (txt) => {
        setDescriptionInput(txt.nativeEvent.text);
    }
    const saveDate = () => {
        if (nameInput.length > 0 && descriptionInput.length > 0) {
            dispatch<SetNewElemTodoList>(setNewElemTodoList({
                name: nameInput,
                description: descriptionInput,
                id: '' + new Date().getTime()
            } as ISingleElementList
            ));
            props.switchView(false)
        }
    }
    const goToToDoList = () => {
        props.switchView(false);
    }
    return (
        <Body>
            <TouchableWithoutFeedback onPress={goToToDoList}>
                <BackBtn source={require('../assets/back.png')} />
            </TouchableWithoutFeedback>
            <Wrapper>
                <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Name" maxLength={20} />
                <CustomTextInput value={descriptionInput} onChange={descriptionValueChange} placeholder="Surname" maxLength={50} />
                <TouchableOpacity onPress={saveDate}>
                    <SaveBtn source={require('../assets/save.png')} />
                </TouchableOpacity>
            </Wrapper>
        </Body>
    )

};

export default Form