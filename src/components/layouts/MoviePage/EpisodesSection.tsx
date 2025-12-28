"use client";
import { useState } from "react";
import { Star, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { Review } from "@/types/movie";

function Stars({ count = 4 }: { count?: number }) {
  return (
    <div className="flex text-yellow-400 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < count ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 opacity-30"} />
      ))}
    </div>
  );
}

function StarRating({ value, onChange }: { value: number; onChange: (rating: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={18} onClick={() => onChange(star)} className={`cursor-pointer transition ${star <= value ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 opacity-30"}`} />
      ))}
    </div>
  );
}

export default function EpisodesSection() {
  const seasons = [
    {
      season: 1,
      episodes: [
        { number: 1, duration: "48 min" },
        { number: 2, duration: "53 min" },
        { number: 3, duration: "50 min" },
        { number: 4, duration: "44 min" },
        { number: 5, duration: "56 min" },
      ],
    },
    {
      season: 2,
      episodes: [
        { number: 1, duration: "43 min" },
        { number: 2, duration: "47 min" },
        { number: 3, duration: "50 min" },
        { number: 4, duration: "44 min" },
      ],
    },
    {
      season: 3,
      episodes: [
        { number: 1, duration: "42 min" },
        { number: 2, duration: "47 min" },
        { number: 3, duration: "50 min" },
        { number: 4, duration: "44 min" },
      ],
    },
  ];

  const [openSeason, setOpenSeason] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Layla",
      country: "Egypt",
      rating: 4,
      opinion: "Wonderful series.",
    },
    {
      name: "Saed",
      country: "Lebanon",
      rating: 5,
      opinion: "Amazing show!",
    },
  ]);
  const [currentReview, setCurrentReview] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    country: "",
    rating: 5,
    opinion: "",
  });

  const handleAddReview = () => {
    if (!form.name || !form.opinion) return;

    setReviews([
      ...reviews,
      {
        name: form.name,
        country: form.country,
        rating: form.rating,
        opinion: form.opinion,
      },
    ]);

    setForm({ name: "", country: "", rating: 5, opinion: "" });
    setShowForm(false);
    setCurrentReview(reviews.length);
  };

  return (
    <section className="space-y-10 text-white mt-4 w-full">
      <h2 className="text-2xl font-semibold">Seasons & Episodes</h2>

      {seasons.map((s) => (
        <div key={s.season} className="border border-white/10 rounded-xl bg-white/5 p-4 sm:p-5">
          <button onClick={() => setOpenSeason(openSeason === s.season ? -1 : s.season)} className="w-full flex justify-between items-center px-4 py-3">
            <span className="text-lg font-medium">Season {s.season}</span>
            <span className="text-sm text-gray-400">{s.episodes.length} Episodes</span>
          </button>

          {openSeason === s.season && (
            <div className="space-y-3 px-4 pb-4">
              {s.episodes.map((ep) => (
                <div key={ep.number} className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-white/10">
                  <h3 className="font-semibold">Episode {ep.number}</h3>
                  <span className="text-gray-400 text-sm">{ep.duration}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Reviews</h3>
          <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md text-sm">
            <Plus size={16} /> Add Your Review
          </button>
        </div>

        {showForm && (
          <div className="space-y-3 bg-black/40 p-4 rounded-lg border border-white/10">
            <input placeholder="Your name" className="w-full bg-black/60 border border-white/10 rounded-md px-3 py-2 text-sm" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Country" className="w-full bg-black/60 border border-white/10 rounded-md px-3 py-2 text-sm" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
            <div>
              <p className="text-sm text-gray-300 mb-1">Your Rating</p>
              <StarRating value={form.rating} onChange={(rating) => setForm({ ...form, rating })} />
            </div>
            <textarea placeholder="Write your review" rows={3} className="w-full bg-black/60 border border-white/10 rounded-md px-3 py-2 text-sm resize-none" value={form.opinion} onChange={(e) => setForm({ ...form, opinion: e.target.value })} />
            <button onClick={handleAddReview} className="w-full bg-red-600 hover:bg-red-700 transition rounded-md py-2 text-sm font-medium">
              Add Review
            </button>
          </div>
        )}

        <div className="relative">
          <div className="bg-black/40 p-4 rounded-lg border border-white/10 max-w-sm mx-auto">
            <h4 className="font-semibold">
              {reviews[currentReview].name}
              {reviews[currentReview].country && <span className="text-gray-400 text-sm"> · {reviews[currentReview].country}</span>}
            </h4>
            <Stars count={reviews[currentReview].rating} />
            <p className="text-gray-300 text-sm mt-2">{reviews[currentReview].opinion}</p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-3">
            <button className="p-2 bg-white/10 rounded-full" onClick={() => setCurrentReview((currentReview - 1 + reviews.length) % reviews.length)}>
              <ArrowLeft size={18} />
            </button>
            <button className="p-2 bg-white/10 rounded-full" onClick={() => setCurrentReview((currentReview + 1) % reviews.length)}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
