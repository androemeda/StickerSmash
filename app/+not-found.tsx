import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <View>
            <Text>Screen not found</Text>
            <Link href={'/'}>Go back to home page</Link>
        </View>
    )
}