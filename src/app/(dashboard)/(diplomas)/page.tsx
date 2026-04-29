import DiplomaList from "@/features/diploma/components/diploma-list";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 p-6">
      {/* Heading */}
      <h1 className="font-inter text-3xl font-bold text-blue-600 py-4">
        Diplomas
      </h1>

      {/* Diplomas */}
      <DiplomaList />
    </main>
  );
}
