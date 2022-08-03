import { gql } from '@apollo/client';

export const typeDefs = gql`
	extend type user_topic_industry_insert_input {
		user_id: Int!
		topic_industry_id: Int!
	}

	extend type company_cofounder_insert_input {
		company_id: Int!
		cofounder_id: Int!
	}
`;
