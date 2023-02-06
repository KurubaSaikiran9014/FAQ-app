// Write your code here.
import './index.css'

const FaqItem = props => {
  const {item, isShow, clickedButtonToShow} = props
  const {id, questionText, answerText} = item
  const imageUrl = isShow
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

  const altText = isShow ? 'minus' : 'plus'

  const clickedButton = () => {
    clickedButtonToShow(id)
  }

  return (
    <li className="list-item">
      <div className="up-cont">
        <h1 className="title">{questionText}</h1>
        <button type="button" className="button" onClick={clickedButton}>
          <img src={imageUrl} alt={altText} />
        </button>
      </div>
      {isShow && <p className="desc">{answerText}</p>}
    </li>
  )
}
export default FaqItem
