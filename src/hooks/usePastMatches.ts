
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePastMatches = () => {
  return useQuery({
    queryKey: ["past-matches"],
    queryFn: async () => {
      console.log("Fetching past matches...");
      const { data, error } = await supabase
        .from("match_results")
        .select(`
          *,
          player_performances (
            *,
            players (
              name
            )
          )
        `)
        .order("match_date", { ascending: false });

      if (error) {
        console.error("Error fetching past matches:", error);
        throw error;
      }

      console.log("Past matches fetched:", data);
      return data;
    },
  });
};
