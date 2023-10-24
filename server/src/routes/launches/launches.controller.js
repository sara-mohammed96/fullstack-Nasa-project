const { 
    httpGetAllLaunches,
    scheduleNewLaunch,
 } = require('../../models/launches.model');


async function httpGetAllLaunches(req, res) {
    return res.status(200).json(await getAllLaunches())
}

async function httpAddNewLaunches(req, res) {
  const launch =  req.body;

if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
    return res.status(400).json({
        error: 'missing required launch property'
    });
}

  launch.launchDate = new Date(launch.launchDate);
 if( isNaN(launch.launchDate)){
    return re.status(400).json({
        error: 'Invalid launch date',
    });
 }
await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res){
    const launchId = Number(re.params.id);

    //if launch doesnt exist 
    if(!existsLaunchWithId(launchId)){
    return res.status(404).json({
        error: 'Launch not found'
    })
    }
    const aborted = abortLaunchById(launchId)
    return res.status(200).json(aborted)
}

module.exports = { 
    httpGetAllLaunches,
    httpAddNewLaunches,
    httpAbortLaunch,
}