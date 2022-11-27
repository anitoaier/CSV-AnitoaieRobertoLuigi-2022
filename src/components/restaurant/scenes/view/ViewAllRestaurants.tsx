import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAll } from "../../../../configs/firebase/actions";

import RestaurantRow from "./RestaurantRow";

const Restaurants = () => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<DocumentData[]>([]);

  useEffect(() => {
    getAll("restaurants").then((data) => {
      setLoading(false);
      setRestaurants(data);
    });
  }, []);

  let content = null;
  const setDateTime = (date: Date, time : string) => {
    let sp = time.split(':');
    date.setHours(parseInt(sp[0],10));
    date.setMinutes(parseInt(sp[1],10));
    return date;
}

  const getRestaurantStatus = (openHour: string, closedHour: string): boolean => {
    const current = new Date();

    let currentTime = current.getTime(),
      startTime = setDateTime(new Date(current), openHour),
      endTime = setDateTime(new Date(current), closedHour);

    return currentTime > startTime.getTime() && currentTime < endTime.getTime();
  };
  if (loading) {
    content = <div>Please wait...</div>;
  } else if (restaurants.length) {
    content = restaurants.map((restaurant) => (
    !restaurant.temporaryClosed &&  (<RestaurantRow
      restaurantStatus = {getRestaurantStatus(restaurant.opensAt, restaurant.closesAt)}
      key={restaurant.id}
      id={restaurant.id}
      name={restaurant.name}
      shortDescription={restaurant.shortDescription}
    />)
    ));
  } else {
    content = <div>There are no restaurants.</div>;
  }

  return (
    <div>
      <h1>Restaurants</h1>
      {content}
    </div>
  );
};

export default Restaurants;
