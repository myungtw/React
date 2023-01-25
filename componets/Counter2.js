export function Counter2({ up, down }) {
  return <>
    0
    {up ? <input type="button" value="+"></input> : null}
    {down ? <input type="button" value="-"></input> : null}
  </>;
}
