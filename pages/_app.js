import 'styles/bootstrap.scss'
import 'styles/index.scss'
import 'styles/responsive.scss'
import { Provider } from 'react-redux'
import store from 'state/store'

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
