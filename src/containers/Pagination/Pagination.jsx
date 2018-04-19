import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageSelector from '../../components/PageSelector';

class Pagination extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const total_pages = this.props['total_pages'];
    console.log(typeof total_pages);
    const Select = () => {
      const res = [];
      if (total_pages > 0) {
        for (let i = 1; i < total_pages; i++) {
          res.push(<PageSelector key={i} number={i} />);
        }
      } else {
        return <div>sdsd</div>;
      }

      return res;
    };

    return (
      <div>
        <Select />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    total_pages: state.total_pages,
  };
}

export default connect(mapStateToProps)(Pagination);
