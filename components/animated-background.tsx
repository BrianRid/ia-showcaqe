/**
 * Animated background with gradient orbs, rotating rings and grid
 * Reusable across pages for consistency
 */
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Enhanced gradient orbs */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-wivoo-primary/30 via-wivoo-primary/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-wivoo-light/50 via-wivoo-light/15 to-transparent rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-purple-400/25 via-purple-300/8 to-transparent rounded-full blur-3xl animate-float-delayed" />
      
      {/* Additional depth orbs */}
      <div 
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-radial from-wivoo-primary/15 to-transparent rounded-full blur-2xl animate-float" 
        style={{ animationDelay: '1s' }} 
      />

      {/* Rotating gradient rings with more presence */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 border-2 border-wivoo-primary/20 rounded-full animate-rotate-slow shadow-wivoo-md" />
      <div 
        className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-wivoo-light/30 rounded-full animate-rotate-slow shadow-wivoo-md" 
        style={{ animationDirection: 'reverse' }} 
      />

      {/* Enhanced grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(69,29,199,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(69,29,199,0.05)_1px,transparent_1px)] bg-size-[100px_100px]" />
    </div>
  );
}
