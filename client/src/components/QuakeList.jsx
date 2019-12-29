import React from "react";
import { DeleteQuake, UpdateQuake } from "./index.js";
import styled from "styled-components";

import "react-table/react-table.css";

import ReactTable from "react-table";
const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;


class QuakeList extends React.Component {
  
  render() {
    const { quakes, isLoading } = this.props;

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
    if (!quakes.length) {
      showTable = false;
    }

    return (
      <Wrapper>
          <div>Hello</div>
        {showTable && (
            
          <ReactTable
            data={quakes}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    );
  }
}

export default QuakeList;
