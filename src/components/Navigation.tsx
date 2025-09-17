import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navItems = [
    { label: "Learning", href: "/learning", isRoute: true },
    { label: "Quiz", href: "/quiz", isRoute: true },
    { label: "Virtual Drills", href: "/drills", isRoute: true },
    { label: "Features", href: "#features", isRoute: false },
    { label: "Impact", href: "#impact", isRoute: false },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-hero-gradient p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">DisasterEd India</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => 
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            )}
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    {profile?.full_name || user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm text-muted-foreground">
                    {profile?.role && (
                      <div className="capitalize">{profile.role}</div>
                    )}
                    {profile?.institution && (
                      <div className="text-xs">{profile.institution}</div>
                    )}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="default" className="bg-hero-gradient border-0 hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => 
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              
              {user ? (
                <div className="pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-2">
                    {profile?.full_name || user.email}
                    {profile?.role && <div className="capitalize">({profile.role})</div>}
                  </div>
                  <Button onClick={handleSignOut} variant="outline" className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link to="/auth">
                  <Button variant="default" className="bg-hero-gradient border-0 hover:opacity-90 mt-4">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;