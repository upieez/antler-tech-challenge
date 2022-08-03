import { User, TopicIndustry, CompanyCofounder, Company } from '../../types';

export interface FormikInitialValues {
	linkedInUrl?: string;
	expertise: string;
	topicIndustry: string[];
	companyName: string;
	companySize: number;
	companyFunding: number;
	companyCofounders: string[];
}

export type UserProfile = Omit<
	User,
	| 'onboarded'
	| 'email'
	| 'expertise'
	| 'linkedin_url'
	| 'cohort_id'
	| 'location_id'
>;

type CompanyCofounderProfile = Omit<CompanyCofounder, 'id' | 'cofounder_info'>;

export interface UserData {
	user: UserProfile[];
	topic_industry: TopicIndustry[];
	company_cofounder: CompanyCofounderProfile[];
	company: Company[];
}

export interface SubmitUserAndCompanyData {
	update_user_by_pk: {
		id: number;
	};

	insert_user_topic_industry: {
		user_id: number;
		topic_industry_id: number;
	};

	insert_company_one: {
		id: number;
	};
}

export interface SubmitUserAndCompanyVars {
	linkedinUrl?: string;
	expertise: string;
	topicIndustry: {
		user_id: number;
		topic_industry_id: number;
	}[];
	userId: number;
	companyName: string;
	companySize: number;
	companyFunding: number;
}

export interface SubmitUserData {
	update_user_by_pk: {
		id: number;
	};

	insert_user_topic_industry: {
		user_id: number;
		topic_industry_id: number;
	};
}

export interface SubmitUserVars {
	linkedinUrl?: string;
	expertise: string;
	topicIndustry: {
		user_id: number;
		topic_industry_id: number;
	}[];
	userId: number;
}

export interface CofoundersData {
	company_id: Pick<CompanyCofounder, 'company_id'>;
	cofounder_id: Pick<CompanyCofounder, 'cofounder_id'>;
}

export interface CofoundersVars {
	companyCofounders: {
		company_id: number;
		cofounder_id: number;
	}[];
}
