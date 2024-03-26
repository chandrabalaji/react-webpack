import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState(0)
  // const [val, seval] = useState(0)
  console.log("hello worls")
  const name = 'ram'


  return (

    <div>
      <button onClick={() => setcount((val) => val - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setcount((val) => val + 1)}>+</button>
      {name}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum cumque
        sit vitae ducimus fugit accusantium ut perferendis culpa possimus
        consequatur ab perspiciatis maxime deserunt magni repellendus iste
        numquam doloremque enim nobis minus, impedit quidem. Totam praesentium
        esse blanditiis illo. Eaque tempora atque exercitationem reprehenderit
        totam blanditiis neque aliquam odio, vel aperiam ex modi illo deserunt!
        Facere fuga exercitationem velit illo laboriosam autem dolorum,
        inventore assumenda, est esse dignissimos cupiditate atque! Consectetur
        architecto, maiores vero libero a saepe nam. Officia veniam nostrum hic
        assumenda consequatur quae voluptatibus voluptas, voluptatum rerum dolor
        cumque. Deserunt unde voluptate nam? Sunt iusto numquam nihil
        temporibus!
      </p>
    </div>
  )
}

export default Counter
