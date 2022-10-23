import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "~/screens/Auth";

const NativeStack = createNativeStackNavigator();
const Stack = () => {
	return (
		<NativeStack.Navigator>
			<NativeStack.Screen name="Auth" component={Auth} />
		</NativeStack.Navigator>
	);
};

export default Stack;
