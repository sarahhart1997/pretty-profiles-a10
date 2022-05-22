function showEmployee = (data) => {
    ${employeesArr
        .filter(({ role }) => role ==='Employee')
        .map(({ name, id, email, role })) => {
        return `
    <!-- Card 1 Employee --> 
        <div class="person-card" style="width: 18rem; min-height: 12rem">
            <div class="card-header text-light bg-primary">
                <h4 class="card-title">${name}</h4>
                <p class="person-role">
                    Employee
                </p>
            </div> 
            <div class="card-body bg-light">
                <div class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                </div>
            </div>
        </div>
        `;
    })
    .join('')}
    
}

module.exports = createHtml;