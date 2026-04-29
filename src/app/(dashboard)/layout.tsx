import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[362px_1fr]">
      {/* Sidebar */}
      <aside className="bg-blue-50">Sidebar</aside>

      {/* Routes */}
      {children}
    </div>
  );
}
