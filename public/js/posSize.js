// подсчёт символов без ссылок
export default function posSize(message) {
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
  let num = 0;
  let result = null;

  arrayDomen.forEach((item) => {
    arrayMessage.forEach((element, index) => {
      const indx = element.indexOf(item);
      if (indx !== -1) {
        num += arrMess[index].length;
      }
    });
  });

  result = message.length - num;

  console.log(result);
  return result;
}
