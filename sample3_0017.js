function asyncProc(value) {
	return new Promise((resolve, reject) => {
		// 1000ミリ秒に引数valueの値を判定します。
		setTimeout(() => {
			if (value < 100) {
				resolve(`値は${value}です`);
			} else {
				reject(`エラーです。${value}`);
			}
		}, 1000);
	});
}

Promise.all([
	asyncProc(50),
	asyncProc(30),
	asyncProc(10),
	asyncProc(20),
	asyncProc(80)
	])
.then(
	// すべての処理が成功した時に実行します。
	response => {
		console.log(response);
	},
	// 一つでも処理が失敗した場合に実行します。
	error => {
		console.log(error);
	}
);
