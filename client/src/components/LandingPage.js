import React from 'react'
import testPhoto from './testphoto.png'

const LandingPage = () => {





  return (
    <div className='landingPage'>
        <div>
        <img 
        src = {testPhoto}
        style = {{
            height:'275px',
            borderRadius:'8px',
            boxShadow:'3px 3px 4px gray'
        }}
        />
        </div>
        <div style={{width:'300px'}}>
            <p style={{wordWrap:'break-word'}}>jfjsdafkldsjflkjsjjfjsdlkfjklsdjfkjsdfjsjfkjkjfkldjskfljskdljfksjfklklsadjfkljsaklfjksdjfkjdsklfjksljfkljsafkljsdklfjklsdjfkjsdkfljsdklfjklsdjfkljsfkljfskdljfklsdjklsdj</p>
        </div>
    </div>
  )
}

export default LandingPage