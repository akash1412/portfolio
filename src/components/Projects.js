import {
	Box,
	Image,
	Link,
	Text,
	Heading,
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";

import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
// import Heading from "./Heading";
import projImg1 from "../assets/ted-smrzr.png";
import projImg2 from "../assets/js-quiz-draw.png";
import ProjImg3 from "../img.png";

const ProjectItems = [
	{
		id: 1,
		title: "TED SMRZR",
		about: "",
		imgSrc: projImg1,
		links: [
			"https://tedsmrzr.vercel.app/",
			"https://github.com/akash1412/ted-smrzr",
		],
	},
	{
		id: 2,
		title: "Js Quiz Draw",
		about: "",
		imgSrc: ProjImg3,
		links: [
			"https://js-quiz-draw.netlify.app/",
			"https://github.com/akash1412/js-quiz-draw",
		],
	},
	{
		id: 3,
		title: "Watch Flix",
		about: "",
		imgSrc: ProjImg3,
		links: [
			"https://watch-flix.vercel.app/",
			"https://github.com/akash1412/react-movie-app",
		],
	},
];

const Projects = () => {
	return (
		<Box
			py='2rem'
			px={["1rem"]}
			margin='0 auto'
			w={["100%", "100%", "80%", "100%"]}
			d='flex'
			flexDir='column'
			alignItems='center'>
			{ProjectItems.map(projItem => (
				<Project {...projItem} />
			))}
		</Box>
	);
};

const Project = ({ imgSrc, title, about, links }) => (
	<Box
		my='4rem'
		d='flex'
		position='relative'
		flexDir='column'
		alignItems='center'
		w={["100%", "95%", "95%", "90%", "120rem"]}>
		<Heading as='h1' className='title'>
			{title}
		</Heading>

		<Box
			d='flex'
			p={[0, 0, "1rem"]}
			flexDir={["column", "column", "column", "row"]}
			justifyContent='space-between'
			alignItems={["center", "center", "center", "stretch"]}
			mt={["0rem", 0]}>
			<Box
				w={["100%", "100%", "100%", "45rem", "48rem"]}
				mr={[0, 0, 0, "8rem"]}>
				<Image
					src={imgSrc}
					objectFit='cover'
					alt='title'
					mr={[0, 0, 0, "8rem"]}
					objectPosition='center'
				/>
			</Box>

			<Box
				marginLeft={[0, 0, 0, "auto"]}
				w={["100%", "100%", "100%", "40%"]}
				d='flex'
				flexDir='column'
				// alignItems={["center", "center", "stretch"]}
				mt={["2rem", "2rem", "2rem", "0"]}>
				<Box>
					<Text
						lineHeight='2rem'
						fontSize='1.5rem'
						// textAlign={["center", "center", "initial"]}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi repudiandae consequuntur
						voluptatum laborum numquam blanditiis harum quisquam eius sed odit
						fugiat iusto fuga praesentium optio, eaque rerum! Provident
						similique accusantium nemo autem. Veritatis obcaecati tenetur iure
						eius earum ut molestias architecto voluptate aliquam nihil, eveniet
						aliquid culpa
					</Text>
				</Box>
				<Box
					alignSelf={["center", "center", "center", "initial"]}
					mt={["3rem", "4rem", "4rem", "auto", "auto"]}
					fontSize='1.8rem'
					d='flex'
					alignItems='center'>
					<Link
						href={links[0]}
						target='_blank'
						d='inline-block'
						px='2.2rem'
						py='.5rem'
						mr='2rem'
						borderRadius='2rem'
						bgColor='#127EB1'
						border='1.5px solid transparent '>
						<Box d='flex' alignItems='center' justifyContent='space-around'>
							<BsLink45Deg />
							<span style={{ marginLeft: "1.5rem" }}>visit </span>
						</Box>
					</Link>
					<Link
						href={links[1]}
						d='inline-block'
						target='_blank'
						px='2.5rem'
						py='.5rem'
						borderRadius='2rem'
						border='1.5px solid #fff'
						textAlign='center'>
						<Box d='flex' alignItems='center' justifyContent='space-around'>
							<AiFillGithub />
							<span style={{ marginLeft: "1.5rem" }}>source </span>
						</Box>
					</Link>
				</Box>
			</Box>
		</Box>
	</Box>
);

export default Projects;
