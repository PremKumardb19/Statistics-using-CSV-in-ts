import { matchData } from "../MatchData";
import { Analyser } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyser{
   constructor(public teamName:string){}

   run(matches:matchData[]):string{
    let wins=0;
    for(let match of matches){
        if(match[1]==="Man United" && match[5]===MatchResult.HomeWin){
            wins++;
        }else if(match[2]==="Man United" && match[5]===MatchResult.AwayWIn){
            wins++;
        }
    }
    return `Team ${this.teamName} won ${wins} matches!!!`
   }
}