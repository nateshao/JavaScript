## 前言
> JavaScript 与 Java 是两种完全不同的语言，无论在概念上还是设计上。
  Java（由 Sun 发明）是更复杂的编程语言。ECMA-262 是 JavaScript 标准的官方名称。JavaScript 由 Brendan Eich 发明。它于 1995 年出现在 Netscape 中（该浏览器已停止更新），并于 1997 年被 ECMA（一个标准协会）采纳。

### 1. JavaScript引用方式
JavaScript的位置
```html
 	<!DOCTYPE html>
 	<html>
 		<head>
 			<meta charset="UTF-8">
 			<title> JavaScript标识放置<Head>...</Head>头部之间</title>
 			<script type="text/javascript">
 				var ODiv = document.getElementById("context");
 	        	     console.log(ODiv); // 打印出null
 			</script>
 		</head>
 		<body>
 			<div id="context">你好</div>		
 		</body>
 	</html>

```
- 嵌入式 
```html

   <script>javascript语句;</script>
<script type="text/javascript">javascript语句;</script>

``` 
- 外链式  
```html
<script src="js/test.js"></script>
```

- 行内式  
```html
<a href="javascript:alert'hello';">test</a>
```
<script>
  console.log('你好！');
</script>

<script>
  document.write('你好！');
</script>

<script>
  document.write('<script>alert(123);<\/script>');
</script>

### 2. JavaScript 输出

- 使用 window.alert() 弹出警告框。
- 使用 document.write() 方法将内容写到 HTML 文档中。
- 使用 innerHTML 写入到 HTML 元素。
- 使用 console.log() 写入到浏览器的控制台。

### 3. 运算符
- JavaScript：改变 HTML 内容
```html
function myFunction()
{
	x=document.getElementById("demo");  // 找到元素
	x.innerHTML="Hello JavaScript!";    // 改变内容
}
</script>
<button type="button" onclick="myFunction()">点击这里</button>
```
- JavaScript：改变 HTML 图像


```html

<script>
  alert(220 + 230);             // 输出结果：450
  alert(2 * 3 + 25 / 5 - 1);    // 输出结果：10
  alert(2 * (3 + 25) / 5 - 1);  // 输出结果：10.2
</script>

<script>
  alert('Hello');               // 单引号字符串
  alert("Hello");               // 双引号字符串
</script>

<script>
  alert('22' == '22');          // 输出结果：true
  alert('22' == '33');          // 输出结果：false
</script>

<script>
  alert('220' + '230');                 // 输出结果：220230
  alert('220 + 230 = ' + 220 + 230);    // 输出结果：220 + 230 = 220230
  alert('220 + 230 = ' + (220 + 230));  // 输出结果：220 + 230 = 450
</script>

<script>
  if (22 > 33) {
    alert(true);            // 判断成立时执行此语句
  } else {
    alert(false);           // 判断不成立时执行此语句
  }
</script>

<script>
  var num1 = 22;            // 使用名称为num1的变量保存数字22
  var num2 = 33;            // 使用名称为num2的变量保存数字33
  alert(num1 + num2);       // 输出结果：55
  alert(num1 - num2);       // 输出结果：-11
</script>

<script>
  var temp = num1;          // 将变量num1的值赋给变量temp
  num1 = num2;              // 将变量num2的值赋给变量num1
  num2 = temp;              // 将变量temp的值赋给变量num2
  alert('num1 = ' + num1 + ', num2 = ' + num2);    // 输出结果：num1 = 33, num2 = 22
</script>

```

```html
<script>
  window.console;               // 访问window对象的console属性
  window.document;              // 访问window对象的document属性
  window.alert('test');         // 调用window对象的alert()方法
  window.prompt('test');        // 调用window对象的prompt()方法
</script>

<script>
  window.console.log('test');         // 调用console对象的log()方法
  window.document.write('test');      // 调用document对象的write()方法
</script>

<body>
  <div id="test">Hello</div>
  <script>
    var test = document.getElementById('test');    // 根据元素id创建元素对象
    alert(test.innerHTML);                         // 通过InnerHTML属性获取元素内容，输出结果：Hello
  </script>
</body>

<script>
  var str = 'apple';                 // 定义一个字符串
  alert(str.length);                 // 获取字符串长度，输出结果：5
  alert(str.toUpperCase());          // 获取转换大写后的结果，输出结果：APPLE
  alert('aa'.toUpperCase());         // 直接调用字符串的成员方法，输出结果：AA
</script>

<script>
  // 创建对象
  var stu = {};                      // 创建一个名称为stu的空对象
  // 添加属性
  stu.name = '小明';                 // 为stu对象添加name属性
  stu.gender = '男';                 // 为stu对象添加gender属性
  stu.age = 18;                      // 为stu对象添加age属性
  // 访问属性
  alert(stu.name);                   // 访问stu对象的name属性，输出结果：小明
  // 添加方法
  stu.introduce = function () {
    return '我叫' + this.name + '，今年' + this.age + '岁。';
  };
  // 调用方法
  alert(stu.introduce());            // 输出结果：我叫小明，今年18岁。
</script>
```
> case01-6 函数的定义与调用
```html
 <title>计算1到100个数相加和</title>
    <script>
      /* 
       1:函数的定义
       function funName (参数1, 参数2, 参数3....) {
           //函数体
       }
       2:函数调用
       funName(1,2,3);
       */
       //1 定义一个getSum()函数
       function getSum () {
           var sum = 0;
           for (var i = 1; i <= 100; i++) {
               sum += i;
           }
           document.write('1到100个数相加和是：'+sum);
       }
       //2 调用getSum()函数
       getSum();
    </script>
```
> case01-7 自定义函数与调用
```html
<script>
      /* 定义函数
       function funName (a,b) {
          函数体
        }
        在调用函数的时候，传入的参数叫做实参
        funName(5, 6);
      */


        // 求n-m之间所有数的和
        // n,m  形式参数(形参)
        function getSum(n, m) {
            var sum = 0;
            for (var i = n; i <= m; i++) {
                sum += i;
            }
            console.log(n+'-'+m+'之间的数相加为：'+sum);
        }
        getSum(5, 10); // n=5,m=10 sum=0+5+6+7+8+9+10==45
        getSum(100,1000);// n=100,m=1000 sum=0+100+101+102+...+1000=495550
      </script>
```
> case01-8 改变网页皮肤
```html
<body>
  <button value="设为红色"  onclick="color('red')">设为红色</button>
  <button value="设为黄色"  onclick="color('yellow')">设为黄色</button>
  <button value="设为蓝色"  onclick="color('blue')">设为蓝色</button>
  <button value="设为绿色"  onclick="color('green')">设为绿色</button>
  <script type="text/javascript">
    function color(e){
      document.body.style.backgroundColor = e
    }
  </script>
```
> case01-9 验证用户名和密码
```html
<script>
		// 输入用户名和密码，如果正确，给出弹出框提示“登录成功”，如果不对，提示“输入错误”
		var userName = prompt("请输入用户名");
		var passWord = prompt("请输入密码");
		if(userName =='admin' && passWord =='123456'){
			alert('登录成功')

		}
		else{
			alert('用户名或密码输入错误')
		}
	</script>
```
> case01-10 输出用户输入的信息
```html
    <script type="text/javascript">
		var msg = prompt("请输入您的信息"); // 输入框
		document.write(msg);
	</script>

```
> case01-11 计算年龄小游戏
```html
<input type="button" onclick="disp_year()" value="请输入您的出生年份" />
	<script type="text/javascript">
		function disp_year()
		  {
		   var year=prompt("请输入您的出生年份","")
		   if (year!=null && year!="")
		   {
				document.write('您今年'+(2019-year)+'岁')
		    }
		  }
	</script>
```

