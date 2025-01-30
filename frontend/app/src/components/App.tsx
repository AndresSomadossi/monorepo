import { Button } from '@repo/ui-components/button';
import { Double } from '@repo/ui-components/double';
import { Title } from './Title';

const App = () => {
	return (
		<div className="content">
			<Title />
			<Button appName="any">Click me!</Button>
			<Double />
		</div>
	);
};

export default App;
