import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import hiliLogo from "@/assets/hili-logo.png";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<"creator" | "brand">("creator");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={hiliLogo} alt="Hili" className="w-10 h-10 object-contain opacity-80" />
          <span className="font-display text-lg tracking-[0.15em] font-bold">HILI</span>
        </Link>
        <Link
          to="/"
          className="text-muted-foreground text-sm font-body hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wide">
            Get In <span className="font-serif-accent text-primary normal-case">Touch</span>
          </h1>
          <p className="text-muted-foreground font-body mt-4 text-base">
            Tell us who you are, and we'll take it from there.
          </p>
        </motion.div>

        {/* Toggle Slider */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative flex bg-secondary rounded-none border border-border overflow-hidden">
            {/* Sliding background */}
            <motion.div
              className="absolute top-0 bottom-0 w-1/2 bg-primary"
              animate={{ x: activeTab === "creator" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setActiveTab("creator")}
              className={`relative z-10 px-10 py-4 font-display text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                activeTab === "creator" ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              I'm a Creator
            </button>
            <button
              onClick={() => setActiveTab("brand")}
              className={`relative z-10 px-10 py-4 font-display text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                activeTab === "brand" ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              I'm a Brand
            </button>
          </div>
        </motion.div>

        {/* Forms */}
        <AnimatePresence mode="wait">
          {activeTab === "creator" ? (
            <motion.div
              key="creator"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <CreatorForm />
            </motion.div>
          ) : (
            <motion.div
              key="brand"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const inputClasses =
  "w-full bg-transparent border-b border-border text-foreground font-body text-sm py-4 px-0 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300";

const labelClasses =
  "text-xs tracking-[0.15em] text-muted-foreground font-display uppercase mb-1 block";

const CreatorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platforms: "",
    audience: "",
    goals: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/xlgajype", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-20 text-center animate-in fade-in duration-500">
        <h3 className="font-display text-2xl text-primary mb-4">Thank You!</h3>
        <p className="text-muted-foreground font-body">We’ve received your submission we'll get back to you shortly</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-[2px] bg-primary" />
        <span className="text-primary text-xs tracking-[0.25em] font-display uppercase font-semibold">
          For Creators
        </span>
      </div>

      <p className="font-serif text-xl md:text-2xl italic text-foreground/80 mb-10 leading-relaxed">
        You built the audience, so we build the revenue.
      </p>

      {status === "error" && (
        <p className="text-red-500 font-body text-sm">Oops! There was a problem submitting your form.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClasses}>Name *</label>
          <input
            name="name"
            required
            maxLength={100}
            className={inputClasses}
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClasses}>Email *</label>
          <input
            name="email"
            required
            type="email"
            maxLength={255}
            className={inputClasses}
            placeholder="you@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClasses}>Main Platforms</label>
          <input
            name="platforms"
            maxLength={200}
            className={inputClasses}
            placeholder="e.g. YouTube, TikTok, Kick"
            value={formData.platforms}
            onChange={(e) => handleChange("platforms", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClasses}>Audience Size</label>
          <input
            name="audience"
            maxLength={100}
            className={inputClasses}
            placeholder="e.g. 50K followers"
            value={formData.audience}
            onChange={(e) => handleChange("audience", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses}>What are you looking for? *</label>
        <textarea
          name="goals"
          required
          maxLength={1000}
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Brand deals, content strategy, event appearances, monetisation help..."
          value={formData.goals}
          onChange={(e) => handleChange("goals", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClasses}>Anything else?</label>
        <textarea
          name="message"
          maxLength={1000}
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="Links, socials, or context..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 border border-primary/40 text-primary px-10 py-4 font-display text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

const BrandForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    goals: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mbdqgvzw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-20 text-center animate-in fade-in duration-500">
        <h3 className="font-display text-2xl text-primary mb-4">Thank You!</h3>
        <p className="text-muted-foreground font-body">We’ve received your submission we'll get back to you shortly</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-[2px] bg-primary" />
        <span className="text-primary text-xs tracking-[0.25em] font-display uppercase font-semibold">
          For Brands
        </span>
      </div>

      <p className="font-serif text-xl md:text-2xl italic text-foreground/80 mb-10 leading-relaxed">
        Stop guessing, start converting.
      </p>

      {status === "error" && (
        <p className="text-red-500 font-body text-sm">Oops! There was a problem submitting your form.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClasses}>Contact Name *</label>
          <input
            name="name"
            required
            maxLength={100}
            className={inputClasses}
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClasses}>Email *</label>
          <input
            name="email"
            required
            type="email"
            maxLength={255}
            className={inputClasses}
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClasses}>Company / Brand *</label>
          <input
            name="company"
            required
            maxLength={200}
            className={inputClasses}
            placeholder="Your brand name"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClasses}>Budget Range</label>
          <select
            name="budget"
            className={`${inputClasses} bg-background cursor-pointer`}
            value={formData.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
          >
            <option value="">Select range</option>
            <option value="Under KES 500K">Under KES 500K</option>
            <option value="KES 500K - 1M">KES 500K – 1M</option>
            <option value="KES 1M - 5M">KES 1M – 5M</option>
            <option value="KES 5M+">KES 5M+</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses}>What are you looking for? *</label>
        <textarea
          name="goals"
          required
          maxLength={1000}
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Creator partnerships, event sponsorship, content campaigns..."
          value={formData.goals}
          onChange={(e) => handleChange("goals", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClasses}>Additional Details</label>
        <textarea
          name="message"
          maxLength={1000}
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="Timeline, target audience, specific creators in mind..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 border border-primary/40 text-primary px-10 py-4 font-display text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Contact;
