// Import stylesheets
import './style.css';

const textareaTwitter = document.getElementById('twitter-text');
const textareaCount = document.getElementById('twitter-count');

textareaTwitter.onkeyup = function () {
  document.getElementById('twitter-count').innerHTML = `${countRest(this.value)} left`;
}

function countRest (text) {
  var limit = 280;

  // take t.co shorten into account
  // https://dev.twitter.com/blog/next-steps-with-the-tco-link-wrapper
  var regex  = /(?:https?\:\/\/|www\.)[^\s]+/g;
  var noURL  = text.replace(regex, "");
  var URLs   = text.match(regex);
  var length = noURL.length;

  if (URLs) {
    URLs.forEach(function (url) {
      if (url.match("https://")){
        length += 22;
      } else {
        length += 23;
      }
    });
  }

  return limit - length;
}