//Create Queue
const queue = [];

function areJobsQueued(){
    if ( queue.length > 0 ){ return true; }
    else { return false };
}

function addToQueue( strJson ){
    queue.push(strJson);
}

function getJobFromQueue(){
    return queue.shift();
}

function executeAPICall(){

}

areJobsQueued();