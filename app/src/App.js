import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import {
	DefaultTheme,
	NavigationContainer,
	ThemeProvider,
} from "@react-navigation/native";
import Root from "@navigations/Root";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) => {
	return images.map((image) => {
		if (typeof image === "string") {
			return Image.prefetch(image);
		} else {
			return Asset.loadAsync(image);
		}
	});
};

export default function App() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await SplashScreen.preventAutoHideAsync();
			} catch (err) {
				console.warn(err);
			} finally {
				setReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (ready) {
			await SplashScreen.hideAsync();
		}
	}, [ready]);

	if (!ready) {
		return null;
	}

	return (
		<ThemeProvider
			theme={{
				bgColor: "white",
				textColor: "black",
			}}
		>
			<View
				onLayout={onLayoutRootView}
				style={{ flex: 1, backgroundColor: "#000000" }}
			>
				<NavigationContainer
					theme={{
						...DefaultTheme,
						colors: {
							...DefaultTheme.colors,
							background: "#FFFFFF",
						},
					}}
				>
					<Root />
				</NavigationContainer>
			</View>
		</ThemeProvider>
	);
}
