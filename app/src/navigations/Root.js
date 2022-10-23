import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import Tabs from "./Tabs";

const Nav = createNativeStackNavigator();

const Root = () => (
	<Nav.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
		<Nav.Screen name="Stack" component={Stack} />
		<Nav.Screen name="Tabs" component={Tabs} />
	</Nav.Navigator>
);

export default Root;
