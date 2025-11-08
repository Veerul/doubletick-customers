import { faker } from "@faker-js/faker";

export function generateCustomers(count) {
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push({
      id: i,
      name: faker.person.fullName(),
      phone: faker.phone.number("+91##########"),
      email: faker.internet.email(),
      score: faker.number.int({ min: 0, max: 100 }),
      lastMessageAt: faker.date.recent({ days: 90 }).toLocaleString(),
      addedBy: faker.person.firstName(),
      avatar: faker.image.avatar()
    });
  }
  return arr;
}
