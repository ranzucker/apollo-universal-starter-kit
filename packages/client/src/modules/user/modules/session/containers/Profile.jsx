// React
import React from 'react';

// Apollo
import { graphql, compose } from 'react-apollo';

// Components
import ProfileView from '../../../common/components/ProfileView';

import CURRENT_USER_QUERY from '../../../common/graphql/CurrentUserQuery.graphql';

class Profile extends React.Component {
  render() {
    return <ProfileView {...this.props} />;
  }
}

export default compose(
  graphql(CURRENT_USER_QUERY, {
    options: { fetchPolicy: 'network-only' },
    props({ data: { loading, error, currentUser } }) {
      if (error) throw new Error(error);
      return { loading, currentUser };
    }
  })
)(Profile);