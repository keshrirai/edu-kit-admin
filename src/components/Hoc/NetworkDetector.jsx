import React, { Component } from 'react';

export default function temp(ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('https://www.google.com/', {
              mode: 'no-cors',
              })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing)
              });
            }).catch(() => this.setState({ isDisconnected: true }) )
          }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    }

    render() {
      const { isDisconnected } = this.state;
      // console.log("isDisconnected  ",isDisconnected);
      return (
        <div style={{backgroundColor:"red"}} className='h-10 w-full'>
          { isDisconnected && (<div className=" bg-red-500">
              <p className="flex justify-center items-center  w-full  text-black text-bold ">No Internet Connectionn</p>
            </div>)
          }
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}