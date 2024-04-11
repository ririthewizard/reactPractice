import { useState } from "react";

export default function Home() {

  function ListItems({ints}) {
    return (
      <>
        {
          ints.map(id => {
            return (
              <li>{id}</li>
            )
          })
        }
      </>
    )
  }

  //const ints = [1, 2, 3];

  const[ints, setInts] = useState([1,2,3]);
  return (
    <ul>
      <ListItems ints={ints} />
    </ul>
  );
}
