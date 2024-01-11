let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101';

document.querySelector('button')
.addEventListener('click', ()=>{
    console.log('fetch click');
    fetch(movieUrl)
    .then(res=>res.json())
    .then((data)=>{
        // 성공
        console.log(data);
    })
    .catch(error=>console.log(error))
})