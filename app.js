const express = require('express');
const app = express();

app.use(express.static('public'));

// 第一个参数是视图模板（固定的，不能修改）， 第二个参数是视图模板所在的位置, 默认express框架把views文件夹当成视图文件的位置。
app.set('views', 'views');

// 需要设置视图模板引擎，让他去解析views文件中的.html文件。
// 需要安装视图模板引擎：npm install ejs --save
// 设置视图引擎
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')


app.use(require('./router/order.js'))
// 理解时在接口前加一个前缀。
app.use("/api", require('./router/product.js'))

app.listen(7000, function(){
    console.log("服务器已启动，请访问：http://localhost:7000")
})
