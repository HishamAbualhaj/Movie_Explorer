export default function SideInformation() {
  const infoItems = [
    { label: "Genres", value: "Thriller, Mystery, Drama" },
    { label: "Age", value: "16+" },
    { label: "Audio", value: "English" },
    { label: "Languages", value: "English, Arabic, French" },
  ];

  return (
    <aside className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 p-5 space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-neutral-100">Release Year</h3>
        <p className="text-sm text-neutral-300">2022</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs text-neutral-400">
        {infoItems.map((item, i) => (
          <div key={i} className="space-y-1">
            <p className="text-neutral-300">{item.label}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
