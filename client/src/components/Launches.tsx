import React, { Component, Fragment, ReactNode } from "react";
import gql from "graphql-tag";
import { Query, OperationVariables, QueryProps } from "react-apollo";
import { ApolloError } from "apollo-boost";

import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
    }
  }
`;

export interface Data {
  loading: boolean;
  error: ApolloError | undefined;
  data: {} | undefined;
  key: string[];
}

export interface Props {
  launch: any;
}

class Launches extends Component<{}, Data, Props> {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1> <MissionKey />
        <Query<OperationVariables, QueryProps> query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;

            if (error) console.log(error, "error");

            return (
              <Fragment>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
