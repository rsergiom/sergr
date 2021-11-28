import CardPr from "../components/CardPr";
import "../styles/content/ProjectsCrs.css";

export default function ProjectsCrs() {
  const data = [
    {
      name: "Page Pokemon",
      description: "",
      tech: "Vue - Node",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ccc5406-7323-4f72-939c-8b4191a8e369/detjqp8-6e607357-8c44-4abc-a35c-1d305544df76.jpg/v1/fill/w_1200,h_666,q_70,strp/cybercity_by_stasyasky_detjqp8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzExIiwicGF0aCI6IlwvZlwvMWNjYzU0MDYtNzMyMy00ZjcyLTkzOWMtOGI0MTkxYThlMzY5XC9kZXRqcXA4LTZlNjA3MzU3LThjNDQtNGFiYy1hMzVjLTFkMzA1NTQ0ZGY3Ni5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qwzncziSKKDKdN-8vYjmRmrAGkslH3BbYg0dl1he9_k",
      urlEx: "",
      urlGh: "",
    },
    {
      name: "Page Pokemon",
      description: "",
      tech: "Vue - Node",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3da3ac2-2f52-4de1-a289-3c6ae8c5143f/deryunv-1a796cfc-c18b-472d-a5f9-90d076e00bfe.png/v1/fill/w_498,h_350,q_70,strp/inktober2021__crystal__suit__a_negative_perception_by_bettons_deryunv-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvZjNkYTNhYzItMmY1Mi00ZGUxLWEyODktM2M2YWU4YzUxNDNmXC9kZXJ5dW52LTFhNzk2Y2ZjLWMxOGItNDcyZC1hNWY5LTkwZDA3NmUwMGJmZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dy2E-pfcNYThp4fhJq1IOAbUrJMemgt-pRDdFS_bNk0",
      urlEx: "",
      urlGh: "",
    },
    {
      name: "Just roll on",
      description:
        "Pedestrians and road traffic cross the Untermainbrücke in downtown Frankfurt.",
      tech: "Vue - Node",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b31e218f-e509-4597-9d67-552977634fac/deu5ejh-d1506a1a-e89b-42c6-b4ae-83071cf75fd5.jpg/v1/fill/w_525,h_350,q_70,strp/just_roll_on_by_photoartbk_deu5ejh-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvYjMxZTIxOGYtZTUwOS00NTk3LTlkNjctNTUyOTc3NjM0ZmFjXC9kZXU1ZWpoLWQxNTA2YTFhLWU4OWItNDJjNi1iNGFlLTgzMDcxY2Y3NWZkNS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sBpM8wkvSw9ncMHioL3yHqm6xm6O7XK-CNUpdrQBNUQ",
      urlEx: "",
      urlGh: "",
    },
    {
      name: "Just roll on",
      description:
        "Pedestrians and road traffic cross the Untermainbrücke in downtown Frankfurt.",
      tech: "Vue - Node",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b31e218f-e509-4597-9d67-552977634fac/deu5ejh-d1506a1a-e89b-42c6-b4ae-83071cf75fd5.jpg/v1/fill/w_525,h_350,q_70,strp/just_roll_on_by_photoartbk_deu5ejh-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvYjMxZTIxOGYtZTUwOS00NTk3LTlkNjctNTUyOTc3NjM0ZmFjXC9kZXU1ZWpoLWQxNTA2YTFhLWU4OWItNDJjNi1iNGFlLTgzMDcxY2Y3NWZkNS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sBpM8wkvSw9ncMHioL3yHqm6xm6O7XK-CNUpdrQBNUQ",
      urlEx: "",
      urlGh: "",
    },
    {
      name: "Just roll on",
      description:
        "Pedestrians and road traffic cross the Untermainbrücke in downtown Frankfurt.",
      tech: "Vue - Node",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b31e218f-e509-4597-9d67-552977634fac/deu5ejh-d1506a1a-e89b-42c6-b4ae-83071cf75fd5.jpg/v1/fill/w_525,h_350,q_70,strp/just_roll_on_by_photoartbk_deu5ejh-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvYjMxZTIxOGYtZTUwOS00NTk3LTlkNjctNTUyOTc3NjM0ZmFjXC9kZXU1ZWpoLWQxNTA2YTFhLWU4OWItNDJjNi1iNGFlLTgzMDcxY2Y3NWZkNS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sBpM8wkvSw9ncMHioL3yHqm6xm6O7XK-CNUpdrQBNUQ",
      urlEx: "",
      urlGh: "",
    },
    {
      name: "Just roll on",
      description:
        "Pedestrians and road traffic cross the Untermainbrücke in downtown Frankfurt.",
      tech: "Vue - Node",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b31e218f-e509-4597-9d67-552977634fac/deu5ejh-d1506a1a-e89b-42c6-b4ae-83071cf75fd5.jpg/v1/fill/w_525,h_350,q_70,strp/just_roll_on_by_photoartbk_deu5ejh-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvYjMxZTIxOGYtZTUwOS00NTk3LTlkNjctNTUyOTc3NjM0ZmFjXC9kZXU1ZWpoLWQxNTA2YTFhLWU4OWItNDJjNi1iNGFlLTgzMDcxY2Y3NWZkNS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sBpM8wkvSw9ncMHioL3yHqm6xm6O7XK-CNUpdrQBNUQ",
      urlEx: "",
      urlGh: "",
    },
  ];

  const Cards = data.map((card, index) => (
    <CardPr
      key={index}
      name={card.name}
      description={card.description}
      tech={card.tech}
      url={card.url}
      urlEx={card.urlEx}
      urlGh={card.urlGh}
    />
  ));

  return (
    <div className="projectsCrs">
      <div className="projectsCards">{Cards}</div>
      <div className="button">
        <button>
          <a href="/more">More</a>
        </button>
      </div>
    </div>
  );
}
