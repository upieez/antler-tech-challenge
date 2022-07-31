import { useState } from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Container,
	Heading,
	Text,
	Button,
	Flex,
	Spacer,
	Box,
	CheckboxGroup,
	HStack,
	Checkbox,
	useDisclosure,
	Center,
	NumberInput,
	NumberInputField,
} from '@chakra-ui/react';

export default function Profile() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const format = (val) => `$` + val;
	const parse = (val) => val.replace(/^\$/, '');

	const [value, setValue] = useState('0');

	return (
		<Center h='100vh'>
			<Box>
				<Heading textAlign='center' mb={8}>
					Create your profile
				</Heading>
				<Container borderWidth='1px' borderRadius='lg' p={4}>
					<FormControl>
						<FormLabel>Linkedin Email</FormLabel>
						<Input type='url' />
						<FormLabel mt={4}>Expertise</FormLabel>
						<Input type='text' isRequired />
						<FormLabel mt={4}>Topics and Industries</FormLabel>
						<CheckboxGroup colorScheme='green'>
							<HStack spacing={5}>
								<Checkbox value='Adtech'>Adtech</Checkbox>
								<Checkbox value='Aerospace'>Aerospace</Checkbox>
								<Checkbox value='Agriculture'>Agriculture</Checkbox>
								<Checkbox value='ArtTech'>ArtTech</Checkbox>
								<Checkbox value='B2B SaaS'>B2B SaaS</Checkbox>
								<Checkbox value='Biotech/Longevity'>Biotech/Longevity</Checkbox>
								<Checkbox value='ClimateTech'>ClimateTech</Checkbox>
								<Checkbox value='Community'>Community</Checkbox>
								<Checkbox value='Construction'>Construction</Checkbox>
							</HStack>
						</CheckboxGroup>
						<FormLabel mt={4}>Select Co-Founders</FormLabel>
						<CheckboxGroup colorScheme='green'>
							<HStack spacing={5}>
								<Checkbox value='Adtech'>Adtech</Checkbox>
								<Checkbox value='Aerospace'>Aerospace</Checkbox>
								<Checkbox value='Agriculture'>Agriculture</Checkbox>
								<Checkbox value='ArtTech'>ArtTech</Checkbox>
								<Checkbox value='B2B SaaS'>B2B SaaS</Checkbox>
								<Checkbox value='Biotech/Longevity'>Biotech/Longevity</Checkbox>
								<Checkbox value='ClimateTech'>ClimateTech</Checkbox>
								<Checkbox value='Community'>Community</Checkbox>
								<Checkbox value='Construction'>Construction</Checkbox>
							</HStack>
						</CheckboxGroup>
						<FormLabel mt={4}>Company Name</FormLabel>
						<Input type='text' isRequired />
						<FormLabel mt={4}>Company Size</FormLabel>
						<Input type='text' isRequired />
						<FormLabel mt={4}>Funding Raised</FormLabel>
						<NumberInput
							onChange={(valueString) => setValue(parse(valueString))}
							value={format(value)}
							max={10000000}
							isRequired>
							<NumberInputField />
						</NumberInput>
						<Flex mt={4}>
							<Spacer />
							<Button colorScheme='green' onClick={onOpen}>
								Continue
							</Button>
						</Flex>
					</FormControl>
				</Container>
			</Box>
		</Center>
	);
}
