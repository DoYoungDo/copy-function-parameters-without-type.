const hx = require('hbuilderx');
const {
	parse
} = require("./selection-parse");

function copy() {
	hx.window.getActiveTextEditor().then(function(editor) {
		let selection = editor.selection;
		let document = editor.document;
		// 获取选中的文本
		let selectedText = document.getText(selection);

		// 解析出要复制的文本
		let resultText = parse(selectedText);

		if (!resultText || resultText === "") {
			hx.window.setStatusBarMessage('解析选择文件失败，请重新选择...', 2000, 'error');
			return;
		}

		hx.env.clipboard.writeText(resultText).then(() => {
			hx.window.setStatusBarMessage("复制纯参数成功", 1000, 'info');
		});
	});
}
module.exports = {
	copy
}