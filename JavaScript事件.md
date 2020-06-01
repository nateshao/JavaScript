### JavaScript 事件
- HTML 事件是发生在 HTML 元素上的事情。
- 当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。
### HTML 事件
> HTML 事件可以是浏览器行为，也可以是用户行为。

- 以下是 HTML 事件的实例：
1. HTML 页面完成加载
2. HTML input 字段改变时
3. HTML 按钮被点击
```html
<button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
以上实例中，JavaScript 代码将修改 id="demo" 元素的内容。
在下一个实例中，代码将修改自身元素的内容 (使用 this.innerHTML):
<button onclick="this.innerHTML=Date()">现在的时间是?</button>

JavaScript代码通常是几行代码。比较常见的是通过事件属性来调用：
<button onclick="displayDate()">现在的时间是?</button>
```
```html
onchange	HTML 元素改变
onclick	    用户点击 HTML 元素
onmouseover	    用户在一个HTML元素上移动鼠标
onmouseout	    用户从一个HTML元素上移开鼠标
onkeydown	    用户按下键盘按键
onload	        浏览器已完成页面的加载
```

### JavaScript 可以做什么?
- 事件可以用于处理表单验证，用户输入，用户行为及浏览器动作:
1. 页面加载时触发事件
2. 页面关闭时触发事件
3. 用户点击按钮执行动作
4. 验证用户输入内容的合法性等等 ...
