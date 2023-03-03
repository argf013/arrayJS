function cek_parentheses(str) {
  const stack = [];
  const parentheses = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (parentheses[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}' || char === '>') {
      const lastOpen = stack.pop();
      if (parentheses[lastOpen] !== char) {
        return 'salah';
      }
    }
  }
  
  if (stack.length > 0) {
    return 'salah';
  }
  
  return 'benar';
}
