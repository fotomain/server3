import React from 'react'
// import nodemailer from 'nodemailer';

const App = (props) => {
  const list = props.data.map((user) => {
    return (
      <li>{user.name}</li>
    )
  })

                // let transporter = nodemailer.createTransport({
                //     service: "gmail",
                //     auth: {
                //
                //         user: 'foto888999@gmail.com',
                //         // process.env.WORD
                //         pass: 'rpezevwacplvxshd',
                //
                //     },
                // });

  return (
    <div>
      <h1 onClick={() => { console.log('hi') }}>
        This is SSR React!
      </h1>
      {list}

    
    </div>
  )
}

export default App
