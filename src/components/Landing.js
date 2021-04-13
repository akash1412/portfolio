import { Box, Heading } from "@chakra-ui/layout";
import { BsChevronDown } from "react-icons/bs";

import { IoMdOpen } from "react-icons/md";

const Landing = () => {
	return (
		<Box height='80vh' d='flex' flexDir='column' alignItems='center'>
			<Heading
				justifySelf='flex-start'
				as='h1'
				fontWeight='250'
				fontSize='6rem'
				lineHeight='6rem'>
				Hello ✌🏾, I'm <span>Akash.</span>
			</Heading>
			<Box mt='6rem' alignSelf='stretch' d='flex' justifyContent='space-around'>
				<Heading as='h2' fontWeight='300'>
					About Me
				</Heading>
				<Heading as='h2' fontWeight='300'>
					PROJECTS
				</Heading>
				<Heading as='h2' fontWeight='300'>
					RESUME
				</Heading>
			</Box>

			<Box
				fontSize='4rem'
				py='2.5rem'
				mt='auto'
				cursor='pointer'
				onClick={() => {
					document
						.getElementById("about-section")
						.scrollIntoView({ behavior: "smooth" });
				}}>
				<BsChevronDown className='iconDown' />
			</Box>
		</Box>
	);
};

export default Landing;
