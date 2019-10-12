import React from "react";
import { connect } from "react-redux";

import { deleteAll } from "../../redux/actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};
function mapDispatchToProps(dispatch) {
  return {
    deleteAll: () => dispatch(deleteAll())
  };
}
class ConnectedRouteAcademic extends React.Component {

  deleteAll =()=>{
    // console.log("Header Navlink clicked");
    this.props.deleteAll();
  }

  render() {
    return (
      <div>
        <h2>Academic **redux測試</h2>
        <ul className="list-group list-group-flush">
          {Object.keys(this.props.articles).map(el => (
            <li className="list-group-item" key={el}>
              {el}
            </li>
          ))}
        </ul>
        <button onClick={this.deleteAll}>一鍵刪除</button>
      </div>
    );
  }
}

const RouteAcademic = connect(mapStateToProps,mapDispatchToProps)(ConnectedRouteAcademic); //
export default RouteAcademic;
