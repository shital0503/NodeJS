var fs=require("fs");
console.log("going to open file");
fs.open('abc.txt','r+',function(err,fs){
    if(err){
        return console.error(err);
    }
    console.log("fille opened successfully!");
});