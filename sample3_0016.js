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

// １つ目の非同期処理を実行します。
asyncProc(50)
	.then(
		response => {
			console.log(`１つ目：${response}`);
			// １つ目の非同期処理に成功したら、２つ目の非同期処理を実行します。
			return asyncProc(150);
		}
	)
	.then(
		response => {
			console.log(`２つ目：${response}`);
		},
		error => {
			console.log(error);
		}
	);