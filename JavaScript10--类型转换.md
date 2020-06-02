### JavaScript 类型转换
> Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。

### JavaScript 数据类型
> 在 JavaScript 中有 6 种不同的数据类型
- string
- number
- boolean
- object
- function
- symbol
> 3 种对象类型：
- Object
- Date
- Array
> 2 个不包含任何值的数据类型：
- null
- undefined
### typeof 操作符
> 使用 typeof 操作符来查看 JavaScript 变量的数据类型。
```html
typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
typeof null                   // 返回 object

NaN 的数据类型是 number
数组(Array)的数据类型是 object
日期(Date)的数据类型为 object
null 的数据类型是 object
未定义变量的数据类型为 undefined
```
- 如果对象是 JavaScript Array 或 JavaScript Date ，我们就无法通过 typeof 来判断他们的类型，因为都是 返回 object。

### JavaScript 类型转换
- JavaScript 变量可以转换为新变量或其他数据类型：
    - 通过使用 JavaScript 函数
    - 通过 JavaScript 自身自动转换

### 将数字转换为字符串
> 全局方法 String() 可以将数字转换为字符串。
该方法可用于任何类型的数字，字母，变量，表达式：
```html
String(x)         // 将变量 x 转换为字符串并返回
String(123)       // 将数字 123 转换为字符串并返回
String(100 + 23)  // 将数字表达式转换为字符串并返回
```


### Number 方法 toString() 也是有同样的效果。
```html
x.toString()
(123).toString()
(100 + 23).toString()
```

