import { Pressable, Text } from "react-native";
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";
import styled from "styled-components/native";
import { FlattenSimpleInterpolation } from "styled-components";

const AuthNaverLogin: React.FC<ILoginComponent> = ({ style, pressedStyle }) => {
	const iosKeys = {
		kConsumerKey: "4IPPzQEeX13APm74K6Rf",
		kConsumerSecret: "Kg7mwD26ZX",
		kServiceAppName: "네이버_로그인_테스트",
		kServiceAppUrlScheme: "kr.gridy.memory", // only for iOS
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
