const fs = require("fs");
const path = require("path");
const { merge } = require("mochawesome-merge"); // Ensure this is the correct import
const generator = require("mochawesome-report-generator");

async function generateReport() {
    try {
        // Specify the directory where mochawesome reports are located
        const reportDir = path.join(__dirname, "cypress/reports");
        // Merge the report files
        const mergedReports = await merge({
            files: [`${reportDir}/*.json`], // Adjust the pattern if necessary
        });
        // Generate the HTML report
        await generator.create(mergedReports, {
            reportDir: reportDir,
            overwrite: true,
        });
        console.log("Report generated successfully!");
    } catch (error) {
        console.error("Error generating report:", error);
    }
}

generateReport();
