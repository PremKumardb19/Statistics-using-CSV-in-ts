import { dateStringToDate } from "./utils"
import { MatchResult } from "./MatchResult"
import { matchData } from "./MatchData"
import { CsvFileReader } from "./CsvFIleReader"

interface DataReader{
    read():void,
    data:string[][]
}

export class MatchReader{
    static fromCsv(fileName:string){
        return new MatchReader(new CsvFileReader(fileName))
    }

    matches:matchData[]=[]
    
    constructor(public reader:DataReader){}
    
    load():void{
        this.reader.read()
        this.matches=this.reader.data.map((elt:string[]):matchData=>{
            return [
             dateStringToDate(elt[0]),
             elt[1],
             elt[2],
             parseInt(elt[3]),
             parseInt(elt[4]),
             elt[5] as MatchResult,//type assertion this tells ts that the elt[5] will definitely be in MatchResult Enum
             elt[6]
            ]
         })
    }
    
    

}