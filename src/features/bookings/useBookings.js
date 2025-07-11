import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  //SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  // PAGINATION
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const bookings = response?.data ?? [];
  const count = response?.count ?? 0;

  return { isLoading, error, bookings, count };
}

// This is the original code:
//   const {
//     isLoading,
//     data: { data: bookings, count } = {},
//     error,
//   } = useQuery({
//     queryKey: ["bookings", filter, sortBy],
//     queryFn: () => getBookings({ filter, sortBy }),
//   });
//   return { isLoading, error, bookings, count };
// }
