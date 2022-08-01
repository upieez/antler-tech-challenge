import { gql, useQuery, useMutation } from '@apollo/client';

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
		}
		company {
			name
			size
			funding
			founder_info {
				name
			}
		}
	}
`;
