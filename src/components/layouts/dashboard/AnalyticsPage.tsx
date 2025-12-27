"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import StatCard from "./StatCard";

const AnalyticsPage = () => {
  const COLORS = [
    "#6366f1",
    "#22c55e",
    "#f97316",
    "#ef4444",
    "#14b8a6",
    "#a855f7",
  ];
  const analyticsData = {
    summary: {
      totalMovies: 1280,
      totalViews: 342000,
      avgRating: 7.8,
      totalReviews: 8920,
    },
    moviesByGenre: [
      { genre: "Action", count: 320 },
      { genre: "Drama", count: 280 },
      { genre: "Comedy", count: 210 },
      { genre: "Sci-Fi", count: 170 },
      { genre: "Horror", count: 140 },
      { genre: "Other", count: 160 },
    ],
    viewsByMonth: [
      { month: "Jan", views: 22000 },
      { month: "Feb", views: 26000 },
      { month: "Mar", views: 30000 },
      { month: "Apr", views: 28000 },
      { month: "May", views: 34000 },
      { month: "Jun", views: 42000 },
    ],
  };
  const { summary, moviesByGenre, viewsByMonth } = analyticsData;
  return (
    <div className="p-6 space-y-6 text-white">
      <h1 className="text-2xl font-semibold text-white">Movie Explorer Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        <StatCard title="Total Movies" value={summary.totalMovies} />
        <StatCard
          title="Total Views"
          value={summary.totalViews.toLocaleString()}
        />
        <StatCard title="Avg Rating" value={summary.avgRating} />
        <StatCard
          title="Total Reviews"
          value={summary.totalReviews.toLocaleString()}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-4 border border-border bg-bg-light shadow-sm">
          <h2 className="mb-4 font-medium text-white">Movies by Genre</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={moviesByGenre}
                dataKey="count"
                nameKey="genre"
                outerRadius={110}
                label
              >
                {moviesByGenre.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border-border bg-bg-light  shadow-sm p-4">
          <h2 className="mb-4 font-medium">Views per Month</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={viewsByMonth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
