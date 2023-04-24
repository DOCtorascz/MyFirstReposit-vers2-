//  валидация email
export default function valid(strListMail) {
  const arrayDomen = ['.ru', '.org', '.com', '.academy', '.accountant', '.accountants', '.active',
    '.actor', '.adult', '.aero', '.agency', '.airforce', '.apartments', '.app', '.archi', '.army', '.associates', '.asia', '.adult', '.aero',
    '.attorney', '.auction', '.audio', '.autos', '.biz', '.cat', '.coop', '.dance',
    '.edu', '.eus', '.family', '.fun', '.gov', '.info', '.int', '.jobs', '.mil', '.mobi', '.museum', '.name',
    '.net', '.one', '.ong', '.onl', '.online', '.ooo',
    '.organic', '.partners', '.parts', '.party', '.pharmacy', '.photo', '.photography', '.photos', '.physio', '.pics', '.pictures', '.feedback', '.pink',
    '.pizza', '.place', '.plumbing', '.plus', '.poker', '.porn', '.post', '.press',
    '.pro', '.productions', '.properties', '.property', '.qpon', '.racing', '.recipes', '.red', '.rehab', '.ren', '.rent', '.rentals',
    '.report', '.republican', '.rest', '.review', '.reviews', '.rich', '.site', '.tel', '.trade', '.travel', '.xxx', '.xyz',
    '.yoga', '.zone', '.ninja', '.art', '.moe', '.dev'];

  const arrayStr = [];
  const arrayMail = strListMail.split(' ');
  let num = 0;

  for (let i = 0; i <= arrayMail[0].length - 1; i += 1) {
    const indx = arrayMail[0].indexOf('@', i);
    if (indx !== -1) {
      num += 1;
      i = indx;
    }
    if (num === 1) {
      arrayStr.push(arrayMail[0]);
    }
  }

  arrayDomen.forEach((item) => {
    let indx = null;

    if (arrayStr.length !== 0) {
      indx = arrayStr[0].indexOf(`${item}`);

      if (indx !== -1) {
        const indxDoth = arrayStr[0].slice(indx - 1);
        if (indxDoth[0] !== '.') {
          num += 1;
        }
      }
    }
  });

  const result = num === 2;

  return result;
}
