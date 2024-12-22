export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} My Pro App. All rights reserved.</p>
      </div>
    </footer>
  );
};
