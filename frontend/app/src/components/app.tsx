import { Title } from '@/components/title';
import { Button } from '@repo/ui-components/button';

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
