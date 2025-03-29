function isPalindrome(str: string): boolean {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");

  if (cleanStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}
