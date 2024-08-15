"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";
import { esES } from "@clerk/localizations";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

const localization = {
  signUp: {
    start: {
      title: "Create your account",
      subtitle: "to continue to {{applicationName}}",
      actionText: "Have an account?",
      actionLink: "Holaaa ingrese yaaa",
    },
    emailCode: {
      subtitle: "to access {{applicationName}}",
    },
  },
  signIn: {
    start: {
      title: "..Sign in",
      subtitle: "..to continue to {{applicationName}}",
      actionText: "..No account?",
      actionLink: "..Sign up",
    },
    password: {
      title: "..Enter your password",
      subtitle: "..to continue to {{applicationName}}",
      actionLink: "..Use another method",
    },
  },
};

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider localization={esES}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
