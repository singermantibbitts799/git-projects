
const getRandomTsCode = () => {
	return `class RandomClass {
	private randNum: number;

	constructor() {
		this.randNum = Math.floor(Math.random() * 10);
	}

	getRandomNumber(): number {
		return this.randNum;
	}
}`;
};