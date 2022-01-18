function generateTeamPage(data) {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="../dist/style.css" />
    <title> My Team! </title>
    </head>

    <body> 
        <header> 
        <h1> Meet my team! </h1>
        </header>

        <main> ${generateTeamPage(data)} </main>
        <div class="cards">
        <div class="card" style="width: 18rem;">
        <div class="card-header"> ${Manager.name} <br />

            <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${Manager.id} </li>
            <li class="list-group-item"> Email: <span id="email"><a href="sendto:${Manager.email}"> ${Manager.email} </a> </span> </li>
            <li class="list-group-item"> Office Number: ${Manager.officeNum} </li>
            </ul>
        </div>
        </div>

        <div class="card" style="width: 18rem;">
        <div class="card-header"> ${Engineer.name} <br />

            <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${Engineer.id} </li>
            <li class="list-group-item"> Email: <span id="email"><a href="sendto:${Engineer.email}"> ${Engineer.email} </a> </span> </li>
            <li class="list-group-item"> Github: <a href="https://github.com/${Engineer.githubInput}">${Engineer.githubInput} </a> </li>
            </ul>
        </div>
        </div>

        <div class="card" style="width: 18rem;">
        <div class="card-header"> ${Intern.name} <br />

            <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${Intern.id} </li>
            <li class="list-group-item"> Email: <span id="email"><a href="sendto:${Intern.email}"> ${Intern.email} </a> </span> </li>
            <li class="list-group-item"> School: ${Intern.schoolInput} </li>
            </ul>
        </div>
        </div>
    </div>


    </body>
    </html>
    `;
};

module.exports = generateTeamPage;