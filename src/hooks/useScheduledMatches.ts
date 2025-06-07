
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useScheduledMatches = () => {
  return useQuery({
    queryKey: ["scheduled-matches"],
    queryFn: async () => {
      console.log("Fetching scheduled matches...");
      
      // First get all scheduled matches
      const { data: scheduledMatches, error: scheduledError } = await supabase
        .from("scheduled_matches")
        .select("*")
        .order("match_time_utc", { ascending: true });

      if (scheduledError) {
        console.error("Error fetching scheduled matches:", scheduledError);
        throw scheduledError;
      }

      // Then get all match results to filter out completed matches
      const { data: matchResults, error: resultsError } = await supabase
        .from("match_results")
        .select("scheduled_match_id")
        .not("scheduled_match_id", "is", null);

      if (resultsError) {
        console.error("Error fetching match results:", resultsError);
        throw resultsError;
      }

      // Filter out scheduled matches that already have results
      const completedMatchIds = new Set(matchResults.map(result => result.scheduled_match_id));
      const upcomingMatches = scheduledMatches.filter(match => !completedMatchIds.has(match.id));

      console.log("Upcoming matches (excluding completed):", upcomingMatches);
      return upcomingMatches;
    },
  });
};
