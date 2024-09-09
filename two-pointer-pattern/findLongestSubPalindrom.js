// Finding the longest substring in a stringthat is a palindrome.
// Input: "babad";
// Output: "bab";

function longestPalindrome(str) {
  if (str.length === 0) return "";

  //initialize pointers
  let start = 0;
  let end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  }

  for (let i = 0; i < str.length; i++) {
    // Check for odd-length palindromes
    const [oddStart, oddEnd] = expandAroundCenter(i, i);

    if (oddEnd - oddStart > end - start) {
      start = oddStart;
      end = oddEnd;
    }
    // Check for even-length palindromes
    const [evenStart, evenEnd] = expandAroundCenter(i, i + 1);

    if (evenEnd - evenStart > end - start) {
      start = evenStart;
      end = evenEnd;
    }
  }
  return str.substring(start, end + 1);
}

//usage
const input = "badpatap";
console.log(longestPalindrome(input));
