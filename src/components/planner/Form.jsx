import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

const Form = () => {
  const [tripTitle, setTripTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form className="w-full max-w-2xl mx-auto px-8 py-4 space-y-6 rounded-2xl border-[1px] border-slate-500">
      {/* Trip Title */}
      <Input
        label="Trip Title"
        type="text"
        placeholder="e.g., Summer Escape 2025"
        value={tripTitle}
        onChange={(e) => setTripTitle(e.target.value)}
      />

      {/* Destination */}
      <Input
        label="Destination"
        type="text"
        placeholder="e.g., Maldives, Switzerland, Bali"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      {/* Description */}
      <Input
        label="Description"
        type="text"
        placeholder="Write a short overview of your trip"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

{/*Price */}
      <Input
        label="Price"
        type="string"
        placeholder="e.g., 50,000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* Dates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Start Date"
          type="date"
          placeholder="Select start date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          label="End Date"
          type="date"
          placeholder="Select end date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Duration */}
      <Input
        label="Duration"
        type="text"
        placeholder="e.g., 7 days, 2 weeks"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      {/* Image Upload */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Destination Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:cursor-pointer hover:file:opacity-80"
        />
      </div>
      <Button text={"Upload Publicly"} onClick={() => {}} className="w-full" />
    </form>
  );
};

export default Form;

