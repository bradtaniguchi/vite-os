import { Card } from "flowbite-react";

/**
 * The app-list is a list of all the apps in the system
 */
export function AppList() {
  return (
    <ul className="grid grid-cols-4 gap-4 grid-rows-4 h-full p-4">
      {Array.from({ length: 16 })
        .fill(null)
        .map((_, index) => (
          <li key={index}>
            <Card className="h-full">item {index + 1}</Card>
          </li>
        ))}
    </ul>
  );
}
