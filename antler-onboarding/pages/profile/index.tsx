import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { GET_USER_DATA } from '../../graphql/query';
import {
	POST_USER_DATA,
	POST_USER_AND_COMPANY_DATA,
	POST_COMPANY_COFOUNDERS,
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
import {
	formatSubmitData,
	formikInitialValues,
	filterCompanyAndUserData,
} from './helper';
import FounderForm from '../../components/FounderForm';
import OnboardForm from '../../components/OnboardForm';
import CompanyDetails from '../../components/CompanyDetails';

export default function Profile() {
	const [isFounder, setFounder] = useState(false);
	const [cofoundersList, setCofounders] = useState([]);
	const [companyDetails, setCompanydetails] = useState();
	const userRef = useRef({ userId: 0 });
	const { data, loading } = useQuery(GET_USER_DATA);
	const [submitData] = useMutation(
		isFounder ? POST_USER_AND_COMPANY_DATA : POST_USER_DATA
	);
	const [submitCofounders] = useMutation(POST_COMPANY_COFOUNDERS);

	const router = useRouter();

	useEffect(() => {
		const userId = parseInt(localStorage.getItem('userId'));
		if (!userId) router.push('/');
		userRef.current.userId = userId;

		if (data) {
			if (Array.isArray(data.user)) {
				const { currentUser, cofounderCompanyId, availableFounders, company } =
					filterCompanyAndUserData(data, userId);

				if (currentUser.program_info.type === 'Startup') {
					setFounder(true);
				}

				if (availableFounders.length > 0) {
					setCofounders(availableFounders);
				}

				if (cofounderCompanyId) {
					setCompanydetails(company.company_info);
				}
			}
		}
	}, [data, router]);

	const formik = useFormik({
		initialValues: formikInitialValues,
		onSubmit: async (values) => {
			const userId = userRef.current.userId;
			const submitVariables = formatSubmitData(values, userId);

			const { data } = await submitData({
				variables: {
					...submitVariables,
					userId,
				},
			});

			if (values.companyCofounders.length > 0) {
				const companyCofounders = values.companyCofounders.map((cofounder) => {
					return {
						company_id: data.insert_company_one.id,
						cofounder_id: parseInt(cofounder),
					};
				});

				await submitCofounders({
					variables: {
						companyCofounders: companyCofounders,
					},
				});
			}

			router.push('/dashboard');
		},
	});

	if (loading) return <div>Skeleton</div>;

	return (
		<Center h='100vh'>
			<Box>
				<Heading textAlign='center' mb={8}>
					Create your profile
				</Heading>
				<Container borderWidth='1px' borderRadius='lg' p={4}>
					<form onSubmit={formik.handleSubmit}>
						<OnboardForm formik={formik} />
						{isFounder && !companyDetails && (
							<FounderForm formik={formik} cofoundersList={cofoundersList} />
						)}
						{companyDetails && (
							<CompanyDetails companyDetails={companyDetails} />
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
