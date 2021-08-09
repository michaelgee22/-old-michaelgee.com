import { FavoriteItem, FavoriteItemProps } from '@/components/about/FavoriteItem'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import Image from 'next/image'
import { Badge, Box, Fade, Flex } from '@chakra-ui/react'
import data from '@/db/about.json'

const AboutPage = () => {
	const { favorites, otherLikes } = data

	return (
		<>
			<PageHead
				title="Michael Gee | About Me"
				description="Michael Gee is a passionate software developer eager to build, learn, and share web development things along with turning ideas into applications."
				url="https://michaelgee.com/about"
			/>

			<Container>
				<Fade in transition={{ enter: { duration: 1.5 } }}>
					<Box py="16px">
						<PageTitle title="Hello, I'm Michael Gee 👋" />
						<Box as="p" py="8px">
							I'm a passionate software developer eager to turn ideas into applications specializing
							in creating elegant user interfaces & experiences.
						</Box>
					</Box>
					<Flex flexDir={['column', 'row']} className="about-image-container">
						<Image
							src="/images/about/fam1.jpg"
							width="540px"
							height="540px"
							alt="Family photo at the beach"
						/>
						<Image
							src="/images/about/mgee.jpg"
							width="540px"
							height="540px"
							alt="Personal headshot photo"
						/>
						<Image
							src="/images/about/fam2.jpg"
							width="540px"
							height="540px"
							alt="Another family photo"
						/>
					</Flex>
					<Flex flexDir={['column', 'row']} className="about-image-container">
						<Image
							src="/images/about/golf1.jpg"
							width="540px"
							height="360px"
							alt="Golf photo: setting up to hit the ball"
						/>
						<Image
							src="/images/about/golf2.jpg"
							width="540px"
							height="360px"
							alt="Golf photo: swinging while watching the ball fly into the lake"
						/>
					</Flex>
					<Box as="h3" fontSize="3xl" fontStyle="italic" py="16px">
						My Favorite...
					</Box>
					{favorites.map((fav: FavoriteItemProps) => {
						return <FavoriteItem label={fav.label} value={fav.value} key={fav.label} />
					})}
					<Box as="h3" fontSize="3xl" fontStyle="italic" py="24px">
						I Also Enjoy...
					</Box>
					<Flex flexWrap="wrap" justify="center">
						{otherLikes.map((item: string) => {
							return (
								<Badge
									colorScheme="blue"
									size="2xl"
									py="4px"
									px="16px"
									mr="4px"
									mb="10px"
									fontSize="md"
									fontWeight="500"
									borderRadius="16px"
									key={item}
								>
									{item}
								</Badge>
							)
						})}
					</Flex>
				</Fade>
			</Container>
		</>
	)
}

export default AboutPage
