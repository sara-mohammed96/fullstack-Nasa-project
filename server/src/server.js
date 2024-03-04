const http = require('http')
const mongoose =require('mongoose');
const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL ='mongodb+srv://saraworkm:<7iigY522hHUK1rUe>@cluster1.j1z1zzu.mongodb.net/nasaproject?retryWrites=true&w=majority'
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
