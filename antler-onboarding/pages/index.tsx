import NextLink from 'next/link';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Container,
	Heading,
	Text,
	Button,
	Flex,
	Spacer,
	Box,
	Link,
} from '@chakra-ui/react';

export default function Home() {
	return (
		<Box>
			<Heading textAlign='center' mb={8}>
				Welcome to Antler
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
		</Box>
	);
}
