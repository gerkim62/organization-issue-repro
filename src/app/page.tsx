"use client";

import { authClient } from "@/lib/auth-client";

export default function App() {
  // the issue is when trying to useActiveOrganization()
  const { data: activeOrganization } = authClient.useActiveOrganization();
  return (
    <div>{activeOrganization ? <p>{activeOrganization.name}</p> : null}</div>
  );
}
