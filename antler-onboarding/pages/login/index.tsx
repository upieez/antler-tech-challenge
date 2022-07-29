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

export default function Login() {
	return (
		<Box>
			<Heading textAlign='center' mb={8}>
				Login to Antler
			</Heading>
			<Container>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input type='email' />
					<FormLabel mt={4}>Password</FormLabel>
					<Input type='email' />
					<Flex mt={4}>
						<FormHelperText>
							Looking to signup? <Link href='/signup'>Click here</Link>
						</FormHelperText>
						<Spacer />
						<Button colorScheme='blue'>Login</Button>
					</Flex>
				</FormControl>
			</Container>
		</Box>
	);
}
