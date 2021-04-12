import { Box } from "@chakra-ui/layout";

const Main = ({ children }) => {
	return (
		<Box
			minHeight={`calc(100vh - 50px)`}
			color='#fff'
			marginX='auto'
			w={["100%", "100%", "80%", "75%"]}>
			{children}
		</Box>
	);
};

export default Main;
