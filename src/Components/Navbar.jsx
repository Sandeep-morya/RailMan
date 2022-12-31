import { Center, Button, background, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTicket,
  faTrainSubway,
  faTrainTram,
  faLocationDot,
  faTrailer,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const theme = useContext(MyTheme);
  const list = [
    { path: "/", name: "Home", icon: faHome },

    { path: "/booking", name: "Book Ticket", icon: faTicket },
    {
      path: "/trains_between_stations",
      name: "Train Between Stations",
      icon: faTrainSubway,
    },
    { path: "/live_station", name: "Live Station", icon: faTrainTram },
    // { path: "/running_status", name: "Running Status", icon: faLocationDot },
    // { path: "/coach_position", name: "Coach Position", icon: faTrailer },
  ];

  return (
    <Center
      display="flex"
      justifyContent="space-between"
      m="auto"
      w="full"
      p="1rem .7rem"
      borderRadius="2rem"
    >
      {list.map((link, i) => (
        <NavLink
          style={({ isActive }) => (isActive ? { color: theme.primary } : null)}
          key={i}
          to={link.path}
        >
          <Button
            variant="none"
            leftIcon={<FontAwesomeIcon icon={link.icon} />}
          >
            {link.name}
          </Button>
        </NavLink>
      ))}
      <Link fontWeight='700' href="https://www.irctc.co.in/online-charts/" isExternal>
        <ExternalLinkIcon mx="2px" /> Reservation Chart
      </Link>
    </Center>
  );
};

export default Navbar;
