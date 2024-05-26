const url = `/api/student/findAll?appkey=demo13_1545210570249`;
fetch(url).then(resp => resp.json()).then(resp => {
    console.log(resp)
});



/* 

 因为页面的 webpack-dev-server 服务器下,所以请求时,会自动加上域名等

*/