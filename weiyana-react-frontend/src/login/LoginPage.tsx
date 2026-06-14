import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export const LoginPage: React.FC = () => {
  const { login, error, validationErrors, clearErrors } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await login({ email, password });
      navigate(from, { replace: true });
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

        {/* Login Card */}
        <Card className="rounded-sm border-border shadow-sm bg-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-bold font-heading">Log in to your account</CardTitle>
            <CardDescription className="text-sm">
              Enter your email and password below to log in
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && !validationErrors && (
              <div className="mb-4 p-3 bg-destructive/10 border-l-2 border-destructive text-destructive text-xs rounded-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Password
                  </Label>
                  <a
                    href="#forgot"
                    className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Password reset functionality is handled by Laravel Fortify.');
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
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
                    autoComplete="current-password"
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

              {/* Remember Me */}
              <div className="flex items-center space-x-2 pt-1">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                  className="rounded-[2px] border-border h-4 w-4 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-foreground font-medium cursor-pointer select-none"
                >
                  Remember me
                </Label>
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
                    Logging in...
                  </>
                ) : (
                  'Log in'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-border pt-4 text-center">
            <span className="text-xs text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-foreground font-semibold hover:underline underline-offset-2">
                Sign up
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
