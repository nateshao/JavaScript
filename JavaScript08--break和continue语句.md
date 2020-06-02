### JavaScript break 和 continue 语句
- break 语句用于跳出循环。
- continue 用于跳过循环中的一个迭代。

### break 语句
- break 语句可用于跳出循环。
- continue 语句跳出循环后，会继续执行该循环之后的代码（如果有的话）：
```html
实例
for (i=0;i<10;i++)
{
    if (i==3)
    {
        break;
    }
    x=x + "The number is " + i + "<br>";
}
```

