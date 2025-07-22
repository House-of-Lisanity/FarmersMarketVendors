"use client";

import { useEffect, useState } from "react";

type EventType = {
  _id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
};

export default function Calendar() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to load events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section id="calendar">
      <h2>Upcoming Events</h2>
      {loading && <p>Loading events...</p>}
      {!loading && events.length === 0 && <p>No events scheduled right now.</p>}
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.title}</strong> –{" "}
            {new Date(event.date).toLocaleDateString()}
            <br />
            <em>{event.location}</em>
            {event.description && <p>{event.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
