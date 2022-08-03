import { FormikInitialValues, UserData } from './types';

export const formatSubmitData = (
	values: FormikInitialValues,
	userId: number
) => {
	const topicIndustry = values.topicIndustry.map((value) => {
		return {
			user_id: userId,
			topic_industry_id: parseInt(value),
		};
	});
	return {
		linkedInUrl: values.linkedInUrl,
		expertise: values.expertise,
		topicIndustry: topicIndustry,
		userId: userId,
		companyName: values.companyName,
		companySize: values.companySize,
		companyFunding: values.companyFunding,
	};
};

export const formikInitialValues: FormikInitialValues = {
	linkedInUrl: null,
	expertise: '',
	topicIndustry: [],
	companyName: '',
	companySize: 0,
	companyFunding: 0,
	companyCofounders: [],
};

export const filterCompanyAndUserData = (data: UserData, userId: number) => {
	const [currentUser] = data.user.filter((user) => {
		return user.id === userId;
	});

	const cofounderCompanyIds = data.company_cofounder.map((company) => {
		return company.cofounder_id;
	});

	const [cofounderCompanyId] = cofounderCompanyIds.filter((company) => {
		return company === userId;
	});

	const founderCompanyIds = data.company.map((company) => company.founder);

	const availableFounders = data.user.filter((user) => {
		return (
			user.program_id === currentUser.program_id &&
			user.id !== userId &&
			!cofounderCompanyIds.includes(user.id) &&
			!founderCompanyIds.includes(user.id)
		);
	});

	const [company] = data.company_cofounder.filter(
		(data) => data.cofounder_id === cofounderCompanyId
	);

	return {
		currentUser,
		cofounderCompanyIds,
		cofounderCompanyId,
		availableFounders,
		company,
	};
};
