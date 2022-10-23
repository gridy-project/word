import { Pressable, Text } from "react-native";
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";
import styled from "styled-components/native";
import { FlattenSimpleInterpolation } from "styled-components";

const AuthNaverLogin: React.FC<ILoginComponent> = ({ style, pressedStyle }) => {
	const iosKeys = {
		kConsumerKey: process.env.NAVER_LOGIN_CONSUMER_KEY ?? "",
		kConsumerSecret: process.env.NAVER_LOGIN_CONSUMER_SECRET ?? "",
		kServiceAppName: process.env.NAVER_LOGIN_APP_NAME ?? "",
		kServiceAppUrlScheme: process.env.NAVER_LOGIN_APP_URL_SCHEME ?? "",
	};
	const onPress = () => {
		NaverLogin.login(iosKeys, (err, token) => {
			console.log(token);
		});
	};

	const getUserProfile = async () => {
		const profileResult = await getProfile(
			"AAAAOXo6BfL7I59niv_5Zhaqpu0Al0jT4LcbnNrZGN-Mvof_XER-4gipyatUi4fwN8Y5mY5DGzFTxEuLWcKzvo8X-pk"
		);
		if (profileResult.resultcode === "024") {
			console.log("로그인 실패", profileResult.message);
			return;
		}
		console.log("profileResult", profileResult);
	};

	return (
		<Pressable onPress={onPress} style={{ width: "100%" }}>
			{({ pressed }) => (
				<View style={style} pressedStyle={pressedStyle} pressed={pressed}>
					<Text>Naver Login</Text>
				</View>
			)}
		</Pressable>
	);
};

export default AuthNaverLogin;

const View = styled.View<{ style: FlattenSimpleInterpolation }>`
	${(props) => props.style};
`;
