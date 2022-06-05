// Sidebar imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// Analytics Cards imports
// Nav bar to
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// featureJS
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"
//data grid
// Sidebar Data
export const SidebarData = [
  {
    title: 'MAIN',
    to : "/",
    links: [
      {
        name: 'Dashboard',
        icon: <DashboardIcon />,
      },
    ],
  },

  {
    title: 'LISTS',
    links: [
      {
        name: 'Users',
        icon: <PersonOutlineOutlinedIcon />,
        paths : "users"
      },
      {
        name: 'products',
        icon: <StoreIcon />,
        paths : "products"
      },
      {
        name: 'Orders',
        icon: <CreditCardIcon />,
        paths : "users"
      },
    ],
  },
  {
    title: 'USEFUL',
    links: [
      {
        name: 'Stats',
        icon: <InsertChartIcon  />,
      },
      {
        name: 'Notifications',
        icon: <NotificationsNoneIcon  />,
        path: "Notifications"
      },
    ],
  },
  {
    title: 'SERVICE',
    links: [
      {
        name: 'System Health',
        icon: <SettingsSystemDaydreamOutlinedIcon />,
        path: "System Health"
      },
      {
        name: 'Logs',
        icon: <PsychologyOutlinedIcon  />,
        path:"Logs"
      },
      {
        name: 'Settings',
        icon: <SettingsApplicationsIcon  />,
        path:"/Settings"
      },
      {
        name: 'Logout',
        icon: <ExitToAppIcon  />,
        path:"/Logout"
      }
    ],
  },
];
// NAvbar Data
export const NavbarSide = [
  {
    icon: LanguageOutlinedIcon,
    title: "En"
  },
  {
    icon: DarkModeOutlinedIcon,
  },
  {
    icon: FullscreenExitOutlinedIcon,
  },
  {
    icon: NotificationsNoneOutlinedIcon,
    counter: "1",
    style:"w-4 h-4 text-center text-white rounded-full  bg-red-700  flex justify-center item-center text-[10px] font-bold  hover:bg-red-600 cursor-pointer absolute top-4 right-3 "
  },
  {
    icon: ChatBubbleOutlineOutlinedIcon,
    counter: "2",
    style:"w-4 h-4 text-center text-white rounded-full  bg-red-700  flex justify-center item-center text-[10px] font-bold  hover:bg-red-600 cursor-pointer absolute top-4 right-3"
  },
  {
    icon : ListOutlinedIcon
  }
];


export const feature = [
  {
    name: 'Target',
    icon: <KeyboardArrowDownIcon />,
  },
  {
    name: 'last week',
    icon: <KeyboardArrowDownIcon />,
    color: "text-green-400"
  },
  {
    name: 'last month',
    icon: <KeyboardArrowUpOutlinedIcon />,
    color: "text-red-400"
  },
]

// data table mui to
export const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];


//temporary data
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
          <div className="cellWithImg flex items-center gap-2">
            <img className="cellImg w-[2rem] h-[2rem] rounded-full object-cover" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
          <div className={`cellWithStatus flex items-center justify-center ${params.row.status}`}>
            {params.row.status}
          </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];