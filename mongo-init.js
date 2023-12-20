/* eslint-disable prettier/prettier */
db.createUser(
    {
        user: "root",
        pwd: "123",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
);

db.users.insertOne({"email": "user@gmail.com", "password":"123", "name":"user", "roles": ["admin"]})