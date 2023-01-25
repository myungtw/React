import React, {useState} from 'react'

//지역변수를 변경해도 컴포넌트가 다시 렌더링하지 않음
//hook을 이용하여 다시 렌더링

export function Counter({down}) {
  // let countState = useState(10);
  // console.log('countState', countState);  //첫번째 현재값, 두번째 함수
  // let count = countState[0];    //현재값
  // let setCount = countState[1]; //함수
  let [count, setCount] = useState(10); //배열은 []

  function upHandler() {
    //count = count + 1 안됨
    setCount(count + 1)
  }

  return <div>
    {count}
    <input type="button" value="+" onClick={upHandler}></input>
    {down ? <input type="button" value="-"></input> : null}
  </div>;
}
