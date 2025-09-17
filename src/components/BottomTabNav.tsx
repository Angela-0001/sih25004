import { Calendar, Home, IndianRupee, Camera } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { key: "dashboard", label: "Home", icon: Home, to: "/dashboard" },
  { key: "doctor", label: "Fasal Doctor", icon: Camera, to: "/fasal-doctor" },
  { key: "mandi", label: "Mandi Bhaba", icon: IndianRupee, to: "/mandi-bhaba" },
  { key: "calendar", label: "Calendar", icon: Calendar, to: "/krishi-calendar" },
];

const isActive = (pathname: string, to: string | null) => {
  if (!to) return false;
  if (to === "/dashboard" && pathname === "/") return true;
  return pathname.startsWith(to);
};

const BottomTabNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md border-t border-border/60 z-40">
      <div className="max-w-3xl mx-auto grid grid-cols-4 text-center">
        {tabs.map((t) => {
          const ActiveIcon = t.icon;
          const active = isActive(pathname, t.to);
          return (
            <button
              key={t.key}
              className={`py-3 flex flex-col items-center gap-1 transition-colors ${
                active ? "text-agriculture-green" : "text-muted-foreground hover:text-agriculture-green"
              }`}
              onClick={() => {
                if (t.to) navigate(t.to);
              }}
            >
              <ActiveIcon className="h-5 w-5" />
              <span className="text-xs">{t.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabNav;


