import React, { useState, useEffect, useContext } from "react";
import Input from "../Input";
import Button from "../Button";
import { databases, ID } from "@/api/appwrite";
import themeContext from "@/context/themeContext";
import useAuth from "@/hooks/useAuth";

const Form = () => {
  const [tripTitle, setTripTitle] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [destinationID,setDestinationID] =useState("")
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const { currentTheme } = useContext(themeContext);


  const {user}=useAuth()

  useEffect(() => {
    (async () => {
      const destinations = await databases.listDocuments({
        databaseId: "68d44b0c002eb2b207f9",
        collectionId: "destinations",
        queries: [],
      });
      if (destinations) {
        console.log("Destinations", destinations.documents);
        setDestinations(destinations.documents);
      }
    })();
  }, []);

  console.log("user",user)

  async function handleSubmit(){
    const trip=await databases.createDocument(
      "68d462c6000af8895362",
      "trips",
      ID.unique(),
      {
        userId : user.$id,
        destinationId: destinationID,
        startDate : startDate,
        endDate : endDate
      
      }
    )
  }

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

      <label htmlFor="destination" className="block text-sm font-medium mb-2">
        Choose a Destination:
      </label>

      <select
        name="destination"
        id="destination"
        className={`${currentTheme.background} ${currentTheme.text} 
    w-full px-4 py-3 rounded-xl border border-slate-400 shadow-sm 
    focus:ring-2 focus:ring-amber-400 focus:outline-none transition duration-300`}
      >
        {destinations.map((elem, index) => (
          <option key={index} value={elem.name} className="py-2" onClick={()=>setDestinationID(elem.$id)}>
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
