module.exports = {
  searchByKoreanInitialSound: (data, firstSounds) => {
    const INITLETTER = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
    const regArr = firstSounds.split('').map((a) => {
      if (!isNaN(a)) return a.charCodeAt() - 48;
      const startIdx = INITLETTER.indexOf(a) * 588 + 44032;
      const endLet = String.fromCharCode(startIdx + 587);
      return `[${a}${String.fromCharCode(startIdx)}-${endLet}]`;
    });
    const check = new RegExp(`${regArr.join('')}`, 'g');
    return data.filter((a) => a.match(check));
  },
};
