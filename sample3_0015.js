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

asyncProc(50)
	.then(
		//成功時のコールバック関数です。
		response => {
			console.log(response);
		},
		// 失敗時のコールバック関数です。
		error => {
			console.log(error)
		}
	);
	