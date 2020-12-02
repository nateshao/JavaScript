### JavaScript 表单
> JavaScript 表单验证
- HTML 表单验证可以通过 JavaScript 来完成。

- 以下实例代码用于判断表单字段(fname)值是否存在， 如果不存在，就弹出信息，阻止表单提交：

```html
JavaScript 实例
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
以上 JavaScript 代码可以通过 HTML 代码来调用：
```

### HTML 表单实例
```html
<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
名字: <input type="text" name="fname">
<input type="submit" value="提交">
</form>
```

### JavaScript 表单验证
- JavaScript 可用来在数据被送往服务器前对 HTML 表单中的这些输入数据进行验证。
- 表单数据经常需要使用 JavaScript 来验证其正确性：
    - 验证表单数据是否为空？
    - 验证输入是否是一个正确的email地址？
    - 验证日期是否输入正确？
    - 验证表单输入内容是否为数字型？

### 必填（或必选）项目
- 下面的函数用来检查用户是否已填写表单中的必填（或必选）项目。假如必填或必选项为空，那么警告框会弹出，并且函数的返回值为 false，否则函数的返回值则为 true（意味着数据没有问题）：

```html
function validateForm()
{
  var x=document.forms["myForm"]["fname"].value;
  if (x==null || x=="")
  {
    alert("姓必须填写");
    return false;
  }
}
以上函数在 form 表单提交时被调用:
```
### E-mail 验证
- 下面的函数检查输入的数据是否符合电子邮件地址的基本语法。

- 意思就是说，输入的数据必须包含 @ 符号和点号(.)。同时，@ 不可以是邮件地址的首字符，并且 @ 之后需有至少一个点号：

```html
function validateForm(){
  var x=document.forms["myForm"]["email"].value;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    alert("不是一个有效的 e-mail 地址");
    return false;
  }
}
```
