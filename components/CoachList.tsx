// components/CoachList.tsx
import CoachCard from "./CoachCard";

export interface Coach {
  id: string;
  name: string;
  ranking: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  specialties: string[];
}

interface CoachListProps {
  coaches: Coach[];
  title?: string;
}

export default function CoachList({
  coaches,
  title = "Nos entraîneurs",
}: CoachListProps) {
  return (
    <div className="mt-8">
      {title && (
        <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coaches.map((coach) => (
          <CoachCard
            key={coach.id}
            name={coach.name}
            ranking={coach.ranking}
            imageSrc={coach.imageSrc}
            imageAlt={coach.imageAlt}
            description={coach.description}
            specialties={coach.specialties}
            sectionTitle=""
          />
        ))}
      </div>
    </div>
  );
}