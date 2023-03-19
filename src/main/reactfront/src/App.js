import './App.css';

//0. React 엔진 - 데이터변경감지해서 UI그려주는
//1. 실행방식(index.html) -SPA
//2. JSX문법ß
//3. 바벨(ES5문법)
//(1) return시 하나의 태그로 감싸야함
//(2) 변수선언은 let또는 const로만 사용
//(3) if문 사용불가 - 삼항연산자 사용 (조건 ? 참 : 거짓)
//(4) 조건부 렌더링 (조건 && 참)
//(5) css디자인
 // - 내부에 적는 방법
// - 외부 파일에 적는 방법
// - 라이브러리 사용(부트스트랩, componet-styled
let a = 10;
const b = 20;

function App() {
  let c;

  const myStyle = {
  color: "red",
  };
  return (
      <div>
        <div style={myStyle}>안녕{a === 10 ? "10입니다" : "10이 아닙니다."}</div>
        <h1 className={"box-style"}>해당태그{b === 20 && "20입니다"}</h1>
      </div>
  );
}

export default App;
