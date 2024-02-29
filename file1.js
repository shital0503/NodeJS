var fs=require("fs");
console.log("going to get file info!");
fs.stat('file.txt',function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("got file successfully!");
    console.log("isFile?"+ stats.isFile());
    console.log("isDirctory ?"+
    stats.isDirectory());
});