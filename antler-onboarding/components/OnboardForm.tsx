import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '../graphql/query';
import {
	FormControl,
	FormLabel,
	Input,
	CheckboxGroup,
	HStack,
	Checkbox,
	Skeleton,
} from '@chakra-ui/react';

export default function OnboardForm({ formik }) {
	const { data, loading } = useQuery(GET_USER_DATA);

	if (loading) return <Skeleton height='20px' />;

	return (
		<FormControl>
			<FormLabel>Linkedin Email (Optional)</FormLabel>
			<Input
				type='url'
				name='linkedInUrl'
				onChange={formik.handleChange}
				value={formik.values.linkedInUrl}
			/>
			<FormLabel mt={4}>Expertise (e.g. technical, design, product)</FormLabel>
			<Input
				type='text'
				name='expertise'
				isRequired
				onChange={formik.handleChange}
				value={formik.values.expertise}
			/>
			<FormLabel mt={4}>Topics and Industries</FormLabel>
			<CheckboxGroup colorScheme='green'>
				<HStack wrap='wrap'>
					{data.topic_industry.map((value) => {
						return (
							<Checkbox
								key={value.name}
								value={value.id.toString()}
								name='topicIndustry'
								onChange={formik.handleChange}>
								{value.name}
							</Checkbox>
						);
					})}
				</HStack>
			</CheckboxGroup>
		</FormControl>
	);
}
