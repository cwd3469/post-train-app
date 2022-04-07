//저장된 값에 타입 지정
let name: string = "주영최";
// 저장된 값에 타입([])지정과 안에 구성 요소의 타입( string ) 지정
let name2: string[] = ["jooyoung", "choi"];
//객체 타입 지정 ( {} ) 구성 속성의 타입 ( string ) 지정
let name3: { firstname: string } = { firstname: "choi" };
// 타입 속성의 ?를 사용해서 firstname이라는 속성이 있을수 도 있고 없을수 도 있다고 지정 한다.
let name4: { firstname?: string } = { firstname: "choi" };
// Union type 다양한 타입이 들어올수 있게 한다.
// string도 들어 올수 도 있고 number도 지정 할수 있다.
let name5: string | number = "주영 최";
let name6: number | string[] = 123123;

type Mytype = {
  name: string | number;
};
interface Mytype2 {
  type: string;
}
//함수 타입 지정 파라미터 타입 지정 (x:number), :number
function fucEvent(x: number): number {
  return x * 23;
}
//tuple 타입 예제 첫번째 자리는number, 두번째 자리는 boolean이 들어 가야한다.
type Member = [number, boolean];

//object에 타입지정해야할 속송이 너무 많으면
//예제 해석 : 글자로 된 모든 object속성의 타입은 string으로 타입이다.
type Member23 = {
  [key: string]: string;
};

let john: Member23 = { name: "choi" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let someValue: any = ["this is a string", "this is a string"];

let strLength: number = (<[]>someValue).length;

console.log(strLength);
