import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    title:{
        fontSize:28,
        fontWeight:"bold",
        // padding:10,
        // margin:2,
        // width:"100%",
        backgroundColor:"gray",
        color:"black",
        // textAlign:"center"
    },
    header: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-around"
    },
    txtInput: {
        borderBottomColor: "gray",
        borderBottomWidth: 3,
        width:"50%",
        paddingStart: 2,
        paddingLeft:4,
        margin: 2
    },
    txtInputFoucused:{
        flexGrow:1,
        backgroundColor:"gray"
    },
    btn: {
        padding: 2,
        margin: 2,
        width: "20%",
        borderRadius:2,
        borderColor:"white"
    },
    btntxt:{
        padding:2,
        color:"white",
        backgroundColor:"black",
        width:"20%",
        fontSize:18
    },
    item:{
        display:"flex",
        flexDirection:"row",
        // justifyContent:"space-between",
        margin:2,
        padding:5
    },
   
    seperator:{
        borderColor:"black",
        borderWidth:0.5
    },
    listHeader:{
        padding:5,
        margin:2,
        textAlign:"center",
        fontWeight:"bold",
        fontSize:24,
        color:"black",
        backgroundColor:"grey"
    }
})
export default styles;