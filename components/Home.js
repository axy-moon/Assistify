import { Text,Button } from "@ui-kitten/components/ui";
const Home = ({navigation}) => {
    return (
        <>
        <Text category="h1">Home Screen</Text>
        <Button onPress={() => navigation.navigate('Login')}>LOGIN</Button>
        </>
    );
}

export default Home;