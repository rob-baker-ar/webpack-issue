
class Test
{
	constructor()
	{
		this.hello_world = 'Hello';
	}
	
	async hello()
	{
		console.log(this.hello_world);
	}
}

const test = new Test();
test.hello().then(() => console.log(' World'));