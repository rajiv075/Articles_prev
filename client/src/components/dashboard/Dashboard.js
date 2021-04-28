import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import ArticleCard from "../../components/articlecard";
import Note from "./Note.js";
import notes from "./Notes.js";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <nav class="navbar navbar-dark white">
          <div class="form-inline my-2 my-lg-0 ml-auto">
            <button
              class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
              onClick={this.onLogoutClick}
            >
              Logout
            </button>
          </div>
        </nav>
        <div class="row">
          <div class="col-md-8">
            <div className="container">
              {notes.map((note) => (
                <ArticleCard title={note.about} link={note.link}>
                  <Note
                    author={note.author}
                    description={note.description}
                    date={note.date}
                    category={note.category}
                  />
                </ArticleCard>
              ))}
            </div>
          </div>
        </div>{" "}
        //row
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
