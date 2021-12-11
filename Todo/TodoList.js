import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";

const TodoList = ({ todos }) => {
    const [itemsCompleted, setItemsComplested] = useState(todos.length);
    const handCheckbox = (item) => {
        if (itemsCompleted !== 0) {
            setItemsComplested(itemsCompleted - 1);
        }
        todos.map((todo,index)=>{
            if(todo===item){
         //       todos.splice(index,1);
         item.done=true;
            }         
        })
    }
    useEffect(() => {
        setItemsComplested(todos.length)
    }, [todos]);

    return (
        <FlatList
            style={{ height: "100%" }}
            data={todos}
            renderItem={({ item }) => {
                return (
                    <View style={styles.item}>
                        <Text> Title: </Text>
                        <Text> {item.title} </Text>
                        <Text>{itemsCompleted.length}</Text>
                        <Checkbox value={item.done} onChange={() => handCheckbox(item)} />
                    </View>
                );
            }}
            ListHeaderComponent={() => <Text style={styles.listHeader}>My todos {itemsCompleted} of {todos.length}</Text>}
            ListFooterComponent={() => <Text style={styles.listHeader}>End of Todos</Text>}
            ListEmptyComponent={() => <Text>no todos today </Text>}
            ItemSeparatorComponent={() => <View style={styles.seperator}></View>}

        />
    )
};
export default TodoList;
