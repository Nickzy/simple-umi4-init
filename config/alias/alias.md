## alias
- 类型：Record<string, string>
- 默认值：{}
配置别名，对 import 语句的 source 做映射。
比如：
```js
{
  alias: {
    foo: '/tmp/to/foo',
  }
}

```
然后代码里 import 'foo' 实际上会 import '/tmp/to/foo'。

有几个 Tip。

1、alias 的值最好用绝对路径，尤其是指向依赖时，记得加 require.resolve，比如
```js
// ⛔
{
  alias: {
    foo: 'foo',
  }
}
 
// ✅
{
  alias: {
    foo: require.resolve('foo'),
  }
}

```
2、如果不需要子路径也被映射，记得加 $ 后缀，比如

```js
// import 'foo/bar' 会被映射到 import '/tmp/to/foo/bar'
{
  alias: {
    foo: '/tmp/to/foo',
  }
}
 
// import 'foo/bar' 还是 import 'foo/bar'，不会被修改
{
  alias: {
    foo$: '/tmp/to/foo',
  }
}

```