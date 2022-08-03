import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Container,
	Heading,
	Button,
	Flex,
	Spacer,
	Link,
	Center,
	Text,
} from '@chakra-ui/react';
import { LOG_IN } from '../../graphql/query';
import { LoginData, LoginVars } from './types';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const [login, { data, loading, called }] = useLazyQuery<LoginData, LoginVars>(
		LOG_IN,
		{
			variables: { email: email, password: password },
		}
	);

	const handleLogin = async () => {
		const response = await login();

		if (response.data.user.length > 0) {
			const { id } = response.data.user[0];
			localStorage.setItem('userId', id.toString());
			router.push('/dashboard');
		}
	};

	return (
		<Center h='100vh'>
			<Flex direction='column' width='100%'>
				<Heading textAlign='center' mb={8}>
					Login
				</Heading>
				<Container>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type='email'
							isRequired
							onChange={(e) => setEmail(e.target.value)}
						/>
						<FormErrorMessage>Email is required.</FormErrorMessage>
						<FormLabel mt={4}>Password</FormLabel>
						<Input
							type='password'
							isRequired
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormErrorMessage>Password is required.</FormErrorMessage>
						{data && !data.user.length && (
							<Text mt={4} color='red'>
								You do not have an account with us yet, please sign up
							</Text>
						)}
						<Flex mt={4}>
							<FormHelperText>
								Looking to signup? <Link href='/signup'>Click here</Link>
							</FormHelperText>
							<Spacer />
							<Button
								isLoading={loading && called}
								colorScheme='blue'
								onClick={handleLogin}>
								Login
							</Button>
						</Flex>
					</FormControl>
				</Container>
			</Flex>
		</Center>
	);
}
