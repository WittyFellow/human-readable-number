module.exports = function toReadable(num) {
  let first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let second = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  if (num < 20) {
    return first[num];
  }

  if (num > 19 && num < 100) {
    let a = Math.floor(num / 10);
    let b = num % 10;
    return b == 0 ? second[a] : `${second[a]} ${first[b]}`;
  }

  if (num => 100) {
    let a = Math.floor(num / 100);
    let b = Math.floor(num % 100 / 10);
    let c = num % 10;
    let d = num % 100;
    if (d < 20 ) {
      return d == 0 ? `${first[a]} hundred` : `${first[a]} hundred ${first[d]}`;
    } else {
      return c == 0 ? `${first[a]} hundred ${second[b]}` : `${first[a]} hundred ${second[b]} ${first[c]}`;
    }
  }
}
