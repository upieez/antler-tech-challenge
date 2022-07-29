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

export default function Signup() {
	return (
		<Box>
			<Heading textAlign='center' mb={8}>
				Create an account
			</Heading>
			<Container>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input type='email' />
					<FormLabel mt={4}>Password</FormLabel>
					<Input type='password' />
					<FormHelperText>
						Make sure it&apos;s at least 8 characters including a number and a
						lowercase letter
					</FormHelperText>
					<Flex mt={4}>
						<FormHelperText>
							Looking to login? <Link href='#'>Click here</Link>
						</FormHelperText>
						<Spacer />
						<Button colorScheme='blue'>Login</Button>
					</Flex>
				</FormControl>
			</Container>
		</Box>
	);
}
