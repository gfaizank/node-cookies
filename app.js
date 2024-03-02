const express=require('express')
const cookieParser=require('cookie-parser');

const app=express()
app.use(cookieParser())


app.get('/', (req, res)=>{
    res.send('Hello from Cookie Server')
})

app.get('/set-cookie', (req, res)=>{
    // res.setHeader('set-cookie', 'foo=bar')
    res.cookie("foo", "bar", {
        // maxAge: 5000
        // expires: new Date('4 March 2024')
        // httpOnly: true,
        secure: false, 
    })
    // res.cookie("fizz", "buzz")
    res.send("Cookies are set")
})

app.get('/get-cookie', (req, res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})

app.get('/del-cookie', (req, res)=>{
    res.clearCookie('fizz')
    res.send("Cookie has been deleted")
})

app.listen(3000, ()=>{
    console.log('Server is running on Port 3000')
})