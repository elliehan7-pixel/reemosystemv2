window.REEMO_CONFIG = {

  // The bare project address — NO /rest/v1/ on the end.
  SUPABASE_URL: "https://gbngqqcfgirjomedsoji.supabase.co",

  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibmdxcWNmZ2lyam9tZWRzb2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTA1NzEsImV4cCI6MjEwMzc2NjU3MX0.wpz2WW9a2xkhitot2EYwaZW6Dyr5GM-fr76pP3eU1wc",

  // Fill in later, once the Edge Function that emails the code exists.
  CODE_ENDPOINT: "",

  // Change this — clients see it on sign-in, journal and confirmation.
  THERAPIST_NAME: "Dr. Rohani",

  CRISIS: [
    { label: "Emergency · danger right now", number: "999" },
    { label: "Talian HEAL",                  number: "15555" },
    { label: "Talian Kasih · 24 hours",      number: "15999" },
    { label: "Befrienders KL · 24 hours",    number: "03-7627 2929" }
  ]
};
