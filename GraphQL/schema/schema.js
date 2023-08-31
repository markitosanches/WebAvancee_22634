const { buildSchema } = require("graphql")
//schema
const schema = buildSchema(`
    type Query {
        user:User
    }
    type User {
        name: String,
        age: Int
    }
`)

//resolver
const root = {
    user: () => {
        return {name : "Jane", age: 24}
    }
}

module.exports = { schema, root}

