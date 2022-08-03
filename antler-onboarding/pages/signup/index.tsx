import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
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
	Center,
	Link,
	Text,
} from '@chakra-ui/react';
import { SIGN_UP } from '../../graphql/query';
import { SignUpData, SignUpVars } from './types';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const [signup, { data, loading, called }] = useLazyQuery<
		SignUpData,
		SignUpVars
	>(SIGN_UP, {
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
		<Center h='100vh'>
			<Flex direction='column' w='100%'>
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
						{data && !data.user.length && (
							<Text mt={4} color='red'>
								Your account needs approval or has been onboarded
							</Text>
						)}
						<Flex mt={4}>
							<FormHelperText>
								Looking to login? <Link href='/login'>Click here</Link>
							</FormHelperText>
							<Spacer />
							<Button
								isLoading={called && loading}
								colorScheme='green'
								onClick={handleSignup}>
								Sign up
							</Button>
						</Flex>
					</FormControl>
				</Container>
			</Flex>
		</Center>
	);
}
