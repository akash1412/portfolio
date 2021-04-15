import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
	return (
		<Box
			id='about-section'
			px='.5rem'
			py='2rem'
			d='flex'
			flexDir='column'
			alignItems='center'>
			<Box mb='3rem' textAlign='center'>
				<Heading as='h1' fontSize='2.2rem' color='primaryDark'>
					About Me
				</Heading>
				<Heading
					as='h4'
					fontSize='1.5rem'
					mt='1rem'
					color='text'
					fontStyle='italic'>
					If you're <span className='bold'> wondering</span> who
					<span className='bold'> I am</span> ...
				</Heading>
			</Box>

			<Box fontSize='1.5rem' color='text' textAlign='center'>
				<Text my='1.5rem'>
					I'm <span className='title'>Akash</span>, a 21 years old self-taught
					Front-end developer,from Odisha India.
				</Text>
				<Text my='1.4rem' lineHeight='3rem'>
					My Current <spna className='title'> stack</spna> of{" "}
					<span className='title'>languages/technologies</span> is:
				</Text>
				<Text fontSize='1.6rem' lineHeight='3rem' color='primaryDark'>
					HTML - CSS - SASS - JAVASCRIPT - REACTJS - NEXTJS - WEBPACK <br />
					REDUX - FIREBASE - STYLED COMPONENTS - GRAPHQL
				</Text>
			</Box>
		</Box>
	);
};

export default About;
