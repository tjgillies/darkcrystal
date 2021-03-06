import React from 'react';
import Websocket from 'react-websocket';
import ReactDOM from 'react-dom';





class PostContainer extends React.Component {  
  constructor(props){
    super(props)

    this.state = {posts: [
      {key: "1", img: "images/avatar.png", author: "Tyler", body: "Test", title: "test"},
      {key: "2", img: "images/avatar.png", author: "Other Tyler", body: "Another Test", title: "Hello world"},
      {key: "3", img: "images/avatar.png", author: "Other Tyler", body: "Another Test", title: "Hello world"},
      {key: "4", img: "images/avatar.png", author: "Other Tyler", body: "Another Test", title: "Hello world"},
      {key: "5", img: "images/avatar.png", author: "Other Tyler", body: "Another Test", title: "Hello world"},
    ]}
  }
  handleData(data) {
    data = JSON.parse(data)
    this.setState({posts: data})
  }
  render() {
    return (
      <div>
        <div className="posts">
      {this.state.posts.map(post =>  
        <div key={post.id} className="post">
          <div className="avatar"><img src={post.img}/></div>
          <div>{post.title}</div>
          <div>By {post.name}</div>
          <div>{post.body}</div>
        </div>)
      }
      </div>
      <Websocket url='ws://localhost:3000/' onMessage={this.handleData.bind(this)} 
              reconnect={true} debug={true}/>
      </div>
    );
  }
}

// export default App;

ReactDOM.render(
  <PostContainer/>,
  document.getElementById('posts')
)