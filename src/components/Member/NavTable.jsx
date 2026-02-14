"use client";
  const sections = [
    { id: "profile", label: "Profile" },
    { id: "funfacts", label: "Fun Facts" },
    { id: "eras", label: "Eras" },
  ];

export default function NavTable() {
  return (
    <nav>
      <ul className="gap-y-2 text-xl tracking-wide">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}