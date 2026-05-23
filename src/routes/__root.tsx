import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <div className="text-[140px] font-extrabold leading-none text-[var(--color-brand)]">404</div>
        <h2 className="h2 mt-2">Oops! Page Not Found</h2>
        <p className="mt-3 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="h2">Something went wrong</h1>
        <p className="mt-2">Try refreshing or head back home.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <Link to="/" className="btn-outline">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mediko — Modern Healthcare for a Better Tomorrow" },
      { name: "description", content: "Mediko delivers personalized, compassionate medical services. Book appointments, meet our doctors, and explore our specialties." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </QueryClientProvider>
  );
}
