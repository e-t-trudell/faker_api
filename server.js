const {faker} = require ('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newFake;
};
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newReal= {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        address: faker.address.city(),
        address: faker.address.state(),
        address: faker.address.zipCode(),
        address: faker.address.country()
    };
    return newReal;
};
const newRealCompany = createCompany();
console.log(newRealCompany);
const userCompany = [newFakeUser,newRealCompany]
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});
app.get("/api/companies/new", (req, res) => {
    res.json( newRealCompany );
});
// To create a route that gives both a new user and a new company you need to create a new const and set it = to an array of the two consts (user, company)
app.get("/api/user/company", (req, res) => {
    res.json( userCompany );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );