import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Total number of bookings
  const numBookings = bookings.length;

  // 2. Total sales
  const sales = bookings.reduce(
    (total, booking) => total + booking.totalPrice,
    0
  );

  // 3. Total Check ins
  const checkIns = confirmedStays.length;

  // 4. Occupancy rate
  const occupancy = confirmedStays.reduce(
    (total, stay) => total + stay.numNights,
    0
  ) / (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancy * 100) + "%"}
      />
    </>
  );
}
