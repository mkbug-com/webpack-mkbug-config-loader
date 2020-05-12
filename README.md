# webpack-mkbug-config-loader
A Webpack loader for config parse!

# Why we need it
通常，我们做项目的时候，至少需要3套环境：开发，测试，生成。这期间经常会有大量的配置信息以及常量信息。会随着不同的环境而变化。如何管理这些随着不同环境变化的变量成了FE同学的难题。

webpack-mkbug-config-loader可以自动完成conf文件的解析，并且可以根据NODE_ENV自动合并不同环境下的配置文件。使用起来非常方便

# 如何使用
```sh
  npm i -save-dev webpack-mkbug-config-loader
```

将loader配置到webpack中
```
  module: {
    rules: [
      {
        test: /\.conf$/,
        loader: 'webpack-mkbug-config-loader',
        exclude: /node_modules/
      }
    ]
  }
```

# 例子
```
  // test.conf
  name=test
  title="hello world"

  // test.dev.conf
  name=dev

  // test.prod.conf

  // process.env.NODE_ENV=""
  import conf from './config/test.conf'
  console.log(conf) // { "name": "test, "title": "hello wrold" }

  // process.env.NODE_ENV="dev"
  import conf from './config/test.conf'
  console.log(conf) // { "name": "dev, "title": "hello wrold" }

  // process.env.NODE_ENV="prod"
  import conf from './config/test.conf'
  console.log(conf) // { "name": "prod, "title": "hello wrold" }
```