import React from 'react'
import classNames from 'classnames'
import DocumentTitle from 'react-document-title'

export default class Index extends React.Component {
  constructor (props) {
    super(props)

    this._handleApply = this._handleApply.bind(this)

    this.state = {
      sending: false,
      sent: false,
    }
  }

  _handleApply (e) {
    e.preventDefault()

    this.setState({
      sending: true,
    })

    setTimeout(() => {
      this.setState({
        sending: false,
        sent: true,
      })
    }, 2500)
  }

  render () {
    const formButton = !this.state.sending ? (
      <div
        className={
          classNames('button__wrapper', {
            disabled: this.state.sent,
          })
        }
      >
        <button id="form__submit" type="submit" disabled={this.state.sent}>
          apply
        </button>
      </div>
    ) : (
      <div className="button__wrapper">
        <div className="submit__loader"></div>
      </div>
    )

    const errorBody = this.state.sent ? (
      <p>Thank you for applying. Unfortunately, at this time, due to an
      unforeseen influx of new applicants, your application will be
      indefinitely tabled</p>
    ) : null

    return (
      <DocumentTitle title="Red Tier">
        <div>
          <div className="page__wrapper red">
            <h1 className="section__title">Red Tier</h1>
            <div className="section__words">
              <p>
                Red Tier is UC Berkeley’s premiere exclusive student driven
                tier nested in the midst of the largest ASUC sponsored design
                club on all of campus. Our red tier members have experience in
                both projected simulcasts and real world solutionmaking. Red
                tier promotes growth and exploration among members as well as
                dedication and social motivation. We emphasize contemporary
                values over dated and pedantic traditionalistic views, as we
                are always in the forefront of novel applications in the UC
                Berkeley community. Over the course of its history, red tier
                has developed and grown to become a renowned organization that
                others use as an example for Berkeley leadership and ideals.
              </p>
              <p>In the words of our founder:</p>
              <blockquote>
                <p>
                  It is not the person who becomes the master of trades, but the
                  entrepreneurial spirit that drives the impetus of creation and
                  due process of all mankind.
                </p>
                <footer className="center-align">
                  <b><cite>Johnathon Gathard</cite></b>
                </footer>
              </blockquote>
              <p>Take advantage of the unique opportunities offered by Red Tier and apply now!</p>

              <form onSubmit={this._handleApply}>
                { formButton }
              </form>
              <div className="request__error">
                { errorBody }
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
