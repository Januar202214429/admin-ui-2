import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const transactions = [
  {
    id: 1,
    transactionName: "GTR 5",
    categoryId: 5,
    shopName: "Gadget & Gear",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 160,
    type: "Expense",
    icon: <ShoppingBagOutlinedIcon />,
  },
  {
    id: 2,
    transactionName: "Polo Shirt",
    categoryId: 5,
    shopName: "XL Fashions",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 20,
    type: "Expense",
    icon: <ShoppingBagOutlinedIcon />,
  },
  {
    id: 3,
    transactionName: "Biriyani",
    categoryId: 2,
    shopName: "Hajir Biriyani",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 12,
    type: "Expense",
    icon: <FastfoodOutlinedIcon />,
  },
  {
    id: 4,
    transactionName: "Movie Ticket",
    categoryId: 4,
    shopName: "Inox",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 15,
    type: "Expense",
    icon: <MovieOutlinedIcon />,
  },
  {
    id: 5,
    transactionName: "Taxi Fare",
    categoryId: 3,
    shopName: "Uber",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 10,
    type: "Expense",
    icon: <LocalTaxiOutlinedIcon />,
  },
  {
    id: 6,
    transactionName: "Pizza",
    categoryId: 2,
    shopName: "Pizza Hut",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 20,
    type: "Expense",
    icon: <FastfoodOutlinedIcon />,
  },
  {
    id: 7,
    transactionName: "Keyboard",
    categoryId: 5,
    shopName: "Gadget & Gear",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 30,
    type: "Expense",
    icon: <ShoppingBagOutlinedIcon />,
  },
  {
    id: 8,
    transactionName: "Project Fee",
    categoryId: 6,
    shopName: "Landing Page",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 100,
    type: "Revenue",
    icon: <AttachMoneyOutlinedIcon />,
  },
];

export default transactions;
