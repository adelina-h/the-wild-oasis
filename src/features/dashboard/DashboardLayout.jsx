import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { stays, isLoading: isLoadingStays } = useRecentStays();
  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  console.log(bookings);
  return (
    <StyledDashboardLayout>
      <div>PLACEHOLDER DASHBOARD CONTENT</div>
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
