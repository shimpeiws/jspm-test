import $ from 'jquery'
import _ from 'lodash'

var count = 0;
$('.button').click(_.debounce(() => {
  $('.count').html(++count)
}))
