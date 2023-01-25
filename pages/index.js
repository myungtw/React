import { Counter } from "@/componets/Counter"  //js파일은 확장자 생략 가능
import { Counter2 } from "@/componets/Counter2"  //js파일은 확장자 생략 가능

export default function Home() {
  return (
    <>
      <h1>Counter</h1>
      {/* 컴포넌트 Count : 첫글자 대문자, ""사이는 무조건 문자열 */}
      <Counter down={true}></Counter>
    </>
  )
}
