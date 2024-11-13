const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors())

app.get('/',(req,res)=>{
	setTimeout(()=>{
		res.send("Hello There")
	},4000)
})

app.listen(3000)