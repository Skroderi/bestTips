import React, { Fragment } from "react";
import PropTypes from "prop-types";
import TipCard from "components/molecules/TipCard/TipCard";

const History = ({ tips, category }) => {
  return (
    <Fragment>
      {category === "all" ? (
        <Fragment>
          {tips.current
            .filter(tip => tip.current === false)
            .map((tip, id) => {
              return <TipCard tip={tip} key={id} />;
            })}
        </Fragment>
      ) : (
        <Fragment>
          {tips.current
            .filter(tip => tip.category === category && tip.current === false)
            .map((tip, id) => {
              return <TipCard tip={tip} key={id} />;
            })}
        </Fragment>
      )}
    </Fragment>
  );
};

History.propTypes = {
  tips: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired
};

export default History;
