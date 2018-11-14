import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, OperationVariables } from "react-apollo";
import { ApolloError } from "apollo-boost";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
    }
  }
`;

interface Data {
  loading: boolean;
  error: ApolloError | undefined;
  data: undefined;
}

class Launches extends Component<{}, Data> {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        <Query<{}, OperationVariables> query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return;
            <h4>Loading...</h4>;

            if (error) console.log(error, "error");
            console.log(data);

            return <h1>test</h1>;
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
