import { gql } from '@apollo/client';

export const GET_USER_DATA = gql`
	query GetUserData {
		user {
			id
			program_id
			name
			program_info {
				type
			}
		}
		topic_industry {
			id
			name
		}
		company_cofounder {
			cofounder_id
			company_info {
				name
				size
				funding
			}
		}
		company {
			id
			name
			size
			funding
			founder
			founder_info {
				name
			}
		}
	}
`;

export const SIGN_UP = gql`
	query UserSignup($email: String!, $password: String!) {
		user(
			where: {
				email: { _eq: $email }
				password: { _eq: $password }
				onboarded: { _eq: false }
			}
		) {
			email
			id
		}
	}
`;

export const LOG_IN = gql`
	query UserSignup($email: String!, $password: String!) {
		user(
			where: {
				email: { _eq: $email }
				password: { _eq: $password }
				onboarded: { _eq: true }
			}
		) {
			email
			id
		}
	}
`;
