require('dotenv').config();
const { app } =  require('./app')
const PORT = process.env.MYSQL_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listenig on port ${PORT}`)
});
