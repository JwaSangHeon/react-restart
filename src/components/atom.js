import { atom } from "recoil";

const usersAtom = atom({
  key: "usersAtom",
  default: [
    { id: 1, username: "SH", email: "SH@example.com", active: true },
    { id: 2, username: "JH", email: "HH@example.com", active: false },
    { id: 3, username: "SY", email: "SY@example.com", active: false },
  ],
});

export { usersAtom };
