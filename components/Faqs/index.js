// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {clickedTab: []}

  clickedButtonToShow = id => {
    const {clickedTab} = this.state
    if (clickedTab.includes(id)) {
      const f = clickedTab.filter(e => e !== id)
      this.setState({clickedTab: f})
    } else {
      this.setState(prevState => ({clickedTab: [...prevState.clickedTab, id]}))
    }
  }

  render() {
    const {faqsList} = this.props
    const {clickedTab} = this.state

    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="title1">FAQs</h1>
          <ul className="list-cont">
            {faqsList.map(each => (
              <FaqItem
                item={each}
                key={each.id}
                isShow={clickedTab.includes(each.id)}
                clickedButtonToShow={this.clickedButtonToShow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
