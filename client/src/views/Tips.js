import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TableTemplate from "templates/TableTemplate";
import { connect } from "react-redux";
import Moment from "react-moment";
import TipCard from "components/molecules/TipCard/TipCard";
import ThreadsTable from "templates/ThreadsTable";
import UserPageTemplate from "../templates/UserPageTemplate";
import { getTips } from "../actions/tip";
import store from "../store/store";
const Tips = ({ tips, match }) => {
  return (
    <TableTemplate>
      <tbody>
        {/* {tips
              .filter(tip => tip.category === match.params.id)
              .map((tip, id) => {
                return <TipCard tip={tip} key={id} />;
              })} */}
      </tbody>
    </TableTemplate>
  );
};
const mapStateToProps = ({ tips }) => ({ tips });

Tips.propTypes = {
  tips: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Tips);
