import styled from "styled-components/native";
import {
	GoogleSignin,
	statusCodes,
} from "@react-native-google-signin/google-signin";

const AuthGoogleLogin: React.FC<ILoginComponent> = ({
	style,
	pressedStyle,
}) => {
	const onPress = async () => {
		GoogleSignin.configure({
			iosClientId:
				"888144834460-trbjuqsj5b60p38ffsed2udu9n41msu5.apps.googleusercontent.com",
			webClientId:
				"888144834460-3rdcg0oc8t3cfu4ipon26vvujhpkqv8m.apps.googleusercontent.com",
			offlineAccess: true,
		});
		console.log("GoogleLogin");
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		console.log(userInfo);
	};
	return (
		<Pressable onPress={onPress} style={{ width: "100%" }}>
			{({ pressed }) => (
				<View style={style} pressedStyle={pressedStyle} pressed={pressed}>
					<Text>Google Login</Text>
				</View>
			)}
		</Pressable>
	);
};

export default AuthGoogleLogin;

const Pressable = styled.Pressable``;
const Text = styled.Text``;

const View = styled.View<IPressView>`
	${(props) => props.style};
	${(props) => props.pressed && props.pressedStyle}
`;
