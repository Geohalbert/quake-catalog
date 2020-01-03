import React from "react";
import PropTypes from 'prop-types';
import { DeleteQuake, UpdateQuake } from "./index.js";
import styled from "styled-components";
import ReactTable from "react-table";

import "react-table/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const QuakeList = props => {
  const columns = [
    {
      Header: "ID",
      accessor: "_id",
      filterable: true
    },
    {
      Header: "Name",
      accessor: "name",
      filterable: true
    },
    {
      Header: "Mag",
      accessor: "mag",
      filterable: true
    },

    {
      Header: "",
      accessor: "",
      Cell: function(props) {
        return (
          <span>
            <DeleteQuake id={props.original._id} />
          </span>
        );
      }
    },
    {
      Header: "",
      accessor: "",
      Cell: function(props) {
        return (
          <span>
            <UpdateQuake id={props.original._id} />
          </span>
        );
      }
    }
  ];

  let showTable = true;
  if (!props.quakes) {
    showTable = false;
  }
  return (
    <Wrapper>
      {showTable && (
        <ReactTable
          data={props.quakes}
          columns={columns}
          loading={props.isLoading}
          defaultPageSize={50}
          showPageSizeOptions={true}
          minRows={0}
        />
      )}
    </Wrapper>
  );
};

QuakeList.propTypes = {
  quakes: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default QuakeList;
