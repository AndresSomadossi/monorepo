import { Button } from '@repo/ui-components/button';
import { Title } from '#components/title.js';

const App = () => {
	return (
		<div className="content">
			<Title />
			<Button className=" bg-red-400" appName="any">
				Click me!
			</Button>
		</div>
	);
};

export default App;
