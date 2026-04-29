import { SearchService } from "./service/search_service";
import { ReportService } from "./service/report_service";

async function main(): Promise<void>{
    const searchService1 = new SearchService();
    const report_service1 = new ReportService(searchService1);
    
    report_service1.exihibitReport(1);
    return;
}
main();