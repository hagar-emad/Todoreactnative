
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, NativeModules, LayoutAnimation } from "react-native";
import styles from "./styles";
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export default function TodoHeader({onAdd}) {
    const [todo, setTodo] = useState("new task");
    const [focused, setFocused] = useState(false);
    const handleAddTodo = () => {
        const todoitem = {
            title: todo,
            done: false
        }
        onAdd(todoitem);
        setTodo("");
    }
    return (
        <View style={styles.header}>
            <TextInput placeholder="Add New Task"
                style={
                    styles.txtInput
                 //   ...(focused ? styles.txtInputFoucused: {}),
                }
                //style={{ ...styles.txtInput, ...(focused ? styles.txtInputFoucused : {}) }}
                value={todo}
                onChangeText={(txt) => setTodo(txt)}
                onFocus={() => {
                    LayoutAnimation.easeInEaseOut()
                    setFocused(true)
                }}
                onBlur={() => {
                    LayoutAnimation.easeInEaseOut()
                    setFocused(false)
                }
                }></TextInput>
            <TouchableOpacity style={styles.btn} onPress={handleAddTodo}>
                <Text style={styles.btntxt}>ADD</Text>
            </TouchableOpacity>
        </View>


    )
}