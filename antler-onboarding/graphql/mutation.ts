import { gql } from '@apollo/client';

export const POST_USER_DATA = gql`
	type topicindustry_insert_input {
		user_id: Int
		topic_industry_id: Int
	}

	mutation PostUserData(
		$linkedInUrl: String
		$expertise: String!
		$topicIndustry: [topicindustry_insert_input!]
		$userId: Int!
	) {
		update_user_by_pk(
			pk_columns: { id: $userId }
			_set: {
				linkedin_url: $linkedInUrl
				expertise: $expertise
				onboarded: true
			}
		) {
			id
		}

		insert_user_topic_industry(objects: [$topicIndustry]) {
			affected_rows
		}
	}
`;

export const POST_USER_AND_COMPANY_DATA = gql`
	mutation PostUserAndCompanyData(
		$linkedInUrl: String
		$expertise: String!
		$topicIndustry: [user_topic_industry_insert_input!]
		$userId: Int!
		$companyName: String
		$companySize: Int
		$companyFunding: Int
	) {
		update_user_by_pk(
			pk_columns: { id: $userId }
			_set: {
				linkedin_url: $linkedInUrl
				expertise: $expertise
				onboarded: true
			}
		) {
			id
		}

		insert_user_topic_industry(objects: $topicIndustry!) {
			affected_rows
		}

		insert_company_one(
			object: {
				name: $companyName
				size: $companySize
				funding: $companyFunding
				founder: $userId
			}
		) {
			id
		}
	}
`;
