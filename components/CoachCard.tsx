import Image from "next/image";

export interface CoachCardProps {
  name: string;
  ranking: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  specialties: string[];
  sectionTitle?: string;
}

export default function CoachCard({
  name,
  ranking,
  description,
  imageSrc,
  imageAlt,
  specialties,
  sectionTitle,
}: CoachCardProps) {
  return (
    <div className="flex flex-col h-full">
      {sectionTitle && (
        <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">
          {sectionTitle}
        </h3>
      )}

      {/* Carte épurée avec trait de couleur supérieur vert */}
      <div className="group bg-white rounded-2xl border border-gray-200 border-t-4 border-t-green-600 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
        
        {/* Section haute : Photo + Infos */}
        <div className="p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start border-b border-gray-100">
          
          {/* Grande photo portrait (144px x 192px) avec coins arrondis et ombre douce */}
          <div className="relative w-36 h-48 rounded-xl overflow-hidden shrink-0 shadow-md border border-gray-100 group-hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Textes & Badges */}
          <div className="flex flex-col text-center sm:text-left justify-center py-1">
            <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 border border-green-200/80 px-3 py-1 rounded-full w-fit mx-auto sm:mx-0 mb-3">
              Meilleur classement : {ranking}
            </span>

            <h4 className="text-2xl font-bold text-gray-900 leading-tight">
              {name}
            </h4>
            
            <p className="text-sm text-green-600 font-medium mt-1">
              Entraîneur diplômé d'État
            </p>
          </div>
        </div>

        {/* Section basse : Description & Spécialités */}
        <div className="p-6 flex flex-col flex-1 justify-between gap-5">
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>

          {specialties.length > 0 && (
            <div className="bg-green-50/60 p-4 rounded-xl border border-green-100 mt-auto">
              <h5 className="font-semibold text-green-900 text-xs uppercase tracking-wider mb-2.5">
                Spécialités
              </h5>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {specialties.map((specialty, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}