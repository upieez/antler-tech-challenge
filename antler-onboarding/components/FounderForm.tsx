import { useState } from 'react';

import {
	FormControl,
	FormLabel,
	Input,
	CheckboxGroup,
	HStack,
	Checkbox,
	NumberInput,
	NumberInputField,
} from '@chakra-ui/react';

export default function FounderForm({ formik, cofoundersList }) {
	const format = (val) => `$` + val;
	const parse = (val) => val.replace(/^\$/, '');

	const [value, setValue] = useState('');

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
			<FormLabel mt={4}>Funding Raised</FormLabel>
			<NumberInput
				onChange={(valueString) => setValue(parse(valueString))}
				value={format(value)}
				max={10000000}
				isRequired>
				<NumberInputField />
			</NumberInput>
			<FormLabel mt={4}>Select Co-Founders</FormLabel>
			<CheckboxGroup colorScheme='blue'>
				<HStack spacing={5} wrap='wrap'>
					{cofoundersList.map((cofounder) => {
						return (
							<Checkbox
								key={cofounder.id}
								name='cofounders'
								value={cofounder.id.toString()}
								onChange={formik.handleChange}>
								{cofounder.name}
							</Checkbox>
						);
					})}
				</HStack>
			</CheckboxGroup>
		</FormControl>
	);
}
