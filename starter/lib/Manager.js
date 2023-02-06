// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    get Role() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.getOfficeNumber;
    }
}
moduele.exports = Manager;