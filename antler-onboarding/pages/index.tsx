import NextLink from 'next/link';
import {
	Container,
	Heading,
	Button,
	Flex,
	Center,
	Text,
} from '@chakra-ui/react';

export default function Home() {
	return (
		<Center h='100vh'>
			<Flex direction='column'>
				<Heading textAlign='center' mb={8}>
					Welcome to{' '}
					<Text color='red' as='span'>
						Antler
					</Text>
				</Heading>
				<Container>
					<Flex justify='center'>
						<NextLink href='/login' passHref>
							<Button colorScheme='blue' size='lg' mr={4}>
								Login
							</Button>
						</NextLink>
						<NextLink href='/signup' passHref>
							<Button size='lg'>Signup</Button>
						</NextLink>
					</Flex>
				</Container>
			</Flex>
		</Center>
	);
}
