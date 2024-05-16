const express=require('express');
const bodyParser=require('body-parser');
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const bookRoutes=require('./routes/bookroutes')

dotEnv.config()
const app = express();
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);

mongoose.connect(process.env.Mongo_URL).then(function(connection){
    console.log(`Mongodb connection successfully`)
}).catch(function(error){
    console.log(`Mongodb connection error: ${error}`)
})
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});