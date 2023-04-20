const {
	selectedToParametersArray
} = require("./utils");

function parse(selectedText) {
	const vars = [];
	const pars = selectedToParametersArray(selectedText);
	for (let par of pars) {
		const index = par.indexOf(":");
		let finalText = ""
		if (index !== -1) {
			finalText = par.substring(0, index).trim();
		} else {
			finalText = par.trim();
		}
		// 特殊处理最后一个字符
		if (finalText.endsWith("?")) {
			finalText = finalText.slice(0, -1).trim();
		}
		vars.push(finalText);
	}
	return vars.length > 0 ? vars.join(", ") : null;
}

module.exports = {
	parse
}