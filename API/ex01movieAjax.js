let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240101';

document.querySelector('button').addEventListener('click', () => {
    console.log('button click');

    $.ajax({
        // 어떤 방식으로 통신할 건지
        type : 'get',
        // 어디랑 통신할 건지
        url : movieUrl,
        // 통신 성공 시 실행 로직
        success : (response) => {
            console.log(response.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
            let movieList = response.boxOfficeResult.dailyBoxOfficeList;
            let table = `
            <table>
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                </tr>
            `
            // for (let i = 0; i < movieList.length; i++) {
            //     table += `
            //     <tr>
            //         <td>${movieList[i].rank}</td>
            //         <td>${movieList[i].movieNm}</td>
            //         <td>${movieList[i].openDt}</td>
            //     </tr>
            //     `
            // }
            movieList.forEach((item) => {
                table += `
                <tr>
                    <td>${item.rank}</td>
                    <td>${item.movieNm}</td>
                    <td>${item.openDt}</td>
                </tr>
                `
            })
            table += `</table>`
            $('div').html(table);
        },
        // 통신 실패 시 실행 로직
        error : () => {
            alert('통신 실패!')
        }
    })
})