const express = require('express')
const app = express()

const { application } = require('express')
const { graphqlHTTP } = require('express-graphql')
const { schema, root } = require('./schema/schema')
const { graphql } = require('graphql')

app.use(
    "/graphql", graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
)

graphql(schema, '{ user {name, age} }', root).then((response) =>{
    console.log(JSON.stringify(response.data))
})

app.listen(3000, () => console.log('App is running...'))

