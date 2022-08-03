export interface Cohort {
	id: number;
	name: string;
}

export interface Location {
	id: number;
	city: string;
	country: string;
}

export interface Program {
	id: number;
	type: string;
}

export interface TopicIndustry {
	id: number;
	name: string;
}

export interface UserTopicIndustry {
	id: number;
	user_id: number;
	topic_industry_id: number;
}

export interface User {
	id: number;
	name: string;
	email: string;
	onboarded: boolean;
	linkedin_url?: string;
	expertise?: string;
	program_id: number;
	cohort_id: number;
	location_id: number;
	program_info: Program;
}

export interface Company {
	id: number;
	name: string;
	size: number;
	funding: number;
	founder: number;
	founder_info: User;
}

export interface CompanyCofounder {
	id: number;
	company_id: number;
	cofounder_id: number;
	cofounder_info: User;
	company_info: Company;
}
