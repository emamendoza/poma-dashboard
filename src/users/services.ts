const users = [
  { id: 1, name: "Juan Perez", email: "juan@example.com" },
  { id: 2, name: "Maria Garcia", email: "maria@example.com" },
];

export const getUsers = () => users;
export const createUser = (user: any) =>
  users.push({ ...user, id: users.length + 1 });
