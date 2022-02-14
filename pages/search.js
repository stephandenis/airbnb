import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";

const Search = () => {
  const router = useRouter();
  // access to the variables
  const { location, startDate, endDate, noOfGuests } = router.query;

  // format the startDate string
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");

  // format the endDate string
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  //create string from the values of formatedStartDate and formatedEndDate
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            200 Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Price</p>
            <p className="button">Type of place</p>
            <p className="button">Amenities</p>
            <p className="button">Free cancellation</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
