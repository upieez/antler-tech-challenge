import '../styles/globals.css';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from '@apollo/client';
import { typeDefs } from '../graphql/typeDefs';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
	const client = new ApolloClient({
		uri: 'http://localhost:4000/v1/graphql',
		cache: new InMemoryCache(),
		typeDefs,
	});

	return (
		<ApolloProvider client={client}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</ApolloProvider>
	);
}

export default MyApp;
