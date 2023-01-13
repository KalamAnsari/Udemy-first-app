import React from 'react'

const style={color:"red"}

function Navbar() {
  // let v="gmail"
  // let url=`https://${v}.com`;

  return <>
  {/* <h1 style={style}>hello</h1>
  <h3 style={{color:"blue"}}>this is react</h3> */}
<ul class="nav bg-dark ">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="https://github.com">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://facebook.com">Link</a>
  </li>
  <li class="nav-item">
    {/* <a class="nav-link" href={url}>gmail</a> */}
    <a class="nav-link" href="#">gmail</a>

  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
    </>
  
}

export default Navbar