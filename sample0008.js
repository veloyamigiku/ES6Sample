// オブジェクトリテラル

var isbn = '978-4-7742-7568-3';
var title = 'JSアプリケーション';

var book = {
	isbn,
	title,
	toString() {
		return this.title + '(' + this.isbn + ')';
	}
}
