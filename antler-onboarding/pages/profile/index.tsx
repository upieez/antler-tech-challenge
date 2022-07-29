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
	Link,
	CheckboxGroup,
	HStack,
	Checkbox,
} from '@chakra-ui/react';

export default function Profile() {
	return (
		<Box>
			<Heading textAlign='center' mb={8}>
				Create your profile
			</Heading>
			<Container>
				<FormControl>
					<FormLabel>Linkedin Email</FormLabel>
					<Input type='url' />
					<FormLabel mt={4}>Expertise</FormLabel>
					<Input type='text' />
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
					<Flex mt={4}>
						<Spacer />
						<Button colorScheme='green'>Continue</Button>
					</Flex>
				</FormControl>
			</Container>
		</Box>
	);
}
