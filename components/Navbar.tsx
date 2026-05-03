import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-8 h-12 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div>
        <h2 className="font-bold text-sm">Hackshastra</h2>
      </div>
      <div className="flex gap-1">
        <Button
          variant="outline"
          type="button"
          title="PDF,DOC,DOCX - max 5MB"
          aria-label="Upload your resume file"
        >
          Upload Resume
        </Button>

        <Button
          type="button"
          aria-label="Fill form fields with AI"
          variant="primary"
        >
          ✦ Fill with AI
        </Button>
      </div>
    </nav>
  );
};
