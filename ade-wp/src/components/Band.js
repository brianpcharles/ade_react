import React, { Component } from 'react';

class Band extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
  }
  componentDidMount() {
    let dataURL = "http://scotchbox.local/wp-json/wp/v2/members?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          members: res
        })
      })
  }
  render() {
    let members = this.state.members.map((member, index) => {
      return <div key={index}>
      <p><strong>Name:</strong> {member.title.rendered}</p>
      <p><strong>Instrument:</strong> {member.acf.instrument}</p>
      <div><strong>Biography:</strong><div dangerouslySetInnerHTML={ {__html: member.acf.bio} } /></div>
      </div>
    });
    return (
      <div>
        <h2>Band Members</h2>
        {members}
      </div>
    )
  }
}

export default Band;
