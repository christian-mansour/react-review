class Image extends React.Component {
  constructor(){
    super();
    this.state = { hidden: false };
  }
  _hideImage(){
    this.setState({ hidden: true });
  }

  render(){
    return (
      <div>
        <img src= { this.props.imageUrl } />
      </div>
    )
  }
}

class ImageButton extends React.Component {
  _handleClick(){
    this.props.hideImage();
  }

  render(){
    return (
      <div>
        <button onClick={ this._handleClick.bind(this) } >Hide Image</button>
      </div>
    )
  }
}


class Container extends React.Component {
  constructor(){
    super();
    this.state = {image: ["http://s2.quickmeme.com/img/c5/c50390c42a9e23922625c1f3c16b7f09ba8bc1481346045634d59fbd02a9831f.jpg"]};
  }

  render(){
    return (
      <div>
        <Image imageUrl={ this.state.image } />
        <ImageButton hideImage/>
      </div>
    )
  }
}




ReactDOM.render(<Container />, document.getElementById('app-container'));
