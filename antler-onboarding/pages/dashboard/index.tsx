import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Heading, Button, Center, Flex } from '@chakra-ui/react';

export default function Dashboard() {
	const router = useRouter();

	const handleOnLogout = () => {
		localStorage.removeItem('userId');
		router.push('/');
	};

	useEffect(() => {
		const userId = parseInt(localStorage.getItem('userId'));
		if (!userId) router.push('/');
	}, [router]);

	return (
		<Center h='100vh'>
			<Flex direction='column'>
				<Heading textAlign='center' mb={8}>
					Welcome to your dashboard
				</Heading>
				<Button onClick={handleOnLogout} colorScheme='red'>
					Logout
				</Button>
			</Flex>
		</Center>
	);
}
