var http = require("http");

const employees = require('./employee');
console.log("Lab 03 -  NodeJs");



//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {

            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return;
        }

        if (req.url === '/employee') {

            res.end(JSON.stringify(employees));
            return;
        }

        if (req.url === '/employee/names') {

            let names = employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort();
            res.end(JSON.stringify(names));
            return;
        }

        if (req.url === '/employee/totalsalary') {

            let totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
            res.end(JSON.stringify({ total_salary: totalSalary }));
            return;
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})