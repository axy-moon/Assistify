import { Button, Layout,Text,Icon } from "@ui-kitten/components"
import { View,StyleSheet } from "react-native"

const StarIcon = (props) => {
    return <Icon name="star" {...props} />;
};

const SquareButton = () => {
    return(
        <>
        <Layout style={{flex:1,alignContent:"center",justifyContent:"center",marginTop:100}}>
        {/* <Button style={styles.btn}>
            <View style={{display:"flex",justifyContent:"center",alignContent:"center",textAlign:"center"}}>
            <Ionicons name="md-calendar" size={32} color="white" />
            <Text category="p">Events</Text> 
            </View>
        </Button> */}
         <Button
      status='danger'
      accessoryLeft={StarIcon}
    />
        </Layout>
        </>
    )
}

export default SquareButton



const styles = StyleSheet.create({
    btn: {
        marginLeft:100,
        width:90,
        height:75,
        borderRadius:10
    },
})