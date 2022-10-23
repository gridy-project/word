import { login as KakaoLogin, KakaoOAuthToken } from "@react-native-seoul/kakao-login";
import styled from "styled-components/native";

const AuthKakaoLogin: React.FC<ILoginComponent> = ({ style, pressedStyle }) => {
	const onPress = async (): Promise<void> => {
		const token: KakaoOAuthToken = (await KakaoLogin()) as KakaoOAuthToken;

		console.log(JSON.stringify(token));
	};
	return (
		<Pressable onPress={onPress} style={{ width: "100%" }}>
			{({ pressed }) => (
				<View style={style} pressedStyle={pressedStyle} pressed={pressed}>
					<Text>Kakao Login</Text>
				</View>
			)}
		</Pressable>
	);
};

export default AuthKakaoLogin;

const Pressable = styled.Pressable``;
const Text = styled.Text``;

const View = styled.View<IPressView>`
	${(props) => props.style};
	${(props) => props.pressed && props.pressedStyle}
`;
