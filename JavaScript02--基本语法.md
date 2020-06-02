## 第二章 JavaScript 语法
> JavaScript 是一个脚本语言。它是一个轻量级，但功能强大的编程语言。
- 程序中调试是测试，查找及减少bug(错误)的过程。
- 一个好的编程习惯是，在代码开始处，统一对需要的变量进行声明。
- 	JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。

### JavaScript 字面量
> 在编程语言中，一般固定值称为字面量，如 3.14。数字（Number）字面量 可以是整数或者是小数，或者是科学计数(e)。 
3.14,1001,123e5

- 字符串（String）字面量 可以使用单引号或双引号:"John Doe"或者'John Doe'
- 数组（Array）字面量 定义一个数组：[40, 100, 1, 5, 25, 10]
- 对象（Object）字面量 定义一个对象：{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
- 函数（Function）字面量 定义一个函数：function myFunction(a, b) { return a * b;}

### JavaScript 变量
> 在编程语言中，变量用于存储数据值。JavaScript 使用关键字 var 来定义变量， 使用等号来为变量赋值：
var x, length   x = 5  length = 6

- 变量可以通过变量名访问。在指令式语言中，变量通常是可变的。字面量是一个恒定的值。
- 变量是一个名称。字面量是一个值。
### JavaScript 关键字
> JavaScript 同样保留了一些关键字，这些关键字在当前的语言版本中并没有使用，但在以后 JavaScript 扩展中会用到。以下是 JavaScript 中最​​重要的保留字（按字母顺序）：
```html
abstract	else	instanceof	super
boolean	enum	int	switch
break	export	interface	synchronized
byte	extends	let	this
case	false	long	throw
catch	final	native	throws
char	finally	new	transient
class	float	null	true
const	for	package	try
continue	function	private	typeof
debugger	goto	protected	var
default	if	public	void
delete	implements	return	volatile
do	import	short	while
double	in	static	with
```
### JavaScript 数据类型
1. 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
2. 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
```html
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var lastName = 'Johnson';                         //字符串可以是引号中的任意文本。您可以使用单引号或双引号：
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
```
### JavaScript 布尔
> 布尔（逻辑）只能有两个值：true 或 false。
var x=true;
var y=false;

### JavaScript 数组
```html
下面的代码创建名为 cars 的数组：
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
 或者 (condensed array):
 var cars=new Array("Saab","Volvo","BMW");
```
### Undefined 和 Null
- Undefined 这个值表示变量不含有值。
- 可以通过将变量的值设置为 null 来清空变量。

### 声明变量类型
```html

当您声明新变量时，可以使用关键词 "new" 来声明其类型：
var carname = new String;
var x = new Number;
var y = new Boolean;
var cars = new Array;
var person= new Object;

```