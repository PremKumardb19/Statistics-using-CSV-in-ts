import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";



// const csvFileReader=new CsvFileReader("football.csv")//since csvreader statisfies the DataReader interface we r creating the csvFilereader instance first
// const matchReader=new MatchReader(csvFileReader)
// matchReader.load()
// const summary=new Summary(new WinsAnalysis("Man United"),new ConsoleReport())
// const summary=new Summary(new WinsAnalysis("Man United"),new HtmlReport())
// summary.buildAndPrintReport(matchReader.matches)

const matchData=MatchReader.fromCsv("football.csv")
let summary=Summary.winsAnalysisWithHtmlReport("Man United")
matchData.load()
summary.buildAndPrintReport(matchData.matches)