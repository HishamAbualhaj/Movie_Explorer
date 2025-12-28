import { Column } from "@/types";

function DataTable<T extends { id: string }>({
  data,
  columns,
}: {
  data: T[];
  columns: Column<T>[];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-border bg-bg-light">
      <table className="w-full text-sm">
        <thead className="bg-bg-dark text-text-secondary">
          <tr>
            {columns.map((col) => (
              <th key={col.label} className="px-4 py-3 text-left font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-t border-border hover:bg-bg-dark/20 transition"
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-5 text-text-main">
                  {col.render
                    ? col.render(row)
                    : String(row[col.key as keyof T])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;
