import React, { PureComponent } from 'react'
/**
 * state
 * props
 *
 */

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}
class Ddemo02 extends PureComponent<IProps, IState> {
  state = {
    message: 'Hello React',
    counter: 100
  }
  // constructor(props: IProps) {
  //   super(props)
  //   this.state = {
  //     message: 'Hello React',
  //     counter: 100
  //   }
  // }

  render(): React.ReactNode {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>{this.state.message}</div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}

export default Ddemo02
