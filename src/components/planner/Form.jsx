import React, { useState, useEffect, useContext } from "react";
import Input from "../Input";
import Button from "../Button";
import { databases, ID, storage } from "@/api/appwrite";
import themeContext from "@/context/themeContext";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";

const Form = () => {
  const [tripTitle, setTripTitle] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [destinationID, setDestinationID] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [budget, setBudget] = useState("");
  const { currentTheme } = useContext(themeContext);

  const { user } = useAuth();

  async function uploadImage(file) {
    const uploaded = await storage.createFile(
      import.meta.env.VITE_APPWRITE_BUCKET_ID,
      ID.unique(),
      file
    );

    // return both fileId and preview URL
    return {
      fileId: uploaded.$id,
      previewUrl: storage.getFileView(
        import.meta.env.VITE_APPWRITE_BUCKET_ID,
        uploaded.$id
      ),
    };
  }

  useEffect(() => {
    (async () => {
      const destinations = await databases.listDocuments({
        databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
        collectionId: import.meta.env.VITE_APPWRITE_DESTINATIONS_COLLECTION_ID,
        queries: [],
      });
      if (destinations) {
        setDestinations(destinations.documents);
      }
    })();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !tripTitle ||
      !destinationID ||
      !startDate ||
      !endDate ||
      !duration ||
      !description ||
      !photo ||
      !budget
    ) {
      toast.error("All fields are required ❌");
      return;
    }
    try {
      // const imageUrl = await uploadImage(photo);
      const { previewUrl, fileId } = await uploadImage(photo);
      const trip = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DB_ID,
        import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
        ID.unique(),
        {
          userId: user.$id,
          destinationId: destinationID,
          startDate: startDate,
          endDate: endDate,
          description: description,
          imageId: fileId,
          image: previewUrl,
          title: tripTitle,
          isPublic: true,
          duration: duration,
        }
      );

      if (trip) {
        console.log("Trip", trip);
        toast.success("Trip uploaded successfully 🎉");
        setTripTitle("");
        setDestinationID("");
        setStartDate("");
        setEndDate("");
        setDuration("");
        setDescription("");
        setPhoto("");
        setBudget("");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("Something went wrong while uploading 😢");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto px-8 py-4 space-y-6 rounded-2xl border-[1px] border-slate-500"
    >
      {/* Trip Title */}
      <Input
        label="Trip Title"
        type="text"
        placeholder="e.g., Summer Escape 2025"
        value={tripTitle}
        onChange={(e) => setTripTitle(e.target.value)}
      />

      <label htmlFor="destination" className="block text-sm font-medium mb-2">
        Choose a Destination:
      </label>

      <select
        name="destination"
        id="destination"
        value={destinationID}
        onChange={(e) => setDestinationID(e.target.value)}
        className={`${currentTheme.background} ${currentTheme.text} 
    w-full px-4 py-3 rounded-xl border border-slate-400 shadow-sm 
    focus:ring-2 focus:ring-amber-400 focus:outline-none transition duration-300`}
      >
        {destinations.map((elem) => (
          <option key={elem.$id} value={elem.$id} className="py-2">
            {elem.name}
          </option>
        ))}
      </select>

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
        label="Budget"
        type="string"
        placeholder="e.g., 50,000"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
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
      <Button text={"Upload Publicly"} type="submit" className="w-full" />
    </form>
  );
};

export default Form;
