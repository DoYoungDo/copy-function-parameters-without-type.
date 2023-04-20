const hx = require('hbuilderx');
// const nls = require('hxnls');
// let localize = nls.loadMessageBundle();

//该方法将在插件激活的时候调用
function activate(context) {
	//订阅销毁钩子，插件禁用的时候，自动注销该command。
	context.subscriptions.push(hx.commands.registerCommand('copy.function.parameters.without.type', () => {
		const {
			copy
		} = require("./copy-parameters");
		copy();
	}));
	// context.subscriptions.push(hx.commands.registerCommand('paste.function.parameters.without.type', () => {
	// 	// TODO
	// }));
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
	activate,
	deactivate
}