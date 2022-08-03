import { UnorderedList, ListItem, Box, Text } from '@chakra-ui/react';
import { Company } from '../types';

interface IProps {
	companyDetails: Company;
}

export default function CompanyDetails({ companyDetails }: IProps) {
	return (
		<Box mt={4}>
			<Text mb={4}>Your company details</Text>
			<UnorderedList spacing={3}>
				<ListItem>Company Name: {companyDetails.name}</ListItem>
				<ListItem>Company Size: {companyDetails.size}</ListItem>
				<ListItem>Company Funding: ${companyDetails.funding}</ListItem>
			</UnorderedList>
		</Box>
	);
}
