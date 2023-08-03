import {  Layout,Text} from "@ui-kitten/components"
import { View,Button,StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


const SquareButton = (props) => {
    return(
        <>
        <Layout  style={[styles.btn,{backgroundColor:props.cl}]}>
            <Text onPress={props.onPress} style={styles.text}>{props.title}</Text>
            <Icon name={props.iname} size={32} color="#F5F5F5" />
        </Layout>
        </>
    )
}

export default SquareButton



const styles = StyleSheet.create({
    btn: {
        width:190,
        height:75,
        borderRadius:10,
        backgroundColor:"#468B97",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        padding:8,
        paddingRight:14
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      text:{
        marginVertical:19,
        marginLeft:10,
        color:"#fff"
    }
})