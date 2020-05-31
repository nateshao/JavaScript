## JavaScript 对象
> JavaScript 对象是拥有属性和方法的数据。
- 在 JavaScript 中，对象是非常重要的，当你理解了对象，就可以了解 JavaScript 。
- 	JavaScript 对象是变量的容器。
- 	JavaScript 对象是属性变量的容器。
- 真实生活中的对象，属性和方法
- 真实生活中，一辆汽车是一个对象。
- 对象有它的属性，如重量和颜色等，方法有启动停止等:

```html
对象也是一个变量，但对象可以包含多个值（多个变量）。
var car = {type:"Fiat", model:500, color:"white"};
```
- 对象键值对的写法类似于：
    1. PHP 中的关联数组
    2. Python 中的字典
    3. C 语言中的哈希表
    4. Java 中的哈希映射
    5. Ruby 和 Perl 中的哈希表
### JavaScript 函数语法
- 	JavaScript 对大小写敏感。关键词 function 必须是小写的，并且必须以与函数名称相同的大小写来调用函数。
```html
<p>点击这个按钮，来调用带参数的函数。</p>
<button onclick="myFunction('Harry Potter','Wizard')">点击这里</button>
<script>
function myFunction(name,job){
    alert("Welcome " + name + ", the " + job);
}
</script>
```
### 带有返回值的函数
```html
有时，我们会希望函数将值返回调用它的地方。
通过使用 return 语句就可以实现。
在使用 return 语句时，函数会停止执行，并返回指定的值。
语法
function myFunction()
{
    var x=5;
    return x;
}
上面的函数会返回值 5。
注意： 整个 JavaScript 并不会停止执行，仅仅是函数。JavaScript 将继续执行代码，从调用函数的地方。

函数调用将被返回值取代：
var myVar=myFunction();
myVar 变量的值是 5，也就是函数 "myFunction()" 所返回的值。

即使不把它保存为变量，您也可以使用返回值：
document.getElementById("demo").innerHTML=myFunction();
"demo" 元素的 innerHTML 将成为 5，也就是函数 "myFunction()" 所返回的值。

您可以使返回值基于传递到函数中的参数：
实例
计算两个数字的乘积，并返回结果：
function myFunction(a,b)
{
    return a*b;
}
 
document.getElementById("demo").innerHTML=myFunction(4,3);
"demo" 元素的 innerHTML 将是：
12
```
```html
function myFunction(a,b)
{
    if (a>b)
    {
        return;
    }
    x=a+b
}
如果 a 大于 b，则上面的代码将退出函数，并不会计算 a 和 b 的总和。
```

### 局部 JavaScript 变量
- 在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。
只要函数运行完毕，本地变量就会被删除。

### 全局 JavaScript 变量    (不要随便使用全局变量)
- 在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。
### JavaScript 变量的生存期
> JavaScript 变量的生命期从它们被声明的时间开始。
- 局部变量会在函数运行以后被删除。
- 全局变量会在页面关闭后被删除。

### 向未声明的 JavaScript 变量分配值
- 如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性。

- 这条语句：
carname="Volvo";将声明 window 的一个属性 carname。

> 非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除。
```html
var var1 = 1; // 不可配置全局属性
var2 = 2; // 没有使用 var 声明，可配置全局属性

console.log(this.var1); // 1
console.log(window.var1); // 1

delete var1; // false 无法删除
console.log(var1); //1

delete var2; 
console.log(delete var2); // true
console.log(var2); // 已经删除 报错变量未定义
```

### JavaScript 作用域
> 作用域是可访问变量的集合。
### JavaScript 作用域
1. 在 JavaScript 中, 对象和函数同样也是变量。
2. 在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。
3. JavaScript 函数作用域: 作用域在函数内修改。
### JavaScript 局部作用域
- 变量在函数内声明，变量为局部作用域。
- 局部变量：只能在函数内部访问。
```html
实例
// 此处不能调用 carName 变量(函数外)
function myFunction() {
    var carName = "Volvo";
    // 函数内可调用 carName 变量
}
```

