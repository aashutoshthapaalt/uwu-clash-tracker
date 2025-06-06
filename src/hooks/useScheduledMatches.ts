
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useScheduledMatches = () => {
  return useQuery({
    queryKey: ["scheduled-matches"],
    queryFn: async () => {
      console.log("Fetching scheduled matches...");
      const { data, error } = await supabase
        .from("scheduled_matches")
        .select("*")
        .order("match_time_utc", { ascending: true });

      if (error) {
        console.error("Error fetching scheduled matches:", error);
        throw error;
      }

      console.log("Scheduled matches fetched:", data);
      return data;
    },
  });
};
