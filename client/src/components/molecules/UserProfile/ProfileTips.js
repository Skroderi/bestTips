import React, { Fragment } from "react";
import PropTypes from "prop-types";
import TableTemplate from "../../../templates/TableTemplate";
import ThreadsTable from "../../../templates/ThreadsTable";
import TipCard from "../TipCard/TipCard";

function ProfileTips({ tips, userName }) {
  return (
    <Fragment>
      <div>
        <h2>Current</h2>
        <TableTemplate>
          <tbody>
            <ThreadsTable />
            {tips.current
              .filter(tip => tip.author === userName && tip.current === true)
              .map((tip, id) => {
                return <TipCard tip={tip} key={id} />;
              })}
          </tbody>
        </TableTemplate>
      </div>

      <div>
        <h2>History</h2>
        <TableTemplate>
          <tbody>
            <ThreadsTable />
            {tips.current
              .filter(tip => tip.author === userName && tip.current === false)
              .map((tip, id) => {
                return <TipCard tip={tip} key={id} />;
              })}
          </tbody>
        </TableTemplate>
      </div>
    </Fragment>
  );
}
ProfileTips.propTypes = {
  tips: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired
};

export default ProfileTips;
