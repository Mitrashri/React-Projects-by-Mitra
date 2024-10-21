const Notification = props => {
  const {message, icon, style} = props
  const classname = `btn btn-${style}`
  return (
    <div className='button'>
      <button className={classname}>
        <img src={icon} className='icon' />
        <p>{message}</p>
      </button>
    </div>
  )
}

const Element = () => (
  <div className='buttons'>
    <h1>Notifications</h1>
    <Notification
      message='Information Message'
      icon='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      style='primary'
    />
    <Notification
      message='Success Message'
      icon='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      style='success'
    />
    <Notification
      message='Warning Message'
      icon='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      style='warning'
    />
    <Notification
      message='Error Message'
      icon='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      style='danger'
    />
  </div>
)

ReactDOM.render(<Element />, document.getElementById('root'))
