import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  state = {
    inputValue: "",
  };

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    this.props.addComment(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { comments } = this.props;
    const { inputValue } = this.state;
    return (
      <section className="Comment">
        <header>
          <span>댓글</span>
          <span>{comments?.length}</span>
        </header>
        <form>
          <img
            src="/images/community/userprofileimage.jpeg"
            alt={"userProfile"}
          />
          <input
            value={inputValue}
            onChange={this.updateInputValue}
            placeholder="칭찬과 격려의 댓글은 토니에게 큰 힘이 됩니다 :)"
          />
          <button
            disabled={inputValue.length === 0 ? true : false}
            onClick={this.addComment}
          >
            등록
          </button>
        </form>
        <section className="commentsList">
          {comments?.map(({ id, userProfileImage, userId, comment }) => {
            return (
              <section key={id} className="comments">
                <div className="column">
                  <img src={userProfileImage} alt="asd" />
                  <span className="userName">{userId}</span>
                  <span>{comment}</span>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    );
  }
}

export default Comment;
