let express = require('express')
let cors = require('cors');
const { default: mongoose } = require('mongoose');
const PlayerRoute = require('./Routes/PlayerRoutes')

const app = express();

//DB Connection
mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://Logesh:logesh1999@mongomern1.w9i9kip.mongodb.net/SoccerDB?retryWrites=true&w=majority",
                    { useNewUrlParser: true, useUnifiedTopology: true}).then(
    require('log-timestamp'),console.log("DB Connection Success")
).catch( err=>{
    console.error("Error Connecting to DB :" + err);
}
)

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

//Test(Health)
app.get("/health",(req,res)=>{
    res.send("App is working")
})

//Main
app.use("/players",PlayerRoute)

//AppConnection
app.listen(2000,()=>{
    require('log-timestamp');console.log("App connection successful -> http://localhost:2000/health")
});