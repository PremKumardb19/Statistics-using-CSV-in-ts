import { matchData } from "./MatchData";
import { HtmlReport } from "./ReportTargets/HtmlReport";
import { WinsAnalysis } from "./Analyzer/WInsAnalysis";
export interface Analyser{
   run(matches:matchData[]):string
}

export interface OutputTarget{
    print(report:string):void
}

export class Summary{
    static winsAnalysisWithHtmlReport(team:string){
        return new Summary(new WinsAnalysis(team),new HtmlReport())
    }
    constructor(public analyzer:Analyser,public outputTarget:OutputTarget){} 

    buildAndPrintReport(matches:matchData[]):void{
        const output=this.analyzer.run(matches)
        this.outputTarget.print(output)
    }

}

