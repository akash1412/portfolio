import {
	Box,
	Image,
	Link,
	Text,
	Heading,
	Center,
	LinkOverlay,
} from "@chakra-ui/react";

import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import projImg1 from "../assets/ted-smrzr.png";
import projImg2 from "../assets/js-quiz-draw.png";
import projImg3 from "../img.png";

const ProjectItems = [
	{
		id: 1,
		title: "TED SMRZR",
		about: "It's web app which summarizes your favourate TED Talk whi",
		stack: "NEXTJS - CONTEXT API - TAILWIND CSS - AWS SERVELESS",
		imgSrc: projImg1,
		links: [
			"https://tedsmrzr.vercel.app/",
			"https://github.com/akash1412/ted-smrzr",
		],
	},
	{
		id: 2,
		title: "JS Quiz Draw",
		about: "An Excitng way to play quiz game , where ",
		imgSrc: projImg2,
		stack: "NEXTJS - CONTEXT API - TAILWIND CSS - AWS SERVELESS",
		links: [
			"https://js-quiz-draw.netlify.app/",
			"https://github.com/akash1412/js-quiz-draw",
		],
	},
	{
		id: 3,
		title: "Watch Flix",
		about: "A web app",
		imgSrc: projImg3,
		stack: "REACTJS - STYLED COMPONETS - REDUX",
		links: [
			"https://watch-flix.vercel.app/",
			"https://github.com/akash1412/react-movie-app",
		],
	},
];

const Projects = () => {
	return (
		<Box
			py='2.5rem'
			px={["1rem"]}
			w={["100%", "100%", "80%", "75%"]}
			d='flex'
			flexDir='column'
			alignItems='center'>
			<Heading as='h1' fontSize='2.2rem' color='primaryDark'>
				PROJECTS
			</Heading>
			{ProjectItems.map(projItem => (
				<Project {...projItem} key={projItem.id} />
			))}
		</Box>
	);
};

const Project = ({ id, imgSrc, title, about, links, stack }) => (
	<Box
		my='4rem'
		d='flex'
		position='relative'
		flexDir='column'
		alignItems='center'
		w={["100%", "100%", "100%", "100%", "120rem"]}>
		<Heading as='h1' className='title' px='2rem'>
			{title}
		</Heading>

		<Box
			w='100%'
			d='flex'
			p={[0, 0, "1rem"]}
			flexDir={["column", "column", "column", "row"]}
			justifyContent='space-around'
			alignItems={["center", "center", "center", "stretch"]}
			mt={["0rem", 0]}>
			<Box w={["100%", "100%", "100%", "45rem", "48rem"]}>
				<Image
					src={imgSrc}
					objectFit='cover'
					alt='title'
					objectPosition='center'
				/>
			</Box>

			<Box
				marginLeft={id === 2 ? 0 : [0, 0, 0, "auto"]}
				// w={["100%", "100%", "100%", "40%"]}
				w={["100%", "100%", "100%", "45rem", "48rem"]}
				d='flex'
				flexDir='column'
				order={id === 2 ? "-1" : "1"}
				justifyContent='space-around'
				className='childMargin'
				mt={["2rem", "2rem", "2rem", "0"]}
				textAlign={["center", "center", "center", "initial"]}>
				<Heading
					as='h2'
					justifySelf='start'
					lineHeight='2rem'
					fontSize='1.5rem'>
					{about}
				</Heading>

				<Heading as='h3' fontSize='1.2rem'>
					{stack}
				</Heading>

				<Box
					// alignSelf={["center", "center", "center", "initial"]}
					// mt={["3rem", "4rem", "4rem", "auto", "auto"]}
					fontSize='1.8rem'
					d='flex'
					justifyContent={[
						"space-around",
						"space-around",
						"space-around",
						"flex-start",
					]}
					fontSize='1.4rem'
					alignItems='center'>
					<Link
						href={links[0]}
						target='_blank'
						d='flex'
						alignItems='center'
						px='2.2rem'
						py='.3rem'
						mr={[0, 0, "2rem"]}
						borderRadius='2rem'
						bgColor='#127EB1'
						textDecoration='none'
						border='1.5px solid transparent'>
						<BsLink45Deg className='icon-small' />
						<span style={{ marginLeft: "1.5rem" }}>visit </span>
					</Link>
					<Link
						href={links[1]}
						target='_blank'
						d='flex'
						alignItems='center'
						px='2.5rem'
						py='.5rem'
						borderRadius='2rem'
						border='1.5px solid #fff'
						textDecoration='none'>
						<AiFillGithub className='icon-small' />
						<span style={{ marginLeft: "1.5rem" }}>source </span>
					</Link>
				</Box>
			</Box>
		</Box>
	</Box>
);

export default Projects;
