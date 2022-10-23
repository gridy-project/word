import styled from "styled-components/native";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

const AuthGoogleLogin: React.FC<ILoginComponent> = ({ style, pressedStyle }) => {
	const onPress = async () => {
		GoogleSignin.configure({
			iosClientId: process.env.GOOGLE_LOGIN_IOS_CLIENT_ID,
			webClientId: process.env.GOOGLE_LOGIN_ANDROID_CLIENT_ID,
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
