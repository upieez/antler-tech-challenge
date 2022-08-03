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
import {
	CofoundersData,
	CofoundersVars,
	SubmitUserAndCompanyData,
	SubmitUserAndCompanyVars,
	SubmitUserData,
	SubmitUserVars,
	UserData,
	UserProfile,
} from './types';
import { Company } from '../../types';

export default function Profile() {
	const [isFounder, setFounder] = useState(false);
	const [cofoundersList, setCofounders] = useState<UserProfile[]>([]);
	const [companyDetails, setCompanydetails] = useState<Company>();
	const userRef = useRef({ userId: 0 });

	const { data, loading } = useQuery<UserData>(GET_USER_DATA);
	const [submitUserAndCompanyData] = useMutation<
		SubmitUserAndCompanyData,
		SubmitUserAndCompanyVars
	>(POST_USER_AND_COMPANY_DATA);
	const [submitUserData] = useMutation<SubmitUserData, SubmitUserVars>(
		POST_USER_DATA
	);
	const [submitCofounders] = useMutation<CofoundersData, CofoundersVars>(
		POST_COMPANY_COFOUNDERS
	);

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
			console.log(
				'🚀 ~ file: index.tsx ~ line 90 ~ onSubmit: ~ submitVariables',
				submitVariables
			);
			let response;

			try {
				if (isFounder) {
					const { data } = await submitUserAndCompanyData({
						variables: {
							...submitVariables,
							userId,
						},
					});
					response = data;
				} else {
					const { data } = await submitUserData({
						variables: {
							...submitVariables,
							userId,
						},
					});
					response = data;
				}

				if (values.companyCofounders.length > 0) {
					const companyCofounders = values.companyCofounders.map(
						(cofounder) => {
							return {
								company_id: response.insert_company_one.id,
								cofounder_id: parseInt(cofounder),
							};
						}
					);

					await submitCofounders({
						variables: {
							companyCofounders: companyCofounders,
						},
					});
				}

				router.push('/dashboard');
			} catch (error) {
				console.log(error);
			}
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
