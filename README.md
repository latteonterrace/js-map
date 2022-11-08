# Array.prototype.map()

map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.


**구문**
```jsx
 arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

* currentValue - 처리할 현재 요소.
* index Optional - 처리할 현재 요소의 인덱스.
* array Optional - map()을 호출한 배열.
* thisArg Optional -callback을 실행할 때 this로 사용되는 값.


## 기본 사용
간단히 요소에 2를 곱한 값을 반환하는 콜백 함수를 만들어 배얼을 새로운 배열을 반환하는 코드를 작성해 보겠습니다. 

```jsx
    document.querySelector("#to-array").addEventListener('click', () => {
        const array1 = [1, 4, 9, 16];
        // pass a function to map
        const map1 = array1.map(x => x * 2);
        console.log(map1);
        // expected output: Array [2, 8, 18, 32]
    });
```

map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듭니다. callback 함수는 (undefined도 포함해서) 배열 값이 들어있는 인덱스에 대해서만 호출됩니다. 즉, 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않습니다.

다음과 같이 배열 자체를 사용할 수도 있습니다. 
```jsx
    document.querySelector("#to-array2").addEventListener('click', () => {
        // pass a function to map
        const map1 = [1, 4, 9, 16].map(x => x * 2);
        console.log(map1);
        // expected output: Array [2, 8, 18, 32]
    });
```

## 객체 사용 
객체를 사용하여 객체의 배열을 순회할 수도 있습니다. 
```jsx
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
```

## map 전달 인자들 

위 구문에 적은대로 콜백함수에는 다음 세가지가 전달 가능합니다. 
* currentValue - 처리할 현재 요소.
* index Optional - 처리할 현재 요소의 인덱스.
* array Optional - map()을 호출한 배열.


그리고 map( callback(...), this)와 같이 callback 함수 내에서 사용될 this를 전달할 수도 있습니다. 

```jsx
    document.querySelector("#map-args").addEventListener('click', () => {
        let arr = ["one", "two", "three", "four"];
        let result = arr.map((element, index, array) => {
            console.log("element:" + element);  // 순회할 때 각 요소
            console.log("index:" + index); // 순회할 때의 인덱스 
            console.log("array:" + array);  //arr 배열 자체 
            //console.log(this); // 이 구문은 오류 발생 
            return element;
        }, 100);
        console.log(result);
    });
```    

> this로 전달한 인자를 콜백함수에서 참조를 하면 오류가 발생합니다(아직 원인은 모릅니다).

