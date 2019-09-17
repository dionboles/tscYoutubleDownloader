import {createWriteStream} from 'fs';
import * as youtube from 'youtube-dl';
class getVideo{
    private url : string; 
    private name : string;
    constructor(url,filename){
        this.url = url
        this.name = filename
    }
    
   public getName() : string{
     return this.name;
   }
   
   public urlName() : string{
       return this.url
   }
   public startDownload(){
       youtube(this.urlName(), ['--format=18'],{ cwd: __dirname }).on('info',(info)=> {
            console.log('Download started');
            console.log('filename: ' + info._filename);
            console.log('size: ' + info.size);
       }).pipe(createWriteStream(this.getName()));
    }
}

export default getVideo;