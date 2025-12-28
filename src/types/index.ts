export interface Column<T> {
  key: keyof T | "actions";
  label: string;
  render?: (row: T) => React.ReactNode;
}

export interface User {
  id: string;
  name: string;
  email: string;
  plan: "Free" | "Premium";
  phone: string;
  moviesWatched: number;
}
