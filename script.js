

window.addEventListener('load', () => { 

    // 새로운 배열 만들기
    document.querySelector("#to-array").addEventListener('click', () => {
        const array1 = [1, 4, 9, 16];
        // pass a function to map
        const map1 = array1.map(x => x * 2);
        console.log(map1);
        // expected output: Array [2, 8, 18, 32]
    });
    document.querySelector("#to-array2").addEventListener('click', () => {
        // pass a function to map
        const map1 = [1, 4, 9, 16].map(x => x * 2);
        console.log(map1);
        // expected output: Array [2, 8, 18, 32]
    });

    document.querySelector("#use-object").addEventListener('click', () => {
        let users = [
            { name: "Hong", email:"hong@gmail.com"},
            { name: "Park", email:"park@gmail.com"},
            { name: "Min", email:"min@gmail.com"},
        ];
        let userInfos = users.map( (item) => {
            return item.name + "//" + item.email;
        })
        console.log(userInfos); //["Hong//hong@gmail.com","Park//park@gmail.com","Min//min@gmail.com"]
    });

    document.querySelector("#map-args").addEventListener('click', () => {


        let arr = ["one", "two", "three", "four"];
        let result = arr.map((element, index, array) => {
            console.log("element:" + element);  // 순회할 때 각 요소
            console.log("index:" + index); // 순회할 때의 인덱스 
            console.log("array:" + array);  //arr 배열 자체 
            console.log(this); // 이 구문은 오류 발생 
            return element;
        }, 100);
        console.log(result);
    });

    

});