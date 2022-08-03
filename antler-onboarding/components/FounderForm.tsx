import {
	FormControl,
	FormLabel,
	Input,
	CheckboxGroup,
	HStack,
	Checkbox,
} from '@chakra-ui/react';
import { UserProfile, FormikInitialValues } from '../pages/profile/types';
import { FormikProps } from 'formik';

interface IProps {
	formik: FormikProps<FormikInitialValues>;
	cofoundersList: UserProfile[];
}

export default function FounderForm({ formik, cofoundersList }: IProps) {
	return (
		<FormControl>
			<FormLabel mt={4}>Company Name</FormLabel>
			<Input
				type='text'
				isRequired
				name='companyName'
				onChange={formik.handleChange}
			/>
			<FormLabel mt={4}>Company Size</FormLabel>
			<Input
				type='number'
				isRequired
				name='companySize'
				onChange={formik.handleChange}
			/>
			<FormLabel mt={4}>Funding Raised ($USD)</FormLabel>
			<Input
				name='companyFunding'
				typeof='number'
				max={10000000}
				onChange={formik.handleChange}
				isRequired
			/>
			<FormLabel mt={4}>Select Co-Founders</FormLabel>
			<CheckboxGroup colorScheme='blue'>
				<HStack spacing={5} wrap='wrap'>
					{cofoundersList.length > 0
						? cofoundersList.map((cofounder) => {
								return (
									<Checkbox
										key={cofounder.id}
										name='companyCofounders'
										value={cofounder.id.toString()}
										onChange={formik.handleChange}>
										{cofounder.name}
									</Checkbox>
								);
						  })
						: 'All co-founders are unavailable'}
				</HStack>
			</CheckboxGroup>
		</FormControl>
	);
}
