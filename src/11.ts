export function getRandomTsCode(): string {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    code += possibleChars[randomIndex];
  }
  return code;
}
