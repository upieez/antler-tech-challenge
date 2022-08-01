import { useEffect, useState, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { GET_USER_DATA } from '../../graphql/query';
import {
	POST_USER_DATA,
	POST_USER_AND_COMPANY_DATA,
} from '../../graphql/mutation';
import {
	Container,
	Heading,
	Button,
	Flex,
	Spacer,
	Box,
	Center,
} from '@chakra-ui/react';
import FounderForm from '../../components/FounderForm';
import OnboardForm from '../../components/OnboardForm';

export default function Profile() {
	let userRef = useRef({ userId: 0 });

	const [isFounder, setFounder] = useState(false);
	const [cofoundersList, setCofounders] = useState([]);
	const { data, loading } = useQuery(GET_USER_DATA);
	const [submitData] = useMutation(
		isFounder ? POST_USER_AND_COMPANY_DATA : POST_USER_DATA
	);

	useEffect(() => {
		const userId = parseInt(localStorage.getItem('userId'));
		userRef.current.userId = userId;

		if (data) {
			if (Array.isArray(data.user)) {
				const [currentUser] = data.user.filter((user) => {
					return user.id === userId;
				});

				const users = data.user.filter((user) => {
					return user.program_id === currentUser.program_id;
				});

				if (currentUser.program_info.type === 'Startup') {
					setFounder(true);
				}

				if (users.length > 0) {
					setCofounders(users);
				}
			}
		}
	}, [data]);

	const formik = useFormik({
		initialValues: {
			linkedInUrl: '',
			expertise: '',
			topicIndustry: [],
			companyName: '',
			companySize: '',
			companyFunding: '',
			cofounders: [],
		},
		onSubmit: (values) => {
			submitData({
				variables: {
					linkedInUrl: values.linkedInUrl,
					expertise: values.expertise,
					topicIndustry: values.topicIndustry.map((value) => {
						return { userId: userRef.current.userId, topic_industry_id: value };
					}),
					userId: userRef.current.userId,
					companyName: values.companyName,
					companySize: values.companySize,
					companyFunding: values.companyFunding,
				},
			}).then((result) => console.log(result));
		},
	});

	if (loading) return <div>hello</div>;

	return (
		<Center h='100vh'>
			<Box>
				<Heading textAlign='center' mb={8}>
					Create your profile
				</Heading>
				<Container borderWidth='1px' borderRadius='lg' p={4}>
					<form onSubmit={formik.handleSubmit}>
						<OnboardForm formik={formik} />
						{isFounder && (
							<FounderForm formik={formik} cofoundersList={cofoundersList} />
						)}
						<Flex mt={4}>
							<Spacer />
							<Button colorScheme='green' type='submit'>
								Continue
							</Button>
						</Flex>
					</form>
				</Container>
			</Box>
		</Center>
	);
}
