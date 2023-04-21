# 复制纯函数参数

- 在写代码的时候经常需要复制形参列表中的所有参数，而又不想要类型，总是要先粘贴到指定位置再一个一个删除参数类型
- 现在只需要右键`复制纯函数参数`，就会将不带参数类型的形参复制到剪切板，然后随意粘贴使用
- 比如下面的代码，`$1`的位置想要打印所有形参，这个时候需要选中`run`方法左括号开始的位置双击选中括号中的内容，右键`复制纯函数参数`，然后在`$1`的位置直接ctrl+c粘贴即可
- `$2`位置同上
```typescript
class A {
	public run(par1 : string, par2 : number, par3 : (a : string, b : number) => void, par4 ?: string) : void {
		console.log($1); // console.log(par1, par2, par3, par4);
	}
}
```
```typescript
class B extends A {
	public run(par10 : string, par20 : number, par30 : (a : string, b : number) => void, par40 ?: string) : void {
		super.run($2); // super.run(par10, par20, par30, par40);
	}
}
```
- 目前仅支持`typescript`

![](https://mp-b9e71787-b2f3-4676-bbfa-f4c5735dea01.cdn.bspapp.com/cloudstorage/9f99b096-5d99-4325-b049-98668df3ea7d.jpg)