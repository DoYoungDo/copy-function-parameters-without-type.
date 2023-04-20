/* 将选中的参数文本拆分为单个参数文本组成的数组 */
function selectedToParametersArray(selectedText) {
	const arr = [];

	const leftB = '(';
	const rightB = ')';

	let text = selectedText;
	if (selectedText.startsWith(leftB) && selectedText.endsWith(rightB)) {
		text = text.split(1, -1);
	}
	let level = 0;
	let pos = 0;
	for (let i = 0; i < text.length; ++i) {
		const char = text[i];
		if (char === leftB) {
			level++;
			continue;
		} else if (char === rightB) {
			level--;
			continue;
		} else if (level === 0 && char === ',') {
			const sub = text.substring(pos, i);
			if (sub) {
				arr.push(sub);
				pos = i + 1;
			} else {
				break;
			}
		}
	}

	if (pos < text.length) {
		arr.push(text.substring(pos, text.length))
	}
	
	return level === 0 ? arr : [];
}

module.exports = {
	selectedToParametersArray
}