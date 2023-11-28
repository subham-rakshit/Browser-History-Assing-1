import './index.css'

const BrowserHistoryItems = props => {
  const {historyItem, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onDeleteHistoryItem = () => {
    onDelete(id)
  }

  return (
    <li className="item-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-text-button-container">
        <div className="logo-text-container">
          <img src={logoUrl} alt="domain logo" className="items-logo" />
          <div className="domain-text-url-container">
            <p className="domain-text">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="button-container"
          onClick={onDeleteHistoryItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="dlt-btn"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistoryItems
