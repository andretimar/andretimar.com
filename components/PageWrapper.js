import React from 'react';
import WPAPI from 'wpapi';
import Config from '../config';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const [childProps] = await Promise.all([Comp.getInitialProps(args)]);

      return {
        ...(Comp.getInitialProps ? childProps : null),
      };
    }

    render() {
      return <Comp {...this.props} />;
    }
  };

export default PageWrapper;
