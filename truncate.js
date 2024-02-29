var fs=require("fs");
var buf=Buffer.alloc(1024);
console.log("going to open an existing file");
fs.open('local.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file opend successfull!");
    console.log("going to truncate the file after 10 bytes");
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        console.log("file truncated succrssfully. ");
        console.log("going to read the same file");
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                console.log(err);
            }
            if(bytes>0){
                console.log(buf.slice(0,bytes).toString());
            }
            fs.close(fd,function(err){
                if(err){
                    console.log(err);
                }
                console.log("file closed successfully.");
            });
        });
    });
});