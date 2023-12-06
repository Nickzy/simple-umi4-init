module.exports = {
  printWidth: 80, //换行的宽度，如果超过会进行换行，默认为80
  tabWidth: 2, //tab的空格宽度，默认为80
  useTabs: false, //缩进用tab还是空格，默认为false，表示用空格进行缩减
  singleQuote: false, //字符串是否使用单引号，JSX会忽略这个配置，默认为false，使用双引号
  semi: true, //行尾是否使用分号，默认为true
  trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  arrowParens: 'avoid', //箭头函数的单参数是否用括号包裹，有两个可选值"<always|avoid>"
  parser: 'babylon', //代码的解析引擎，默认为babylon，与babel相同。
}