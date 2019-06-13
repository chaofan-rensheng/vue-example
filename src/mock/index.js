const Mock = require('mockjs')
const utils = require('./utils')

module.exports = function(app){
//监听http请求
app.get('/api/tableList', function (rep, res) {
    //每次响应请求时读取mock data的json文件
    //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    var json = utils.getJsonFile('./tableList.json');
    //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
});
}