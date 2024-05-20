import gql from 'graphql-tag';

export default gql`
  type Query {
    getMock(id: Int!): Mock
  }

  type Mock {
    name: String!
    age: Int!
    job: String
  }
`;
