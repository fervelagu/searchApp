export const thetransactions = [
    { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
    { amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
    { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
    { amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
    { amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
    { amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
    { amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
    { amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
    { amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
    { amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
];

thetransactions.forEach((i) => {
    let day = i.date.slice(0, 2)
    let month = i.date.slice(3, 5)
    let year = i.date.slice(6, 10)
    let miF = month + "-" + day + "-" + year;
    miF = new Date(miF).getTime()
    i['date2'] = miF
    let finalDate = day + "-" + month + "-" + year;
    i['date'] = finalDate
    return i;
});

thetransactions.sort(function(a, b){
  return a.date2 - b.date2
})