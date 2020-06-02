### JavaScript if...else 语句
> 条件语句用于基于不同的条件来执行不同的动作。

### 条件语句
- 通常在写代码时，您总是需要为不同的决定来执行不同的动作。您可以在代码中使用条件语句来完成该任务。

> 在 JavaScript 中，我们可使用以下条件语句：
```html
if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
switch 语句 - 使用该语句来选择多个代码块之一来执行

```


### JavaScript switch 语句
> switch 语句用于基于不同的条件来执行不同的动作。

### JavaScript switch 语句
> 请使用 switch 语句来选择要执行的多个代码块之一。

- 语法
```html
switch(n)
{
    case 1:
        执行代码块 1
        break;
    case 2:
        执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}
```
- 工作原理：
    1. 首先设置表达式 n（通常是一个变量）。
    2. 随后表达式的值会与结构中的每个 case 的值做比较。
    3. 如果存在匹配，则与该 case 关联的代码块会被执行。
    4. 请使用 break 来阻止代码自动地向下一个 case 运行。


> 实例:显示今天的星期名称。请注意 Sunday=0, Monday=1, Tuesday=2, 等等：
```html
var d=new Date().getDay(); 
switch (d) 
{ 
  case 0:x="今天是星期日"; 
  break; 
  case 1:x="今天是星期一"; 
  break; 
  case 2:x="今天是星期二"; 
  break; 
  case 3:x="今天是星期三"; 
  break; 
  case 4:x="今天是星期四"; 
  break; 
  case 5:x="今天是星期五"; 
  break; 
  case 6:x="今天是星期六"; 
  break; 
}
x 的运行结果：

今天是星期二
```
### default 关键词
> 请使用 default 关键词来规定匹配不存在时做的事情：
```html
实例
如果今天不是星期六或星期日，则会输出默认的消息：

var d=new Date().getDay();
switch (d)
{
    case 6:x="今天是星期六";
    break;
    case 0:x="今天是星期日";
    break;
    default:
    x="期待周末";
}
document.getElementById("demo").innerHTML=x;
x 的运行结果：

期待周末
```


