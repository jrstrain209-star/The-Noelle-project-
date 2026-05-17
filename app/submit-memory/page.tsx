'use client';

import { useState } from 'react';
import { uploadMemorialPhoto, submitMemorial } from '@/lib/supabaseClient';

export default function SubmitMemory() {
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    message: '',
    permission_to_post: false,
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.message.trim()) {
        setError('Please share a memory or letter.');
        setLoading(false);
        return;
      }

      if (!formData.permission_to_post) {
        setError('Please confirm you agree to share this publicly.');
        setLoading(false);
        return;
      }

      let photoUrl: string | null = null;

      // Upload photo if provided
      if (photo) {
        const tempId = Date.now().toString();
        photoUrl = await uploadMemorialPhoto(photo, tempId);
        if (!photoUrl) {
          setError('Failed to upload photo. Please try again.');
          setLoading(false);
          return;
        }
      }

      // Submit memorial
      const result = await submitMemorial({
        name: formData.name || null,
        relationship: formData.relationship || null,
        message: formData.message,
        photo_url: photoUrl,
        permission_to_post: formData.permission_to_post,
        approved: false,
      });

      if (!result) {
  setError("Failed to submit memory. Please try again.");
  setLoading(false);
  return;
}

      setSubmitted(true);
      setFormData({
        name: '',
        relationship: '',
        message: '',
        permission_to_post: false,
      });
      setPhoto(null);
      setPhotoPreview('');
   } catch (err) {
  console.error("Submit error:", err);
  setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
} finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Stars/Galaxy Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(88,86,214,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_0%,rgba(168,85,247,0.08),transparent_60%)]"></div>

        {/* Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 150 }).map((_, i) => {
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            return (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: opacity,
                  animation: `twinkle ${duration}s infinite`,
                  animationDelay: `${delay}s`,
                }}
              ></div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.9; }
          }
        `}</style>
      </div>

      {/* Fixed "Get Help Now" Button */}
      <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8">
        <a
          href="/#help"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
          </span>
          Get Help Now
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/" className="flex-1 hover:opacity-80 transition-opacity">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Noelle&apos;s Light
            </h1>
            <p className="text-xs md:text-sm text-white/60 mt-1">Submit a Memory</p>
          </a>
          <a
            href="/memorial"
            className="hidden sm:block px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors text-sm border border-white/20"
          >
            Back to Memorial
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
        <p className="text-pink-300 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
          ✦ Share Your Light ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Submit a Memory
        </h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Share a photo, letter, or memory of Noelle. Your words will help keep her light alive and
          provide comfort to those who loved her.
        </p>
      </section>

      {/* Main Form Container */}
      <section className="relative max-w-2xl mx-auto px-5 py-12 pb-24">
        {submitted ? (
          <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-purple-400/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm text-center">
            <p className="text-pink-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
              💫 Thank You
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Your Memory Matters</h3>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Thank you for sharing. Your memory will be reviewed before it is posted.
            </p>
            <a
              href="/memorial"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              Back to Memorial
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              <label htmlFor="name" className="block text-sm font-semibold text-pink-300 mb-2">
                Your Name <span className="text-white/40">(optional)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Share your name or remain anonymous"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 transition-all"
              />
            </div>

            {/* Relationship Field */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              <label htmlFor="relationship" className="block text-sm font-semibold text-pink-300 mb-2">
                Your Relationship to Noelle <span className="text-white/40">(optional)</span>
              </label>
              <input
                type="text"
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleInputChange}
                placeholder="e.g., Friend, Family, Classmate, Coach"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 transition-all"
              />
            </div>

            {/* Memory/Letter Field */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              <label htmlFor="message" className="block text-sm font-semibold text-pink-300 mb-2">
                Memory or Letter <span className="text-rose-300">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share your memory, story, or words for Noelle..."
                rows={6}
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 transition-all resize-none"
              />
              <p className="text-white/40 text-xs mt-2">
                {formData.message.length} characters
              </p>
            </div>

            {/* Photo Upload Field */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              <label htmlFor="photo" className="block text-sm font-semibold text-pink-300 mb-2">
                Photo <span className="text-white/40">(optional)</span>
              </label>

              {photoPreview ? (
                <div className="relative mb-4">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg border border-pink-400/30"
                  />
                  <button
                    type="button"
                    onClick={removePhoto}
                    className="absolute top-2 right-2 bg-rose-500 hover:bg-rose-600 text-white font-bold py-1 px-3 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-pink-400/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={handlePhotoChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <label htmlFor="photo" className="cursor-pointer block">
                    <p className="text-white/60 text-sm">
                      📸 Click to upload or drag and drop
                    </p>
                    <p className="text-white/40 text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
                  </label>
                </div>
              )}
            </div>

            {/* Permission Checkbox */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="permission_to_post"
                  checked={formData.permission_to_post}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded border-white/20 bg-slate-900/50 accent-pink-400 cursor-pointer"
                />
                <div>
                  <p className="text-sm text-white font-semibold">
                    I give permission to post this memory publicly <span className="text-rose-300">*</span>
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    All submissions will be reviewed before being added to the memorial wall.
                  </p>
                </div>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-4">
                <p className="text-rose-300 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Memory'}
              </button>
              <a
                href="/memorial"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors border border-white/20"
              >
                Cancel
              </a>
            </div>
          </form>
        )}
      </section>

      {/* Privacy Note */}
      <section className="relative max-w-2xl mx-auto px-5 py-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-white/70 text-sm">
            🔒 <span className="block mt-2">Your privacy matters. Please only submit content you are comfortable sharing publicly.</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-16 py-8 text-center text-white/60 text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-base md:text-lg font-semibold text-white mb-2">
            Noelle&apos;s Light
          </p>
          <p className="mb-4">Her memory lives on in our hearts and in the connections we share.</p>
          <div className="border-t border-white/10 pt-4 text-white/50">
            <p>Created in memory of Noelle Ryan Strain</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
