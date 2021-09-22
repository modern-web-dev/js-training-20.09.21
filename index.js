class Employee {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class EmployeeService {
    async getOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // reject(new Error('Server not available'));
                resolve(new Employee(id, 'John', 'Smith'));
            }, 2000);
        })
        // return fetch(`employees/${id}`).then(response => response.json());
    }
}

class EmployeeController {
    constructor(employeeId, employees) {
        this.employeeId = employeeId;
        this.employees = employees;
        this.firstNameElement = document.getElementById('firstName');
        this.lastNameElement = document.getElementById('lastName');
        if (!this.firstNameElement || !this.lastNameElement) {
            throw new Error('Wrong template!!');
        }
    }

    async start() {
        try {
            const employee = await this.employees.getOne(this.employeeId);
            this.firstNameElement.value = employee.firstName;
            this.lastNameElement.value = employee.lastName;
        } catch (err) {
            console.error(err);
        }
        console.log('Starting controller finished');
    }
}

const employees = new EmployeeService();

new EmployeeController(1234, employees).start();
