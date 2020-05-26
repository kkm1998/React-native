import React, { FC, useState } from 'react';
import { Text, Button, ScrollView, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../constans/Colors';
import { IState } from '../reducers'
import { ITodoListReducer } from '../reducers/todolistReducer'

import { ISingleElementList } from '../entities/todoSingleEl'

import { deleteElementTodoList } from '../actions/todolistActions'

const Wrapper = styled.View`
margin:40px 20px 0 20px
`;
const Body = styled.View`
height:100%;
background-color:${Colors.khaki};
`;
const SingleElList = styled.View`
margin: 0 0 40px 0 ;
`;
const AddBtn = styled.Image`
height:70px;
width:70px;
position:absolute;
bottom:20px;
right:20px;
`
const CustomText = styled.Text`
border:1px solid ${Colors.red};
height:40px
margin-bottom:10px;
border-radius:10px;
padding:10px;
`
const DeleteBtn = styled.Image`
height:40px;
width:40px;
margin-bottom:5px
`;
const Delete = styled.TouchableOpacity`
width:40px
`
type DeleteNewElemTodoList = ReturnType<typeof deleteElementTodoList>;
const ToDoList: FC<{ switchView(formView: boolean) }> = props => {
    const dispatch = useDispatch();
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList);
    const deleteDate = (id: string) => {
        dispatch<DeleteNewElemTodoList>(deleteElementTodoList(id));
    }
    const goToForm = () => {
        props.switchView(true);
    }
    return (
        <Body>
            <ScrollView>
                <Wrapper>
                    {todoListState.todoList.map((elem: ISingleElementList) =>
                        <SingleElList key={elem.id}>
                            <Delete onPress={() => deleteDate(elem.id)}>
                                <DeleteBtn source={require('../assets/delete.png')} />
                            </Delete>
                            <CustomText>{elem.name}</CustomText>
                            <CustomText>{elem.description}</CustomText>
                        </SingleElList>
                    )}
                </Wrapper>
            </ScrollView>
            <TouchableWithoutFeedback onPress={goToForm}>
                <AddBtn source={require('../assets/plus.png')} />
            </TouchableWithoutFeedback>
        </Body>
    )
};
export default ToDoList