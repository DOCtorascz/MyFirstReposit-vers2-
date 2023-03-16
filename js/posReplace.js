// замена ссылок
export default function posReplace(message) {
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

  const arrMess = message.split(' ');
  const arrayMessage = message.split(' ');

  for (const item of arrayDomen) {
    for (const item2 in arrayMessage) {
      const indx = arrayMessage[item2].indexOf(item);
      if (indx !== -1) {
        arrMess[item2] = arrMess[item2].replace(arrMess[item2], `<a href="${arrMess[item2]}">${arrMess[item2]}</a>`);
      }
    }
  }

  const joinStr = arrMess.join(' ');

  console.log(joinStr);
  return joinStr;
}
