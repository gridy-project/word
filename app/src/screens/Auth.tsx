import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import styled, { css } from "styled-components/native";
import AuthGoogleLogin from "~/components/auth/AuthGoogleLogin";
import AuthNaverLogin from "~/components/auth/AuthNaverLogin";
import AuthKakaoLogin from "~/components/auth/AuthKakaoLogin";
import Config from "react-native-config";

const Auth: React.FC<{ navigation: any }> = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<AuthContainer>
			<Text style={{ fontSize: 36, marginBottom: 20 }}>LOGIN{Config.ENV}</Text>
			<AuthGoogleLogin style={LoginStyle} pressedStyle={LoginHoverStyle} />
			<AuthNaverLogin style={LoginStyle} pressedStyle={LoginHoverStyle} />
			<AuthKakaoLogin style={LoginStyle} pressedStyle={LoginHoverStyle} />
			<StatusBar style="auto" />
		</AuthContainer>
	);
};

export default Auth;

const AuthContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 40px;
`;

const LoginStyle = css`
	width: 100%;
	padding: 15px;
	border: 1px solid #dddddd;
	margin: 10px 0;
	border-radius: 10px;
`;

const LoginHoverStyle = css`
	background-color: #cccccc;
`;
