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

        {/*<h1 onClick={() => {*/}

        {/*    console.log('=== Send e-mail test')*/}

        {/*        transporter.verify((err, success) => {*/}
        {/*            if (err)*/}
        {/*            {*/}
        {/*                console.log("=== err 0505!!!")*/}
        {/*                console.log(err)*/}
        {/*            }*/}
        {/*            else*/}
        {/*            {*/}
        {/*                console.log(`=== Server is ready to take messages: ${success} ===`);*/}
        {/*            }*/}
        {/*        });*/}


        {/*        let mailOptions = {*/}
        {/*            from: "test111@gmail.com",*/}
        {/*            to: "foto777999@gmail.com",*/}
        {/*            subject: "Nodemailer API",*/}
        {/*            text: "Hi from your nodemailer API",*/}
        {/*        };*/}

        {/*            console.log("=== transporter.sendMail")*/}
        {/*            transporter.sendMail(mailOptions, function (err, data) {*/}
        {/*                if (err) {*/}
        {/*                    console.log("Error " + err);*/}
        {/*                } else {*/}
        {/*                    console.log("=== Email sent successfully");*/}
        {/*                    // res.json({ status: "Email sent" });*/}
        {/*                }*/}
        {/*            });*/}


        {/*}}>*/}
        {/*    Send e-mail test!*/}
        {/*</h1>*/}

    </div>
  )
}

export default App
