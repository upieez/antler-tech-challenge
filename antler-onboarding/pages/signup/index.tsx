import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	Container,
	Heading,
	Button,
	Flex,
	Spacer,
	Box,
	Link,
} from '@chakra-ui/react';

const SIGN_UP = gql`
	query UserSignup($email: String!, $password: String!) {
		user(where: { email: { _eq: $email }, password: { _eq: $password } }) {
			email
			id
		}
	}
`;

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const [signup, { data, loading, error }] = useLazyQuery(SIGN_UP, {
		variables: { email: email, password: password },
	});

	const handleSignup = async () => {
		const response = await signup();

		if (response.data.user.length > 0) {
			const { id } = response.data.user[0];
			localStorage.setItem('userId', id.toString());
			router.push('/profile');
		}
	};

	return (
		<Box>
			<Heading textAlign='center' mb={8}>
				Create an account
			</Heading>
			<Container>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input
						type='email'
						isRequired
						onChange={(e) => setEmail(e.target.value)}
					/>
					<FormLabel mt={4}>Password</FormLabel>
					<Input
						type='password'
						isRequired
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Flex mt={4}>
						<FormHelperText>
							Looking to login? <Link href='#'>Click here</Link>
						</FormHelperText>
						<Spacer />
						<Button colorScheme='green' onClick={handleSignup}>
							Sign up
						</Button>
					</Flex>
				</FormControl>
			</Container>
		</Box>
	);
}
