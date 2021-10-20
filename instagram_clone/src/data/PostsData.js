import {USERS} from './UsersData';
export const POSTS = [
  {
    imageUrl:
      'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    user: USERS[0].user,
    likes: 485,
    caption: 'This is my caption bro',
    profilePicture: USERS[0].image,
    comments: [
      {
        user: USERS[2].user,
        comment: 'Nice pic dude',
      },
      {
        user: USERS[1].user,
        comment: 'Wowww',
      },
    ],
  },
  {
    imageUrl: 'https://cdn.webrazzi.com/uploads/2020/05/facebook-35.jpeg',
    user: USERS[4].user,
    likes: 12,
    caption: 'Guess who I am',
    profilePicture: USERS[4].image,
    comments: [
      {
        user: USERS[0].user,
        comment: 'Go home brother',
      },
    ],
  },
];
