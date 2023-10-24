const http = require('http')
const mongoose =require('mongoose');
const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.module');

const PORT = process.env.PORT || 8000;

const MONGO_URL ='mongodb+srv://saraworkm:<WLoZVmn6zE91ZEQ4>@cluster1.j1z1zzu.mongodb.net/?retryWrites=true&w=majority'
const server = http.createServer(app);

async function starServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
    await loadLaunchData();

server.listen(PORT, () => {
console.log(`Listening on port ${PORT}...`)
});
}
starServer();
