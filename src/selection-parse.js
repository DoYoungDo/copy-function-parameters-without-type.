const tsp = require("./typescript-parser");

/* 保存所有解析器 */
const g_language_parsers = [tsp];

/* 解析选中文本，遍历所有解析器解析 */
function parse(selectedText) {
	let text = null;

	for (let parser of g_language_parsers) {
		if (parser && parser.parse) {
			let res = parser.parse(selectedText);
			if (res) {
				text = res;
				break;
			}
		}
	}

	return text;
}

module.exports = {
	parse
}