import Mock from 'mockjs';

export default{
    mockData () {
        Mock.mock('/api/user', {
            "code": "000",
            "datas": {
                "name": "@cname", // 内容：npm安装后 mockjs/src/mock/random/xxx.js
                "area": "@province(true)",
                "identity": "超级管理员"
            }
        });
        Mock.mock('/api/getHomeEvent1111',{
            "code": "sucess",
            "datas|5-20": [
                {
                  "date": '@date("yyyy-MM-dd")',
                  "name": "@cname",
                  "address": "@county(true)"
                }
            ]
        });
        Mock.mock('/api/getHomeEvent',{
            "code": "sucess",
            "datas|5-20": [
                {
                  "nid": '0398515655',
                  "theme": "writer's choice",
                  "user": "@cname",
                  "price": "0.00",
                  "forprice": "$90",
                  "state": "1",
                  "paystate": "1",
                  "allotstate": "1",
                  "enddate": '@date("yyyy-MM-dd")',
                  "startdate": '@date("yyyy-MM-dd")'
                }
            ]
        });
    }
}