const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]

const rta = users.map(user => user.attributes);
console.log(rta);

const rta2 = users.map(user => user.attributes).flat();
console.log('map-flat', rta2);

const rta3 = users.flatMap(user => user.attributes);
console.log('flat-map', rta3);


const calendars = {
  primaryCalendar: [{
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [{
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta4 = Object.keys(calendars);
console.log(rta4);

const rta5 = Object.values(calendars);
console.log(rta5);

const rta6 = Object.values(calendars).flat();
console.log(rta6);


const rta7 = Object.values(calendars).flatMap(item => {
    console.log('item', item);
    return item.map(date => date.startDate);
});
console.log(rta7);

const input = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

const playground = input.map(item => item.split(' ')).flat().length;
console.log('playground', playground);