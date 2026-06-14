import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const RegisterPage: React.FC = () => {
  const { register, error, validationErrors, clearErrors } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      navigate('/', { replace: true });
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-6 relative font-sans">
      {/* Floating Theme Toggle */}
      <div className="absolute top-6 right-6">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          className="h-9 w-9 rounded-sm border-border cursor-pointer"
        >
          {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
      </div>

      <div className="w-full max-w-sm space-y-6">
        {/* Logo Container */}
        <div className="flex flex-col items-center text-center space-y-1">
          <div className="h-14 w-14 flex items-center justify-center bg-transparent rounded-sm overflow-hidden">
            <img src="/Weiyana_Logo.jpg" alt="Weiyana Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground mt-2">
            weiyana
          </span>
          <span className="text-[10px] text-muted-foreground font-semibold tracking-widest uppercase">
            Marketing Workspace
          </span>
        </div>

        {/* Register Card */}
        <Card className="rounded-sm border-border shadow-sm bg-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-bold font-heading">Create your account</CardTitle>
            <CardDescription className="text-sm">
              Sign up to get started with Weiyana Marketing
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && !validationErrors && (
              <div className="mb-4 p-3 bg-destructive/10 border-l-2 border-destructive text-destructive text-xs rounded-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearErrors();
                  }}
                  required
                  autoComplete="name"
                  className="rounded-sm border-border h-10 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:border-ring bg-background"
                />
                {validationErrors?.name && (
                  <p className="text-xs text-destructive mt-1 font-medium">{validationErrors.name[0]}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email address
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearErrors();
                  }}
                  required
                  autoComplete="email"
                  className="rounded-sm border-border h-10 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:border-ring bg-background"
                />
                {validationErrors?.email && (
                  <p className="text-xs text-destructive mt-1 font-medium">{validationErrors.email[0]}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Password
                </Label>
                <div className="relative flex items-center">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      clearErrors();
                    }}
                    required
                    autoComplete="new-password"
                    className="rounded-sm border-border h-10 pr-10 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:border-ring bg-background w-full"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-transparent cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {validationErrors?.password && (
                  <p className="text-xs text-destructive mt-1 font-medium">{validationErrors.password[0]}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="passwordConfirmation" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Confirm Password
                </Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="passwordConfirmation"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                    clearErrors();
                  }}
                  required
                  autoComplete="new-password"
                  className="rounded-sm border-border h-10 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:border-ring bg-background"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-10 rounded-sm font-semibold tracking-wide uppercase text-xs cursor-pointer shadow-sm"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Signing up...
                  </>
                ) : (
                  'Sign up'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-border pt-4 text-center">
            <span className="text-xs text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-foreground font-semibold hover:underline underline-offset-2">
                Sign In
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
