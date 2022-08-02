import TextHeader from "./base/TextHeader";

const EventData = [
  {
    time: "5:00pm",
    title: "Doors open at Granite Links",
    location: "Granite Links - 100 Quarry Hill Dr, Quincy, MA",
    description: "We love this place",
  },
  {
    time: "5:30pm",
    title: "Wedding Ceremony",
    location: "Granite Links Grand Ballroom",
    description: "Pls don't be late",
  },
  {
    time: "6:00pm",
    title: "Cocktail Hour",
    location: "Granite Links Foyer",
    description: "Getcha drink on",
  },
  {
    time: "7:30pm",
    title: "Candlelight Dinner",
    location: "Granite Links Grand Ballroom",
    description: "Mmmmm food",
  },
  {
    time: "9:00pm",
    title: "Reception and Dancing",
    location: "Granite Links Grand Ballroom",
    description: "Mmmmm dancing",
  },
  {
    time: "12:00am",
    title: "After Party",
    location: "TBD",
    description: "AFTER PARTY WOOO",
  },
];

const Event = (props) => {
  return (
    <div className="Event">
      <h4 className="Event-time">{props.time}</h4>
      <h4 className="Event-title">{props.title}</h4>
      <h5 className="Event-location">{props.location}</h5>
      <h5 className="Event-location">{props.description}</h5>
      {props.actions && <div className="Event-actions">Directions</div>}
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <a id="events" href="events"></a>
      <TextHeader title="Events Of The Day"/>
      <div className="Events-timeline">
        {EventData.map((e, index) => {
          return (
            <Event
              time={e.time}
              title={e.title}
              location={e.location}
              description={e.description}
              key={e.index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
